export const GET_TEMPLATES = 'template/GET_TEMPLATES';
export const GET_TEMPLATES_SUCCESS = 'template/GET_TEMPLATES_SUCCESS';

const initState = {
  listTemplates: {},
};

export function templateReducer(state = initState, action = {}) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case GET_TEMPLATES_SUCCESS:
      newState.listTemplates = action.listTemplates;
      break;
  }

  return newState;
}
