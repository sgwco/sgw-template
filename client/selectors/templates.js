import { createSelector } from 'reselect';
import { TEMPLATE_PER_PAGE } from '../../constants/const';
import { WEB_CATEGORY } from '../../constants/enum';

const getTemplates = state => state.template.listTemplates;
const getTemplatesPage = state => state.template.selectedPage;
const getTemplatesCategory = state => state.template.selectedTemplateCategory;

const getAdminTemplatePage = state => state.admin.templateSelectedPage;

export const getFilteredTemplatesSelector = createSelector(
  [getTemplates, getTemplatesPage, getTemplatesCategory],
  (templates, page, category) => {
    let filteredTemplates = Object.keys(templates);
    if (category) {
      filteredTemplates = filteredTemplates.filter(
        item => templates[item].category.split(',').indexOf(WEB_CATEGORY[category]) !== -1
      );
    }
    if (page !== null) {
      filteredTemplates = filteredTemplates.slice(
        page * TEMPLATE_PER_PAGE,
        page * TEMPLATE_PER_PAGE + TEMPLATE_PER_PAGE
      );
    }
    return filteredTemplates.reduce((result, key) => ({ ...result, [key]: templates[key] }), {});
  }
);

export const getAdminTemplatesSelector = createSelector(
  [getTemplates, getAdminTemplatePage],
  (templates, page) => {
    let filteredTemplates = Object.keys(templates);
    if (page !== null) {
      filteredTemplates = filteredTemplates.slice(
        page * TEMPLATE_PER_PAGE,
        page * TEMPLATE_PER_PAGE + TEMPLATE_PER_PAGE
      );
    }
    return filteredTemplates.reduce((result, key) => ({ ...result, [key]: templates[key] }), {});
  }
);

export const getTotalPageSelector = createSelector(
  [getTemplates, getTemplatesCategory],
  (templates, category) => {
    let filteredTemplates = Object.keys(templates);
    if (category) {
      filteredTemplates = filteredTemplates.filter(
        item => templates[item].category.split(',').indexOf(WEB_CATEGORY[category]) !== -1
      );
    }
    const numberOfTemplates = Object.keys(filteredTemplates).length;
    let totalPage = parseInt(numberOfTemplates / TEMPLATE_PER_PAGE);
    if (numberOfTemplates % TEMPLATE_PER_PAGE !== 0) {
      totalPage++;
    }
    return totalPage;
  }
);

export const getAdminTotalPageSelector = createSelector(
  getTemplates,
  templates => {
    const numberOfTemplates = Object.keys(templates).length;
    let totalPage = parseInt(numberOfTemplates / TEMPLATE_PER_PAGE);
    if (numberOfTemplates % TEMPLATE_PER_PAGE !== 0) {
      totalPage++;
    }
    return totalPage;
  }
);
