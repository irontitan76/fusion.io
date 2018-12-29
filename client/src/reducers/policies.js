const initialState = {
  currentItem: {},
  items: [],
};

const policies = (state = initialState, action) => {
  switch (action.type) {
    case 'POLICIES_LOAD':
      return {
        ...state,
        items: action.payload.items,
      };
    case 'POLICY_CHANGE': {
      const { currentItem } = state;
      const { name, value } = action.payload;

      if ( name === 'content' ) {
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
    case 'POLICY_LOAD': {
      const { item } = action.payload;
      return { ...state, currentItem: item };
    }
    case 'POLICIES_UNLOAD':
      return initialState;
    case 'POLICY_UNLOAD': {
      const { currentItem } = initialState;
      return { ...state, currentItem };
    }
    case 'POLICY_UPDATE':
      return state;
    default:
      return state;
  }
};

export default policies;