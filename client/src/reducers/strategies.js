const initialState = {
  currentItem: {},
  items: [],
};

const strategies = (state = initialState, action) => {
  switch (action.type) {
  case 'STRATEGY_CHANGE': {
    const { currentItem } = state;
    const { name, value } = action.payload;

    if (name === 'content') {
      const newItem = { ...currentItem, content: { body: value, type: 'md' } };
      return { ...state, currentItem: newItem };
    }

    if (name === 'parentId') {
      const parentId = value;
      const siblingId = value === currentItem.parentId ? currentItem.siblingId : null;
      const newItem = { ...currentItem, parentId, siblingId };
      return { ...state, currentItem: newItem };
    }

    const newItem = { ...currentItem, [name]: value };
    return { ...state, currentItem: newItem };
  }
  case 'STRATEGY_LOAD': {
    const { item } = action.payload;
    return { ...state, currentItem: item || {} };
  }
  case 'STRATEGY_REMOVE':
    return state;
  case 'STRATEGY_UPDATE':
    return state;
  case 'STRATEGY_UNLOAD':
    return { ...state, currentItem: initialState.currentItem };
  case 'STRATEGIES_LOAD': {
    const { items } = action.payload;
    return { ...state, items };
  }
  case 'STRATEGIES_UNLOAD': {
    const { items } = initialState;
    return { ...state, items };
  }
  default:
    return state;
  }
};

export default strategies;