const initialState = {
  items: [],
};

const standards = (state = initialState, action) => {
  switch (action.type) {
    case 'STANDARDS_LOAD':
      return {
        ...state,
        items: action.payload,
      };
    case 'STANDARDS_UNLOAD':
      return initialState;
    default:
      return state;
  }
};

export default standards;