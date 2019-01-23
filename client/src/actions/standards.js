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
  return dispatch => {
    try {
      const payload = { name, value };
      return dispatch({ payload, type: STANDARD_CHANGE });
    } catch (err) {
      return dispatch({ err, error: true, type: STANDARD_CHANGE });
    }
  };
};

export const createStandard = (standard) => {
  return dispatch => {
    try {
      const payload = postStandard(standard);
      return dispatch({ payload, type: STANDARD_CREATE });
    } catch (err) {
      return dispatch({ err, error: true, type: STANDARD_CREATE });
    }
  };
};

export const loadStandard = (id) => {
  return async dispatch => {
    try {
      const payload = id ? await getStandard(id) : { item: null };
      return dispatch({ payload, type: STANDARD_LOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: STANDARD_LOAD });
    }
  };
};

export const loadStandards = () => {
  return async dispatch => {
    try {
      const payload = await getStandards();
      return dispatch({ payload, type: STANDARDS_LOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: STANDARDS_LOAD });
    }
  };
};

export const removeStandard = (_id) => {
  return async dispatch => {
    try {
      const payload = await deleteStandard(_id);
      return dispatch({ payload, type: STANDARD_REMOVE });
    } catch (err) {
      return dispatch({ err, error: true, type: STANDARD_REMOVE });
    }
  };
};

export const unloadStandard = () => {
  return async dispatch => {
    try {
      return dispatch({ type: STANDARD_UNLOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: STANDARD_UNLOAD });
    }
  };
};

export const unloadStandards = () => {
  return async dispatch => {
    try {
      return dispatch({ type: STANDARDS_UNLOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: STANDARDS_UNLOAD });
    }
  };
};

export const updateStandard = (update) => {
  return async dispatch => {
    try {
      const payload = await putStandard(update);
      return dispatch({ payload, type: STANDARD_UPDATE });
    } catch (err) {
      return dispatch({ err, error: true, type: STANDARD_UPDATE });
    }
  };
};