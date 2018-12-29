import {
  PRODUCTS_LOAD,
  PRODUCTS_UNLOAD,
} from 'actions';

import {
  getProducts
} from 'api/products';

export const loadProducts = params => {
  return async dispatch => {
    try {
      const payload = await getProducts(params);
      return dispatch({ type: PRODUCTS_LOAD, payload });
    } catch (err) {
      return dispatch({ type: PRODUCTS_LOAD, error: true, err });
    }
  };
};

export const unloadProducts = () => {
  return async dispatch => {
    try {
      return dispatch({ type: PRODUCTS_UNLOAD });
    } catch (err) {
      return dispatch({ type: PRODUCTS_UNLOAD, error: true, err });
    }
  };
};