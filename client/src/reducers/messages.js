const initialState = {
  content: '',
  open: false,
};

const messages = (state = initialState, action) => {
  switch (action.type) {
  case 'MESSAGE_LOAD':
    return { ...state, content: action.payload.content, open: true };
  case 'MESSAGE_UNLOAD':
    return initialState;
  default:
    return state;
  }
};

export default messages;