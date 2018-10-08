const initialState = {
  auth: false,
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case 'SESSION_START':
      return {
        ...state,
        auth: action.payload
      };
    case 'SESSION_END':
      return {
        ...state,
        auth: !action.payload
      };
    default:
      return state;
  }
};

export default session;