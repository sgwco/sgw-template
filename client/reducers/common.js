export const CHECK_BROWSER_SAFARI = 'common/CHECK_BROWSER_SAFARI';

const initState = {
  isSafari: null,
};

export function commonReducer(state = initState, action = {}) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case CHECK_BROWSER_SAFARI: {
      const isSafari =
        /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
      newState.isSafari = isSafari;
      break;
    }
  }

  return newState;
}
