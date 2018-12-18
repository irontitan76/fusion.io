const initialState = {
  currentItem: {},
  items: [],
};

const strategies = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_STRATEGY_CHANGE': {
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
    case 'NEW_STRATEGY_LOAD':
      return {
        ...state,
        currentItem: {
          content: {
            body: '',
            type: 'md',
          },
          parentId: 0,
          siblingId: null,
          title: '',
        },
      };
      case 'NEW_STRATEGY_UNLOAD':
        return {
          ...state,
          currentItem: initialState.currentItem,
        };
    case 'STRATEGY_LOAD':
      return {
        ...state,
        currentItem: action.payload,
      };
    case 'STRATEGY_REMOVE':
      return state;
    case 'STRATEGY_UPDATE':
      return state;
    case 'STRATEGY_UNLOAD':
      return {
        ...state,
        currentItem: initialState.currentItem,
      };
    case 'STRATEGIES_LOAD':
      return {
        ...state,
        items: action.payload,
      };
    case 'STRATEGIES_UNLOAD':
      return {
        ...state,
        items: initialState.items,
      };
    default:
      return state;
  }
};

export default strategies;