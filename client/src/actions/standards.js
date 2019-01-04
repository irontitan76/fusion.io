import {
  STANDARD_CHANGE,
  STANDARD_CREATE,
  STANDARD_REMOVE,
  STANDARD_LOAD,
  STANDARD_UNLOAD,
  STANDARD_UPDATE,
  STANDARDS_LOAD,
  STANDARDS_UNLOAD,
} from 'actions';

import {
  deleteStandard,
  getStandard,
  getStandards,
  postStandard,
  putStandard,
} from 'api/standards';

export const changeStandard = (name, value) => {
  return async dispatch => {
    try {
      const payload = { name, value };
      return dispatch({ type: STANDARD_CHANGE, payload });
    } catch (err) {
      return dispatch({ type: STANDARD_CHANGE, error: true, err });
    }
  };
};

export const createStandard = (standard) => {
  return async dispatch => {
    try {
      const payload = postStandard(standard);
      return dispatch({ type: STANDARD_CREATE, payload });
    } catch (err) {
      return dispatch({ type: STANDARD_CREATE, error: true, err });
    }
  };
};

export const loadStandard = (id) => {
  return async dispatch => {
    try {
      const payload = id ? { item: null } : await getStandard(id);
      return dispatch({ type: STANDARD_LOAD, payload });
    } catch (err) {
      return dispatch({ type: STANDARD_LOAD, error: true, err });
    }
  };
};

export const loadStandards = () => {
  return async dispatch => {
    try {
      const payload = await getStandards();
      return dispatch({ type: STANDARDS_LOAD, payload });
    } catch (err) {
      return dispatch({ type: STANDARDS_LOAD, error: true, err });
    }
  };
};

export const removeStandard = (_id) => {
  return async dispatch => {
    try {
      const payload = await deleteStandard(_id);
      return dispatch({ type: STANDARD_REMOVE, payload });
    } catch (err) {
      return dispatch({ type: STANDARD_REMOVE, error: true, err });
    }
  };
};

export const unloadStandard = () => {
  return async dispatch => {
    try {
      return dispatch({ type: STANDARD_UNLOAD });
    } catch (err) {
      return dispatch({ type: STANDARD_UNLOAD, error: true, err });
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

export const updateStandard = (update) => {
  return async dispatch => {
    try {
      const payload = await putStandard(update);
      return dispatch({ type: STANDARD_UPDATE, payload });
    } catch (err) {
      return dispatch({ type: STANDARD_UPDATE, error: true, err });
    }
  };
};