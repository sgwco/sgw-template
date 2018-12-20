export const TOGGLE_LOADER = 'common/TOGGLE_LOADER';

const initState = {
  loaderIsShown: true,
};

export function commonReducer(state = initState, action = {}) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case TOGGLE_LOADER:
      newState.loaderIsShown = action.show;
      break;
  }

  return newState;
}
