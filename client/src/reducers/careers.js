const initialState = {
  currentRole: {},
  careers: [],
};

const careers = (state = initialState, action) => {
  switch (action.type) {
    case 'CAREER_LOAD':
      return {
        ...state,
        currentRole: action.payload.item,
      };
    case 'CAREER_UNLOAD':
      return {
        ...state,
        currentRole: initialState.currentRole,
      };
    case 'CAREERS_LOAD':
      return {
        ...state,
        items: action.payload.items,
      };
    case 'CAREERS_UNLOAD':
      return initialState;
    default:
      return state;
  }
};

export default careers;