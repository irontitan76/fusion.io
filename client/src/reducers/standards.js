const initialState = {
  currentItem: {},
  items: [],
};

const standards = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_STANDARD_CHANGE': {
      const { currentItem } = state;
      const name = action.payload.name;
      const value = action.payload.value;

      if ( name === 'content' ) {
        return {
          ...state,
          currentItem: {
            ...currentItem,
            content: {
              body: value,
              type: 'md',
            }
          }
        };
      } else if ( name === 'parentId' ) {
        return {
          ...state,
          currentItem: {
            ...currentItem,
            parentId: value,
            siblingId: value === currentItem.parentId
              ? currentItem.siblingId
              : null,
          }
        };
      } else {
        return {
          ...state,
          currentItem: {
            ...currentItem,
            [name]: value,
          }
        };
      }
    }
    case 'NEW_STANDARD_LOAD':
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
        }
      };
      case 'NEW_STANDARD_UNLOAD':
        return {
          ...state,
          currentItem: initialState.currentItem,
        };
    case 'STANDARD_LOAD':
      return {
        ...state,
        currentItem: action.payload,
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
        items: action.payload,
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