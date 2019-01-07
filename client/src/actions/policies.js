import {
  POLICY_CHANGE,
  POLICY_CREATE,
  POLICY_LOAD,
  POLICY_REMOVE,
  POLICY_UNLOAD,
  POLICY_UPDATE,
  POLICIES_FILTER,
  POLICIES_LOAD,
  POLICIES_UNLOAD
} from 'actions';

import {
  deletePolicy,
  getPolicy,
  getPolicies,
  postPolicy,
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

export const createPolicy = (insight, user) => {
  return async dispatch => {
    try {
      const payload = await postPolicy(insight, user);
      return dispatch({ type: POLICY_CREATE, payload });
    } catch (err) {
      return dispatch({ type: POLICY_CREATE, error: true, err });
    }
  };
};

export const filterPolicies = (filter) => {
  return async dispatch => {
    try {
      const payload = await getPolicies({ search: filter }, null);
      return dispatch({ type: POLICIES_FILTER, payload });
    } catch (err) {
      return dispatch({ type: POLICIES_FILTER, error: true, err });
    }
  };
};

export const loadPolicy = slug => {
  return async dispatch => {
    try {
      let payload = { item: null };
      if ( slug ) {
        payload = await getPolicy(slug);
      }
      return dispatch({ type: POLICY_LOAD, payload });
    } catch (err) {
      return dispatch({ type: POLICY_LOAD, error: true, err });
    }
  };
};

export const loadPolicies = userId => {
  return async dispatch => {
    try {
      const payload = await getPolicies(null, userId);
      return dispatch({ type: POLICIES_LOAD, payload });
    } catch (err) {
      return dispatch({ type: POLICIES_LOAD, error: true, err });
    }
  };
};

export const removePolicy = (_id) => {
  return async dispatch => {
    try {
      const payload = await deletePolicy(_id);
      return dispatch({ type: POLICY_REMOVE, payload });
    } catch (err) {
      return dispatch({ type: POLICY_REMOVE, error: true, err });
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

export const unloadPolicies = () => {
  return async dispatch => {
    try {
      return dispatch({ type: POLICIES_UNLOAD });
    } catch (err) {
      return dispatch({ type: POLICIES_UNLOAD, error: true, err });
    }
  };
};

export const updatePolicy = (insight) => {
  return async dispatch => {
    try {
      const payload = await putPolicy(insight);
      return dispatch({ type: POLICY_UPDATE, payload });
    } catch (err) {
      return dispatch({ type: POLICY_UPDATE, error: true, err });
    }
  };
};