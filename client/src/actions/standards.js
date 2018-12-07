import {
  STANDARDS_LOAD,
  STANDARDS_UNLOAD,
} from 'actions';

import { getStandards } from 'api/standards';

export const loadStandards = userId => {
  return async dispatch => {
    try {
      const payload = await getStandards(userId);
      return dispatch({ type: STANDARDS_LOAD, payload });
    } catch (err) {
      return dispatch({ type: STANDARDS_LOAD, error: true, err });
    }
  };
};

export const unloadStandards = () => {
  return async dispatch => {
    try {
      return dispatch({ type: STANDARDS_UNLOAD });
    } catch (err) {
      return dispatch({ type: STANDARDS_UNLOAD, error: true, err });
    }
  };
};