import { NAV_TOGGLE } from 'actions';

export const toggleNav = () => {
  return async dispatch => {
    try {
      return dispatch({ type: NAV_TOGGLE });
    } catch (err) {
      return dispatch({ type: NAV_TOGGLE, error: true, err });
    }
  };
};