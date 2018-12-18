export const TOGGLE_SIDEBAR = 'template/TOGGLE_SIDEBAR';
export const TOGGLE_MINIMIZED_SIDEBAR = 'template/TOGGLE_MINIMIZED_SIDEBAR';

const initState = {
  sidebarIsShown: true,
  sidebarIsMinimized: false,
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
  }

  return newState;
}
