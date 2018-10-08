const initialState = {
  insights: [],
};

const insights = (state = initialState, action) => {
  switch (action.type) {
    case 'INSIGHTS_LOAD':
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

export default insights;