import {
  NEW_STANDARD_ADD,
  NEW_STANDARD_CHANGE,
  NEW_STANDARD_LOAD,
  NEW_STANDARD_UNLOAD,
  STANDARD_LOAD,
  STANDARD_UNLOAD,
  STANDARD_UPDATE,
  STANDARDS_LOAD,
  STANDARDS_UNLOAD,
} from 'actions';

import {
  getStandard,
  getStandards,
  postStandards,
  putStandards,
} from 'api/standards';

export const addNewStandard = (standard) => {
  return async dispatch => {
    try {
      const payload = postStandards(standard);
      return dispatch({ type: NEW_STANDARD_ADD, payload });
    } catch (err) {
      return dispatch({ type: NEW_STANDARD_ADD, error: true, err });
    }
  };
};

export const changeNewStandard = (name, value) => {
  return async dispatch => {
    try {
      const payload = { name, value };
      return dispatch({ type: NEW_STANDARD_CHANGE, payload });
    } catch (err) {
      return dispatch({ type: NEW_STANDARD_CHANGE, error: true, err });
    }
  };
};

export const loadNewStandard = () => {
  return async dispatch => {
    try {
      return dispatch({ type: NEW_STANDARD_LOAD });
    } catch (err) {
      return dispatch({ type: NEW_STANDARD_LOAD, error: true, err });
    }
  };
};

export const loadStandard = (id) => {
  return async dispatch => {
    try {
      const payload = await getStandard(id);
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

export const unloadNewStandard = () => {
  return async dispatch => {
    try {
      return dispatch({ type: NEW_STANDARD_UNLOAD });
    } catch (err) {
      return dispatch({ type: NEW_STANDARD_UNLOAD, error: true, err });
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
      const payload = await putStandards(update);
      return dispatch({ type: STANDARD_UPDATE, payload });
    } catch (err) {
      return dispatch({ type: STANDARD_UPDATE, error: true, err });
    }
  };
};