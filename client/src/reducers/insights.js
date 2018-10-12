import filter from 'lodash.filter';

const initialState = {
  items: [],
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
    case 'INSIGHT_LOAD':
      return {
        ...state,
        selected: action.payload[0],
      };
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