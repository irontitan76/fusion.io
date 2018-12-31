const initialState = {
  currentItem: {},
  filters: {},
  isFetching: false,
  isSearching: false,
  items: [],
  search: '',
};

const careers = (state = initialState, action) => {
  switch (action.type) {
    case 'CAREER_CHANGE': {
      const { name, value } = action.payload;
      return { ...state, currentItem: { ...state.currentItem, [name]: value, } };
    }
    case 'CAREER_LOAD':
      return { ...state, currentItem: action.payload.item };
    case 'CAREER_UNLOAD':
      return { ...state, currentItem: initialState.currentItem };
    case 'CAREER_UPDATE':
      return state;
    case 'CAREERS_FILTER': {
      const { name, value } = action.payload;

      let result = {};
      if ( typeof value === 'undefined' ) {
        const { [name]: value, ...rest } = state.filters;
        result = rest;
      } else {
        result = { [name]: value };
      }
      return { ...state, filters: { ...result }};
    }
    case 'CAREERS_SEARCH':
      return { ...state, ...action.payload };
    case 'CAREERS_LOAD':
      return { ...state, items: action.payload.items };
    case 'CAREERS_UNLOAD':
      return { ...state, items: initialState.items };
    default:
      return state;
  }
};

export default careers;