const initialState = {
  isNavOpen: false
};

const nav = (state = initialState, action) => {
  switch (action.type) {
    case 'NAV_TOGGLE':
      return {
        ...state,
        isNavOpen: !state.isNavOpen
      };
    default:
      return state;
  }
};

export default nav;