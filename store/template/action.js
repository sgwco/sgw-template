export const GET_TEMPLATES = 'template/GET_TEMPLATES';
export const GET_TEMPLATES_SUCCESS = 'template/GET_TEMPLATES_SUCCESS';
export const GET_TEMPLATE_BY_URL = 'template/GET_TEMPLATE_BY_URL';
export const GET_TEMPLATE_BY_URL_SUCCESS = 'template/GET_TEMPLATE_BY_URL_SUCCESS';

export const ADD_TEMPLATE = 'template/ADD_TEMPLATE';
export const ADD_TEMPLATE_SUCCESS = 'template/ADD_TEMPLATE_SUCCESS';
export const ADD_TEMPLATE_FAIL = 'template/ADD_TEMPLATE_FAIL';

export const EDIT_TEMPLATE = 'template/EDIT_TEMPLATE';
export const EDIT_TEMPLATE_SUCCESS = 'template/EDIT_TEMPLATE_SUCCESS';
export const EDIT_TEMPLATE_FAIL = 'template/EDIT_TEMPLATE_FAIL';

export const DELETE_TEMPLATE = 'template/DELETE_TEMPLATE';
export const DELETE_TEMPLATE_SUCCESS = 'template/DELETE_TEMPLATE_SUCCESS';

export const SELECT_TEMPLATE_CATEGORY = 'template/SELECT_TEMPLATE_CATEGORY';
export const SELECT_TEMPLATE_PAGE = 'template/SELECT_TEMPLATE_PAGE';

export const getTemplate = () => ({ type: GET_TEMPLATES });
export const getTemplateSuccess = listTemplates => ({ type: GET_TEMPLATES_SUCCESS, listTemplates });

export const getTemplateByUrl = url => ({ type: GET_TEMPLATE_BY_URL, url });
export const getTemplateByUrlSuccess = template => ({
  type: GET_TEMPLATE_BY_URL_SUCCESS,
  template,
});

export const selectTemplateCategory = cat => ({ type: SELECT_TEMPLATE_CATEGORY, category: cat });
export const selectTemplatePage = page => ({ type: SELECT_TEMPLATE_PAGE, page });
