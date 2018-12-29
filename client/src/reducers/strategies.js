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
        return {
          ...state,
          currentItem: {
            ...currentItem,
            content: {
              body: value,
              type: 'md',
            }
          },
        };
      } else if (name === 'parentId') {
        return {
          ...state,
          currentItem: {
            ...currentItem,
            parentId: value,
            siblingId: value === currentItem.parentId
              ? currentItem.siblingId
              : null,
          },
        };
      } else {
        return {
          ...state,
          currentItem: {
            ...currentItem,
            [name]: value,
          },
        };
      }
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