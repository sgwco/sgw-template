import { get } from 'lodash';

export const GET_TEMPLATES = 'template/GET_TEMPLATES';
export const GET_TEMPLATES_SUCCESS = 'template/GET_TEMPLATES_SUCCESS';

export const ADD_TEMPLATE = 'template/ADD_TEMPLATE';
export const ADD_TEMPLATE_SUCCESS = 'template/ADD_TEMPLATE_SUCCESS';

export const SELECT_TEMPLATE_CATEGORY = 'template/SELECT_TEMPLATE_CATEGORY';
export const SELECT_TEMPLATE_PAGE = 'template/SELECT_TEMPLATE_PAGE';

const initState = {
  selectedTemplateCategory: '',
  selectedPage: 0,
  listTemplates: {},
};

export function templateReducer(state = initState, action = {}) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case GET_TEMPLATES_SUCCESS:
      newState.listTemplates = action.listTemplates;
      break;

    case SELECT_TEMPLATE_CATEGORY:
      newState.selectedTemplateCategory = action.category;
      newState.selectedPage = 0;
      break;

    case SELECT_TEMPLATE_PAGE:
      newState.selectedPage = action.page;
      break;

    case ADD_TEMPLATE_SUCCESS: {
      const listTemplates = Object.assign({}, newState.listTemplates);
      const templateId = get(action, 'template.id', '');
      if (templateId) {
        listTemplates[templateId] = action.template;
      }

      newState.listTemplates = listTemplates;
      break;
    }
  }

  return newState;
}
