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
  CAREERS_UNLOAD
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
      return dispatch({ type: CAREER_CHANGE, payload });
    } catch (err) {
      return dispatch({ type: CAREER_CHANGE, error: true, err });
    }
  };
};

export const createCareer = (career) => {
  return async dispatch => {
    try {
      const payload = await postCareer(career);
      return dispatch({ type: CAREER_CREATE, payload });
    } catch (err) {
      return dispatch({ type: CAREER_CREATE, error: true, err });
    }
  };
};

export const filterCareers = (name, value) => {
  return async dispatch => {
    try {
      const payload = { name, value };
      return dispatch({ type: CAREERS_FILTER, payload });
    } catch (err) {
      return dispatch({ type: CAREERS_FILTER, error: true, err });
    }
  };
};

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

export const removeCareer = (_id) => {
  return async dispatch => {
    try {
      const payload = await deleteCareer(_id);
      return dispatch({ type: CAREER_REMOVE, payload });
    } catch (err) {
      return dispatch({ type: CAREER_REMOVE, error: true, err });
    }
  };
};


export const searchCareers = (search, isFetching, isSearching) => {
  return async dispatch => {
    try {
      const payload = { search, isFetching, isSearching };
      return dispatch({ type: CAREERS_SEARCH, payload });
    } catch (err) {
      return dispatch({ type: CAREERS_SEARCH, error: true, err });
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

export const updateCareer = (career) => {
  return async dispatch => {
    try {
      const payload = await putCareer(career);
      return dispatch({ type: CAREER_UPDATE, payload });
    } catch (err) {
      return dispatch({ type: CAREER_UPDATE, error: true, err });
    }
  };
};