const initialState = {
  items: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT_LOAD':
      return {
        ...state,
        selected: action.payload.item,
      };
    case 'PRODUCTS_LOAD':
      return {
        ...state,
        items: action.payload.items,
      };
    default:
      return state;
  }
};

export default products;