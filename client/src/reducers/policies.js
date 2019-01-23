const initialState = {
  currentItem: {},
  filteredItems: [],
  items: [],
};

const insights = (state = initialState, action) => {
  switch (action.type) {
  case 'POLICY_CHANGE': {
    const { currentItem } = state;
    const { name, value } = action.payload;

    if (name === 'content') {
      const newItem = { ...currentItem, content: { body: value, type: 'md' } };
      return { ...state, currentItem: newItem };
    }

    return { ...state, currentItem: { ...state.currentItem, [name]: value } };
  }
  case 'POLICY_LOAD': {
    const { item } = action.payload;
    return { ...state, currentItem: item || {} };
  }
  case 'POLICY_REMOVE':
    return state;
  case 'POLICY_UNLOAD':
    return { ...state, currentItem: initialState.selected };
  case 'POLICY_UPDATE':
    return state;
  case 'POLICIES_FILTER': {
    const { items } = action.payload;
    return { ...state, filteredItems: items };
  }
  case 'POLICIES_LOAD': {
    const { items } = action.payload;
    return { ...state, filteredItems: items, items };
  }
  case 'POLICIES_UNLOAD':
    return initialState;
  default:
    return state;
  }
};

export default insights;