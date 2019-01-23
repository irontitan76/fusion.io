const initialState = {
  currentItem: {},
  items: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
  case 'PRODUCT_LOAD': {
    const { item } = action.payload;
    return { ...state, currentItem: item };
  }
  case 'PRODUCTS_LOAD': {
    const { items } = action.payload;
    return { ...state, items };
  }
  default:
    return state;
  }
};

export default products;