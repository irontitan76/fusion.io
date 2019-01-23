import { NAV_TOGGLE } from 'actions';

// eslint-disable-next-line
export const toggleNav = () => {
  return async dispatch => {
    try {
      return dispatch({ type: NAV_TOGGLE });
    } catch (err) {
      return dispatch({ err, error: true, type: NAV_TOGGLE });
    }
  };
};