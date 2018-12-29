const initialState = {
  currentItem: {},
  filteredItems: [],
  items: [],
};

const insights = (state = initialState, action) => {
  switch (action.type) {
    case 'INSIGHT_CHANGE': {
      const { name, value } = action.payload;
      return { ...state, currentItem: { ...state.currentItem, [name]: value, } };
    }
    case 'INSIGHT_LOAD': {
      const { item } = action.payload;
      return { ...state, currentItem: item || {} };
    }
    case 'INSIGHT_UNLOAD':
      return { ...state, currentItem: initialState.selected, };
    case 'INSIGHT_UPDATE':
      return state;
    case 'INSIGHTS_FILTER': {
      const { items } = action.payload;
      return { ...state, filteredItems: items };
    }
    case 'INSIGHTS_LOAD': {
      const { items } = action.payload;
      return { ...state, items, filteredItems: items };
    }
    case 'INSIGHTS_UNLOAD':
      return initialState;
    default:
      return state;
  }
};

export default insights;