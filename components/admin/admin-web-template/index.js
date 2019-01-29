import React from 'react';
import {
  Container,
  Row,
  Table,
  Badge,
  Button,
  Popover,
  PopoverBody,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAdminTemplatesSelector, getAdminTotalPageSelector } from '../../../selectors/templates';
import { ADMIN_SELECT_TEMPLATE_PAGE } from '../../../reducers/admin';
import AdminWebTemplateForm from './admin-web-template-form';
import EditableCell from '../../../commons/editable-cell';
import { WEB_CATEGORY } from '../../../../constants/enum';
import { formatNumber, isEmpty, formatDate } from '../../../../constants/utils';
import AdminLayout from '../admin.layout';
import { GET_TEMPLATES, EDIT_TEMPLATE, DELETE_TEMPLATE } from '../../../actions/template';
import { AdminTemplateThumbnail, AdminRowInProgress } from '../admin.style';

function mapStateToProps(state) {
  return {
    templateSelectedPage: state.admin.templateSelectedPage,
    listTemplates: getAdminTemplatesSelector(state),
    totalPage: getAdminTotalPageSelector(state),
    adminEditInProgress: state.template.adminEditInProgress,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTemplates: () => dispatch({ type: GET_TEMPLATES }),
    selectPage: page => dispatch({ type: ADMIN_SELECT_TEMPLATE_PAGE, page }),
    editTemplate: data => dispatch({ type: EDIT_TEMPLATE, data }),
    deleteTemplate: id => dispatch({ type: DELETE_TEMPLATE, id }),
  };
}

class AdminWebTemplate extends React.Component {
  state = {
    popoverIsShown: null,
    createFormIsShown: false,
  };

  componentDidMount() {
    const { listTemplates, getTemplates } = this.props;
    if (isEmpty(listTemplates)) {
      getTemplates();
    }
  }

  togglePopover = (id = null) => this.setState({ popoverIsShown: id });

  toggleCreateForm = () => this.setState({ createFormIsShown: !this.state.createFormIsShown });

  onDelete = id => {
    const result = confirm('Bạn có chắc chắn muốn xóa?');
    if (result) {
      this.props.deleteTemplate(id);
    }
  };

  renderPaginationItem = page => {
    const { selectPage, templateSelectedPage } = this.props;
    return (
      <PaginationItem
        key={page}
        active={page === templateSelectedPage}
        onClick={() => selectPage(page)}
      >
        <PaginationLink>{page + 1}</PaginationLink>
      </PaginationItem>
    );
  };

  renderTemplateCategoryItem = category => {
    return (
      <Badge key={category} className="mr-2" color="success">
        {category}
      </Badge>
    );
  };

  renderTemplateItem = id => {
    const template = this.props.listTemplates[id];
    const categories = Object.keys(WEB_CATEGORY).map(item => WEB_CATEGORY[item]);
    return (
      <AdminRowInProgress loading={this.props.adminEditInProgress.indexOf(id) > -1} key={id}>
        <td>{id}</td>
        <EditableCell
          type="text"
          value={template.name}
          onSave={name => this.props.editTemplate({ id, name })}
        >
          <strong>{template.name}</strong>
        </EditableCell>
        <EditableCell
          type="text"
          value={template.price}
          onSave={price => this.props.editTemplate({ id, price })}
        >
          {formatNumber(template.price)} VND
        </EditableCell>
        <EditableCell
          type="text"
          value={template.url}
          onSave={url => this.props.editTemplate({ id, url })}
        >
          <a href={`https://${template.url}`} target="_blank" rel="noopener noreferrer">
            {template.url}
          </a>
        </EditableCell>
        <EditableCell
          type="select"
          data={categories}
          multiple={true}
          value={template.category.split(',')}
          onSave={category => this.props.editTemplate({ id, category })}
        >
          {template.category.split(',').map(this.renderTemplateCategoryItem)}
        </EditableCell>
        <td>{formatDate(new Date(template.createdAt))}</td>
        <td className="d-flex flex-row justify-content-around">
          <Button color="primary" id={`popover-${id}`} onClick={() => this.togglePopover(id)}>
            Xem mẫu
          </Button>
          <Button color="danger" onClick={() => this.onDelete(id)}>
            Xóa
          </Button>
          <Popover
            placement="left"
            isOpen={this.state.popoverIsShown === id}
            target={`popover-${id}`}
            toggle={this.togglePopover}
          >
            <PopoverBody>
              <AdminTemplateThumbnail
                src={`/static/images/uploads/${template.url}.jpg`}
                alt="preview"
              />
            </PopoverBody>
          </Popover>
        </td>
      </AdminRowInProgress>
    );
  };

  render() {
    const { listTemplates, templateSelectedPage, selectPage, totalPage } = this.props;
    const listTemplatesById = Object.keys(listTemplates);

    return (
      <AdminLayout>
        <Container fluid={true}>
          <div className="animated fadeIn">
            <Row>
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <FontAwesomeIcon icon="box-open" /> Danh sách mẫu website
                    <Button color="success" className="ml-3" onClick={this.toggleCreateForm}>
                      Tạo mới
                    </Button>
                  </div>
                  <div className="card-body">
                    {this.state.createFormIsShown && (
                      <AdminWebTemplateForm onToggle={this.toggleCreateForm} />
                    )}
                    <Table bordered striped>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Tên theme</th>
                          <th>Giá</th>
                          <th>Đường dẫn</th>
                          <th>Danh mục</th>
                          <th>Ngày tạo</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>{listTemplatesById.map(this.renderTemplateItem)}</tbody>
                    </Table>
                    <Pagination aria-label="page navigation web template">
                      {templateSelectedPage !== 0 && (
                        <PaginationItem onClick={() => selectPage(templateSelectedPage - 1)}>
                          <PaginationLink previous />
                        </PaginationItem>
                      )}
                      {Array.from(Array(totalPage).keys()).map(this.renderPaginationItem)}
                      {templateSelectedPage !== totalPage - 1 && (
                        <PaginationItem onClick={() => selectPage(templateSelectedPage + 1)}>
                          <PaginationLink next />
                        </PaginationItem>
                      )}
                    </Pagination>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </Container>
      </AdminLayout>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminWebTemplate);
