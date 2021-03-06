import React from 'react';
import { Container, Row, Pagination, PaginationItem } from 'reactstrap';
import { connect } from 'react-redux';
import TemplateItem from './template-item';
import { WEB_CATEGORY } from 'commons/enum';
import { getFilteredTemplatesSelector, getTotalPageSelector } from 'store/template/selector';
import { getTemplate, selectTemplateCategory, selectTemplatePage } from 'store/template/action';
import {
  SectionStyled,
  SectionHeaderStyled,
  SectionTitleStyled,
  PaginationLinkBtn,
} from '../../style';
import { TemplateBtnFilter } from './style';
import { isEmpty } from 'commons/utils';

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
      <TemplateBtnFilter
        key={item}
        selected={selectedTemplateCategory === item}
        className="btn btn-common"
        data-filter={`.${item.toLowerCase()}`}
        onClick={() => selectTemplateCategoryAction(item)}
      >
        {WEB_CATEGORY[item]}
      </TemplateBtnFilter>
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
                <TemplateBtnFilter
                  className="btn btn-common"
                  selected={selectedTemplateCategory === ''}
                  data-filter="all"
                  onClick={() => selectTemplateCategoryAction('')}
                >
                  Tất cả
                </TemplateBtnFilter>
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
