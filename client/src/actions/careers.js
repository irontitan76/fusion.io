import { CAREERS_LOAD, CAREERS_UNLOAD } from 'actions';

import {
  getCareers,
} from 'api/careers';

export const loadCareers = query => {
  return async dispatch => {
    try {
      const payload = await getCareers(query);
      return dispatch({ type: CAREERS_LOAD, payload });
    } catch (err) {
      return dispatch({ type: CAREERS_LOAD, error: true, err });
    }
  };
};

export const unloadCareers = params => {
  return async dispatch => {
    try {
      return dispatch({ type: CAREERS_UNLOAD });
    } catch (err) {
      return dispatch({ type: CAREERS_UNLOAD, error: true, err });
    }
  }
};