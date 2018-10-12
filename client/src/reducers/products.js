const initialState = {
  items: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT_LOAD':
      return {
        ...state,
        selected: action.payload[0],
      };
    case 'PRODUCTS_LOAD':
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default products;