import { SESSION_END, SESSION_START } from 'actions';

import { login, logout } from 'api/session';

export const startSession = (password, username) => {
  return async dispatch => {
    try {
      const payload = await login(password, username);
      return dispatch({ type: SESSION_START, payload });
    } catch (err) {
      return dispatch({ type: SESSION_START, error: true, err });
    }
  };
};

export const endSession = () => {
  return async dispatch => {
    try {
      const payload = await logout();
      return dispatch({ type: SESSION_END, payload });
    } catch (err) {
      return dispatch({ type: SESSION_END, error: true, err });
    }
  };
};