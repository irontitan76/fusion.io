import {
  POLICIES_LOAD,
  POLICIES_UNLOAD,
  POLICY_CHANGE,
  POLICY_LOAD,
  POLICY_UNLOAD,
  POLICY_UPDATE,
} from 'actions';

import {
  getPolicies,
  getPolicy,
  putPolicy,
} from 'api/policies';

export const changePolicy = (name, value) => {
  return async dispatch => {
    try {
      const payload = { name, value };
      return dispatch({ type: POLICY_CHANGE, payload });
    } catch (err) {
      return dispatch({ type: POLICY_CHANGE, error: true, err });
    }
  };
};

export const loadPolicies = () => {
  return async dispatch => {
    try {
      const payload = await getPolicies();
      return dispatch({ type: POLICIES_LOAD, payload });
    } catch (err) {
      return dispatch({ type: POLICIES_LOAD, error: true, err });
    }
  };
};

export const loadPolicy = (_id) => {
  return async dispatch => {
    try {
      const payload = await getPolicy(_id);
      return dispatch({ type: POLICY_LOAD, payload });
    } catch (err) {
      return dispatch({ type: POLICY_LOAD, error: true, err });
    }
  };
};

export const unloadPolicies = () => {
  return async dispatch => {
    try {
      return dispatch({ type: POLICIES_UNLOAD });
    } catch (err) {
      return dispatch({ type: POLICIES_UNLOAD, error: true, err });
    }
  };
};

export const unloadPolicy = () => {
  return async dispatch => {
    try {
      return dispatch({ type: POLICY_UNLOAD });
    } catch (err) {
      return dispatch({ type: POLICY_UNLOAD, error: true, err });
    }
  };
};

export const updatePolicy = (update) => {
  return async dispatch => {
    try {
      const payload = await putPolicy(update);
      return dispatch({ type: POLICY_UPDATE, payload });
    } catch (err) {
      return dispatch({ type: POLICY_UPDATE, error: true, err });
    }
  };
};