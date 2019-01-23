import {
  POLICY_CHANGE,
  POLICY_CREATE,
  POLICY_LOAD,
  POLICY_REMOVE,
  POLICY_UNLOAD,
  POLICY_UPDATE,
  POLICIES_FILTER,
  POLICIES_LOAD,
  POLICIES_UNLOAD,
} from 'actions';

import {
  deletePolicy,
  getPolicy,
  getPolicies,
  postPolicy,
  putPolicy,
} from 'api/policies';

export const changePolicy = (name, value) => {
  return dispatch => {
    try {
      const payload = { name, value };
      return dispatch({ payload, type: POLICY_CHANGE });
    } catch (err) {
      return dispatch({ err, error: true, type: POLICY_CHANGE });
    }
  };
};

export const createPolicy = (policy) => {
  return async dispatch => {
    try {
      const payload = await postPolicy(policy);
      return dispatch({ payload, type: POLICY_CREATE });
    } catch (err) {
      return dispatch({ err, error: true, type: POLICY_CREATE });
    }
  };
};

export const filterPolicies = (filter) => {
  return async dispatch => {
    try {
      const payload = await getPolicies({ search: filter }, null);
      return dispatch({ payload, type: POLICIES_FILTER });
    } catch (err) {
      return dispatch({ err, error: true, type: POLICIES_FILTER });
    }
  };
};

export const loadPolicy = slug => {
  return async dispatch => {
    try {
      let payload = { item: null };
      if (slug) {
        payload = await getPolicy(slug);
      }
      return dispatch({ payload, type: POLICY_LOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: POLICY_LOAD });
    }
  };
};

export const loadPolicies = () => {
  return async dispatch => {
    try {
      const payload = await getPolicies(null);
      return dispatch({ payload, type: POLICIES_LOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: POLICIES_LOAD });
    }
  };
};

export const removePolicy = (_id) => {
  return async dispatch => {
    try {
      const payload = await deletePolicy(_id);
      return dispatch({ payload, type: POLICY_REMOVE });
    } catch (err) {
      return dispatch({ err, error: true, type: POLICY_REMOVE });
    }
  };
};

export const unloadPolicy = () => {
  return dispatch => {
    try {
      return dispatch({ type: POLICY_UNLOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: POLICY_UNLOAD });
    }
  };
};

export const unloadPolicies = () => {
  return dispatch => {
    try {
      return dispatch({ type: POLICIES_UNLOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: POLICIES_UNLOAD });
    }
  };
};

export const updatePolicy = (policy) => {
  return async dispatch => {
    try {
      const payload = await putPolicy(policy);
      return dispatch({ payload, type: POLICY_UPDATE });
    } catch (err) {
      return dispatch({ err, error: true, type: POLICY_UPDATE });
    }
  };
};