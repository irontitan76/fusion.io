import {
  CAREER_CHANGE,
  CAREER_CREATE,
  CAREER_LOAD,
  CAREER_REMOVE,
  CAREER_UNLOAD,
  CAREER_UPDATE,
  CAREERS_FILTER,
  CAREERS_SEARCH,
  CAREERS_LOAD,
  CAREERS_UNLOAD,
} from 'actions';

import {
  deleteCareer,
  getCareer,
  getCareers,
  postCareer,
  putCareer,
} from 'api/careers';

export const changeCareer = (name, value) => {
  return async dispatch => {
    try {
      const payload = { name, value };
      return dispatch({ payload, type: CAREER_CHANGE });
    } catch (err) {
      return dispatch({ err, error: true, type: CAREER_CHANGE });
    }
  };
};

export const createCareer = (career) => {
  return async dispatch => {
    try {
      const payload = await postCareer(career);
      return dispatch({ payload, type: CAREER_CREATE });
    } catch (err) {
      return dispatch({ err, error: true, type: CAREER_CREATE });
    }
  };
};

export const filterCareers = (name, value) => {
  return async dispatch => {
    try {
      const payload = { name, value };
      return dispatch({ payload, type: CAREERS_FILTER });
    } catch (err) {
      return dispatch({ err, error: true, type: CAREERS_FILTER });
    }
  };
};

export const loadCareer = (_id) => {
  return async dispatch => {
    try {
      const payload = await getCareer(_id);
      return dispatch({ payload, type: CAREER_LOAD });
    } catch (err) {
      return dispatch({  err, error: true, type: CAREER_LOAD });
    }
  };
};

export const loadCareers = query => {
  return async dispatch => {
    try {
      const payload = await getCareers(query);
      return dispatch({ payload, type: CAREERS_LOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: CAREERS_LOAD });
    }
  };
};

export const removeCareer = (_id) => {
  return async dispatch => {
    try {
      const payload = await deleteCareer(_id);
      return dispatch({ payload, type: CAREER_REMOVE });
    } catch (err) {
      return dispatch({ err, error: true, type: CAREER_REMOVE });
    }
  };
};


export const searchCareers = (search, isFetching, isSearching) => {
  return async dispatch => {
    try {
      const payload = { isFetching, isSearching, search };
      return dispatch({ payload, type: CAREERS_SEARCH });
    } catch (err) {
      return dispatch({ err, error: true, type: CAREERS_SEARCH });
    }
  };
};

export const unloadCareer = () => {
  return async dispatch => {
    try {
      return dispatch({ type: CAREER_UNLOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: CAREER_UNLOAD });
    }
  };
};

export const unloadCareers = () => {
  return async dispatch => {
    try {
      return dispatch({ type: CAREERS_UNLOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: CAREERS_UNLOAD });
    }
  };
};

export const updateCareer = (career) => {
  return async dispatch => {
    try {
      const payload = await putCareer(career);
      return dispatch({ payload, type: CAREER_UPDATE });
    } catch (err) {
      return dispatch({ err, error: true, type: CAREER_UPDATE });
    }
  };
};