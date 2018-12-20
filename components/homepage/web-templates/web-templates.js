import React from 'react';
import { Container, Row, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import css from 'styled-jsx/css';
import {
  GET_TEMPLATES,
  SELECT_TEMPLATE_CATEGORY,
  SELECT_TEMPLATE_PAGE,
} from '../../../reducers/template';
import { WEB_CATEGORY } from '../../../commons/enum';
import TemplateItem from './template-item';
import { getFilteredTemplatesSelector, getTotalPageSelector } from '../../../selectors/templates';

function mapStateToProps(state) {
  return {
    selectedTemplateCategory: state.template.selectedTemplateCategory,
    selectedPage: state.template.selectedPage,
    listTemplates: getFilteredTemplatesSelector(state),
    totalPage: getTotalPageSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTemplates: () => dispatch({ type: GET_TEMPLATES }),
    selectTemplateCategoryAction: cat =>
      dispatch({ type: SELECT_TEMPLATE_CATEGORY, category: cat }),
    selectPageAction: page => dispatch({ type: SELECT_TEMPLATE_PAGE, page }),
  };
}

class WebTemplates extends React.Component {
  componentDidMount() {
    const { listTemplates, getTemplates } = this.props;
    if (isEmpty(listTemplates)) {
      getTemplates();
    }
  }

  renderCategoryItem = item => {
    const { selectedTemplateCategory, selectTemplateCategoryAction } = this.props;
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

  renderTemplateItem = (template, index) => {
    return <TemplateItem key={index} template={this.props.listTemplates[template]} />;
  };

  renderPaginationItem = page => {
    const { selectPageAction } = this.props;
    return (
      <PaginationItem
        key={page}
        active={page === this.props.selectedPage}
        onClick={() => selectPageAction(page)}
      >
        <PaginationLink>{page + 1}</PaginationLink>
      </PaginationItem>
    );
  };

  render() {
    const {
      selectedTemplateCategory,
      selectTemplateCategoryAction,
      listTemplates,
      totalPage,
      selectedPage,
      selectPageAction,
    } = this.props;
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
          <Row>{templateIds.map(this.renderTemplateItem)}</Row>
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
        <style jsx>{styles}</style>
      </section>
    );
  }
}

const styles = css`
  .item-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
  }
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WebTemplates);
