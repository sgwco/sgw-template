import React from 'react';
import { Container, Row, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { Flipper, Flipped } from 'react-flip-toolkit';
import TemplateItem from './template-item';
import { WEB_CATEGORY } from '../../../../commons/enum';
import { getFilteredTemplatesSelector, getTotalPageSelector } from '../../../selectors/templates';
import { getTemplate } from '../../../actions/template';

function mapStateToProps(state) {
  return {
    listTemplates: getFilteredTemplatesSelector(state),
    totalPage: getTotalPageSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTemplates: () => dispatch(getTemplate()),
    // selectTemplateCategoryAction: cat =>
    //   dispatch({ type: SELECT_TEMPLATE_CATEGORY, category: cat }),
    // selectPageAction: page => dispatch({ type: SELECT_TEMPLATE_PAGE, page }),
  };
}

class WebTemplates extends React.Component {
  state = {
    selectedTemplateCategory: '',
    selectedPage: 0,
  };

  componentDidMount() {
    const { listTemplates, getTemplates } = this.props;
    if (isEmpty(listTemplates)) {
      getTemplates();
    }
  }

  renderCategoryItem = item => {
    const { selectTemplateCategoryAction } = this.props;
    const { selectedTemplateCategory } = this.state;
    return (
      <a
        key={item}
        className={`filter btn btn-common btn-effect ${selectedTemplateCategory === item &&
          'active'}`}
        data-filter={`.${item.toLowerCase()}`}
        onClick={() => selectTemplateCategoryAction(item)}
      >
        {WEB_CATEGORY[item]}
      </a>
    );
  };

  renderTemplateItem = template => {
    return (
      <Flipped key={template.id} flipId={template.id}>
        <TemplateItem template={this.props.listTemplates[template]} />
      </Flipped>
    );
  };

  renderPaginationItem = page => {
    const { selectPageAction } = this.props;
    return (
      <PaginationItem
        key={page}
        active={page === this.state.selectedPage}
        onClick={() => selectPageAction(page)}
      >
        <PaginationLink>{page + 1}</PaginationLink>
      </PaginationItem>
    );
  };

  render() {
    const { selectTemplateCategoryAction, listTemplates, totalPage, selectPageAction } = this.props;
    const { selectedTemplateCategory, selectedPage } = this.state;
    const templateCategories = Object.keys(WEB_CATEGORY);
    const templateIds = Object.keys(listTemplates);
    return (
      <section id="kho-giao-dien" className="section">
        <Container>
          <div className="section-header">
            <h2 className="section-title">Kho giao diện</h2>
            <p className="section-subtitle">
              Kho giao diện khổng lồ được cập nhật thường xuyên với hơn 200+ mẫu website thích hợp
              cho doanh nghiệp của bạn
            </p>
          </div>
          <Row>
            <div className="col-md-12">
              <div className="controls text-center">
                <a
                  className={`btn btn-common btn-effect ${selectedTemplateCategory === '' &&
                    'active'}`}
                  data-filter="all"
                  onClick={() => selectTemplateCategoryAction('')}
                >
                  Tất cả
                </a>
                {templateCategories.map(this.renderCategoryItem)}
              </div>
            </div>
          </Row>
          <Flipper flipKey={templateIds.map(item => item.id).join('')}>
            <Row>{templateIds.map(this.renderTemplateItem)}</Row>
          </Flipper>
          <div className="item-center">
            <Pagination aria-label="page navigation web template">
              {selectedPage !== 0 && (
                <PaginationItem onClick={() => selectPageAction(selectedPage - 1)}>
                  <PaginationLink previous />
                </PaginationItem>
              )}
              {Array.from(Array(totalPage).keys()).map(this.renderPaginationItem)}
              {selectedPage !== totalPage - 1 && (
                <PaginationItem onClick={() => selectPageAction(selectedPage + 1)}>
                  <PaginationLink next />
                </PaginationItem>
              )}
            </Pagination>
          </div>
        </Container>
      </section>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WebTemplates);
