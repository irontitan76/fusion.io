import filter from 'lodash.filter';

const initialState = {
  items: [],
  selected: {},
};

const getInsightsByStringSearch = (items, str) => {
  let results = [];
  items.forEach(item => {
    JSON.stringify(item).toLowerCase().indexOf(str) > -1 && results.push(item);
  });
  return results;
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
        selected: action.payload || {},
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
        filteredItems: typeof action.filter === 'object'
          ? filter(state.items, action.filter)
          : typeof action.filter === 'string'
              ? getInsightsByStringSearch(state.items, action.filter.toLowerCase())
              : state.items
      };
    case 'INSIGHTS_LOAD':
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload,
      };
    case 'INSIGHTS_UNLOAD':
      return initialState;
    default:
      return state;
  }
};

export default insights;