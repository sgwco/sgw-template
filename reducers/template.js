export const GET_TEMPLATES = 'template/GET_TEMPLATES';
export const GET_TEMPLATES_SUCCESS = 'template/GET_TEMPLATES_SUCCESS';

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
      break;

    case SELECT_TEMPLATE_PAGE:
      newState.selectedPage = action.page;
      break;
  }

  return newState;
}
