import {
  GET_TEMPLATES_SUCCESS,
  SELECT_TEMPLATE_CATEGORY,
  SELECT_TEMPLATE_PAGE,
  ADD_TEMPLATE,
  ADD_TEMPLATE_SUCCESS,
  ADD_TEMPLATE_FAIL,
  EDIT_TEMPLATE,
  EDIT_TEMPLATE_SUCCESS,
  EDIT_TEMPLATE_FAIL,
  DELETE_TEMPLATE_SUCCESS,
  GET_TEMPLATE_BY_URL_SUCCESS,
} from '../actions/template';
import { get, clone } from '../../constants/utils';

const initState = {
  selectedTemplateCategory: '',
  selectedPage: 0,
  listTemplates: {},
  previewTemplate: {},
  adminEditInProgress: [],
  adminIsCreating: false,
};

export function templateReducer(state = initState, action = {}) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case GET_TEMPLATES_SUCCESS:
      newState.listTemplates = action.listTemplates;
      break;

    case GET_TEMPLATE_BY_URL_SUCCESS:
      newState.previewTemplate = action.template;
      break;

    case SELECT_TEMPLATE_CATEGORY:
      newState.selectedTemplateCategory = action.category;
      newState.selectedPage = 0;
      break;

    case SELECT_TEMPLATE_PAGE:
      newState.selectedPage = action.page;
      break;

    case ADD_TEMPLATE:
      newState.adminIsCreating = true;
      break;

    case ADD_TEMPLATE_SUCCESS: {
      const listTemplates = Object.assign({}, newState.listTemplates);
      const templateId = get(action, 'template.id', '');
      if (templateId) {
        listTemplates[templateId] = action.template;
      }

      newState.listTemplates = listTemplates;
      newState.adminIsCreating = false;
      break;
    }

    case ADD_TEMPLATE_FAIL:
      newState.adminIsCreating = false;
      break;

    case EDIT_TEMPLATE: {
      const editIds = clone(newState.adminEditInProgress);
      if (editIds.indexOf(action.data.id) === -1) {
        editIds.push(action.data.id);
        newState.adminEditInProgress = editIds;
      }
      break;
    }

    case EDIT_TEMPLATE_SUCCESS: {
      const listTemplates = Object.assign({}, newState.listTemplates);
      const editIds = clone(newState.adminEditInProgress);

      const templateId = get(action, 'template.id', '');
      if (templateId) {
        listTemplates[templateId] = action.template;
      }

      const editIndex = editIds.indexOf(templateId + '');
      if (editIndex > -1) {
        editIds.splice(editIndex, 1);
        newState.adminEditInProgress = editIds;
      }

      newState.listTemplates = listTemplates;
      break;
    }

    case EDIT_TEMPLATE_FAIL: {
      const editIds = clone(newState.adminEditInProgress);
      const editIndex = editIds.indexOf(action.id + '');
      if (editIndex > -1) {
        editIds.splice(editIndex, 1);
        newState.adminEditInProgress = editIds;
      }
      break;
    }

    case DELETE_TEMPLATE_SUCCESS: {
      const listTemplates = Object.assign({}, newState.listTemplates);
      delete listTemplates[action.id];
      newState.listTemplates = listTemplates;
      break;
    }
  }

  return newState;
}
