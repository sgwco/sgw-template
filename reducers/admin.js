export const TOGGLE_SIDEBAR = 'admin/TOGGLE_SIDEBAR';
export const TOGGLE_MINIMIZED_SIDEBAR = 'admin/TOGGLE_MINIMIZED_SIDEBAR';
export const ADMIN_SELECT_TEMPLATE_PAGE = 'admin/ADMIN_SELECT_TEMPLATE_PAGE';

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
