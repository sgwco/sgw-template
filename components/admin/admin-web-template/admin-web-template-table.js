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
import moment from 'moment';
import { isEmpty } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAdminTemplatesSelector, getTotalPageSelector } from '../../../selectors/templates';
import { GET_TEMPLATES } from '../../../reducers/template';
import { ADMIN_SELECT_TEMPLATE_PAGE } from '../../../reducers/admin';

function mapStateToProps(state) {
  return {
    templateSelectedPage: state.admin.templateSelectedPage,
    listTemplates: getAdminTemplatesSelector(state),
    totalPage: getTotalPageSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTemplates: () => dispatch({ type: GET_TEMPLATES }),
    selectPage: page => dispatch({ type: ADMIN_SELECT_TEMPLATE_PAGE, page }),
  };
}

class AdminWebTemplateTable extends React.Component {
  state = {
    popoverIsShown: null,
  };

  componentDidMount() {
    const { listTemplates, getTemplates } = this.props;
    if (isEmpty(listTemplates)) {
      getTemplates();
    }
  }

  togglePopover = (id = null) => this.setState({ popoverIsShown: id });

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

  renderTemplateItem = id => {
    const template = this.props.listTemplates[id];
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>
          <strong>{template.name}</strong>
        </td>
        <td>{template.price} VND</td>
        <td>
          <a href={`https://${template.url}`}>{template.url}</a>
        </td>
        <td>
          <Badge color="success">{template.category}</Badge>
        </td>
        <td>{moment(template.createdAt).format('DD/MM/YYYY')}</td>
        <td>
          <Button color="primary" id={`popover-${id}`} onClick={() => this.togglePopover(id)}>
            Xem mẫu
          </Button>
          <Popover
            placement="left"
            isOpen={this.state.popoverIsShown === id}
            target={`popover-${id}`}
            toggle={this.togglePopover}
          >
            <PopoverBody>
              <img src={template.thumbnail} className="thumbnail" alt="preview" />
            </PopoverBody>
          </Popover>
        </td>
        <style jsx>{`
          .thumbnail {
            width: 100%;
          }
        `}</style>
      </tr>
    );
  };

  render() {
    const { listTemplates, templateSelectedPage, selectPage, totalPage } = this.props;
    const listTemplatesById = Object.keys(listTemplates);

    return (
      <Container fluid={true}>
        <div className="animated fadeIn">
          <Row>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <FontAwesomeIcon icon="box-open" /> Danh sách mẫu website
                </div>
                <div className="card-body">
                  <Table bordered striped>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Tên theme</th>
                        <th>Giá</th>
                        <th>Đường dẫn</th>
                        <th>Danh mục</th>
                        <th>Ngày tạo</th>
                        <th>Xem mẫu</th>
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
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminWebTemplateTable);
