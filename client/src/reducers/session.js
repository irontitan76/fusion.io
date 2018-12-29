const initialState = {
  auth: false,
  user: {},
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case 'SESSION_START':
      return { ...state, ...action.payload };
    case 'SESSION_END':
      return { ...state, auth: !action.payload, user: {} };
    default:
      return state;
  }
};

export default session;