import { SESSION_END, SESSION_START } from 'actions';

import { login, logout } from 'api/session';

export const startSession = (password, username) => {
  return async dispatch => {
    try {
      const payload = await login(password, username);
      return dispatch({ payload, type: SESSION_START });
    } catch (err) {
      return dispatch({ err, error: true, type: SESSION_START });
    }
  };
};

export const endSession = () => {
  return async dispatch => {
    try {
      const payload = await logout();
      return dispatch({ payload, type: SESSION_END });
    } catch (err) {
      return dispatch({ err, error: true, type: SESSION_END });
    }
  };
};