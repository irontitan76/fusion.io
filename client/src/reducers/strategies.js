const initialState = {
  items: [],
};

const strategies = (state = initialState, action) => {
  switch (action.type) {
    case 'STRATEGIES_LOAD':
      return {
        ...state,
        items: action.payload,
      };
    case 'STRATEGIES_UNLOAD':
      return initialState;
    default:
      return state;
  }
};

export default strategies;