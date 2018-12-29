const initialState = {
  items: [],
  selected: {},
};

const insights = (state = initialState, action) => {
  switch (action.type) {
    case 'INSIGHT_CHANGE': {
      const name = action.payload.name;
      const value = action.payload.value;
      return {
        ...state,
        selected: {
          ...state.selected,
          [name]: value,
        },
      };
    }
    case 'INSIGHT_LOAD':
      return {
        ...state,
        selected: action.payload && (action.payload.item || {}),
      };
    case 'INSIGHT_UNLOAD':
      return {
        ...state,
        selected: initialState.selected,
      }
    case 'INSIGHT_UPDATE':
      return state;
    case 'INSIGHTS_FILTER':
      return {
        ...state,
        filteredItems: action.payload.items,
      };
    case 'INSIGHTS_LOAD':
      return {
        ...state,
        items: action.payload.items,
        filteredItems: action.payload.items,
      };
    case 'INSIGHTS_UNLOAD':
      return initialState;
    default:
      return state;
  }
};

export default insights;