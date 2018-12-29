const initialState = {
  currentItem: {},
  items: [],
};

const standards = (state = initialState, action) => {
  switch (action.type) {
    case 'STANDARD_CHANGE': {
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
            },
          },
        };
      } else if (name === 'parentId') {
        const siblingId = value === currentItem.parentId
          ? currentItem.siblingId
          : null;
        return {
          ...state,
          currentItem: {
            ...currentItem,
            parentId: value,
            siblingId,
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
    case 'STANDARD_LOAD':
      return {
        ...state,
        currentItem: action.payload && (action.payload.item || {}),
      };
    case 'STANDARD_REMOVE':
      return state;
    case 'STANDARD_UPDATE':
      return state;
    case 'STANDARD_UNLOAD':
      return {
        ...state,
        currentItem: initialState.currentItem,
      };
    case 'STANDARDS_LOAD':
      return {
        ...state,
        items: action.payload.items,
      };
    case 'STANDARDS_UNLOAD':
      return {
        ...state,
        items: initialState.items,
      };
    default:
      return state;
  }
};

export default standards;