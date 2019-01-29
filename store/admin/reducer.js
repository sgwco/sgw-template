import { TOGGLE_SIDEBAR, TOGGLE_MINIMIZED_SIDEBAR, ADMIN_SELECT_TEMPLATE_PAGE } from './action';

const initState = {
  sidebarIsShown: true,
  sidebarIsMinimized: false,
  templateSelectedPage: 0,
};

export function adminReducer(state = initState, action = {}) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      newState.sidebarIsShown = !newState.sidebarIsShown;
      break;

    case TOGGLE_MINIMIZED_SIDEBAR:
      newState.sidebarIsMinimized = !newState.sidebarIsMinimized;
      break;

    case ADMIN_SELECT_TEMPLATE_PAGE:
      newState.templateSelectedPage = action.page;
      break;
  }

  return newState;
}
