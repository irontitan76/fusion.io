const initialState = {
  roles: [],
};

const careers = (state = initialState, action) => {
  switch (action.type) {
    case 'CAREERS_LOAD':
      return {
        ...state,
        roles: action.payload.items,
      };
    case 'CAREERS_UNLOAD':
      return initialState;
    default:
      return state;
  }
};

export default careers;