import {
  PRODUCTS_LOAD,
  PRODUCTS_UNLOAD,
} from 'actions';

import {
  getProducts,
} from 'api/products';

export const loadProducts = params => {
  return async dispatch => {
    try {
      const payload = await getProducts(params);
      return dispatch({ payload, type: PRODUCTS_LOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: PRODUCTS_LOAD });
    }
  };
};

export const unloadProducts = () => {
  return async dispatch => {
    try {
      return dispatch({ type: PRODUCTS_UNLOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: PRODUCTS_UNLOAD });
    }
  };
};