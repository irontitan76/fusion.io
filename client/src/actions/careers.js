import {
  CAREER_LOAD,
  CAREER_UNLOAD,
  CAREERS_LOAD,
  CAREERS_UNLOAD
} from 'actions';

import {
  getCareer,
  getCareers,
} from 'api/careers';

export const loadCareer = (_id) => {
  return async dispatch => {
    try {
      const payload = await getCareer(_id);
      return dispatch({ type: CAREER_LOAD, payload });
    } catch (err) {
      return dispatch({ type: CAREER_LOAD, error: true, err });
    }
  };
};

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

export const unloadCareer = () => {
  return async dispatch => {
    try {
      return dispatch({ type: CAREER_UNLOAD });
    } catch (err) {
      return dispatch({ type: CAREER_UNLOAD, error: true, err });
    }
  };
}

export const unloadCareers = params => {
  return async dispatch => {
    try {
      return dispatch({ type: CAREERS_UNLOAD });
    } catch (err) {
      return dispatch({ type: CAREERS_UNLOAD, error: true, err });
    }
  };
};