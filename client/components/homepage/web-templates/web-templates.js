import React from 'react';
import { Container, Row, Pagination, PaginationItem } from 'reactstrap';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import TemplateItem from './template-item';
import { WEB_CATEGORY } from '../../../../constants/enum';
import { getFilteredTemplatesSelector, getTotalPageSelector } from '../../../selectors/templates';
import { getTemplate, selectTemplateCategory, selectTemplatePage } from '../../../actions/template';
import {
  SectionStyled,
  SectionHeaderStyled,
  SectionTitleStyled,
  PaginationLinkBtn,
} from '../../style';

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
    getTemplates: () => dispatch(getTemplate()),
    selectTemplateCategoryAction: cat => dispatch(selectTemplateCategory(cat)),
    selectPageAction: page => dispatch(selectTemplatePage(page)),
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
    const { selectTemplateCategoryAction, selectedTemplateCategory } = this.props;
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
    const { selectPageAction, selectedPage } = this.props;
    return (
      <PaginationItem
        key={page}
        active={page === selectedPage}
        onClick={() => selectPageAction(page)}
      >
        <PaginationLinkBtn selected={page === selectedPage}>{page + 1}</PaginationLinkBtn>
      </PaginationItem>
    );
  };

  render() {
    const {
      selectTemplateCategoryAction,
      listTemplates,
      totalPage,
      selectPageAction,
      selectedTemplateCategory,
      selectedPage,
    } = this.props;
    const templateCategories = Object.keys(WEB_CATEGORY);
    const templateIds = Object.keys(listTemplates);
    return (
      <SectionStyled id="kho-giao-dien">
        <Container>
          <SectionHeaderStyled>
            <SectionTitleStyled>Kho giao diện</SectionTitleStyled>
            <p>
              Kho giao diện khổng lồ được cập nhật thường xuyên với hơn 200+ mẫu website thích hợp
              cho doanh nghiệp của bạn
            </p>
          </SectionHeaderStyled>
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
          <div className="d-flex justify-content-center mt-3">
            <Pagination aria-label="page navigation web template">
              {selectedPage !== 0 && (
                <PaginationItem onClick={() => selectPageAction(selectedPage - 1)}>
                  <PaginationLinkBtn previous />
                </PaginationItem>
              )}
              {Array.from(Array(totalPage).keys()).map(this.renderPaginationItem)}
              {selectedPage !== totalPage - 1 && (
                <PaginationItem onClick={() => selectPageAction(selectedPage + 1)}>
                  <PaginationLinkBtn next />
                </PaginationItem>
              )}
            </Pagination>
          </div>
        </Container>
      </SectionStyled>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WebTemplates);
