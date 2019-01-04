import {
  INSIGHT_CHANGE,
  INSIGHT_CREATE,
  INSIGHT_LOAD,
  INSIGHT_REMOVE,
  INSIGHT_UNLOAD,
  INSIGHT_UPDATE,
  INSIGHTS_FILTER,
  INSIGHTS_LOAD,
  INSIGHTS_UNLOAD
} from 'actions';

import {
  deleteInsight,
  getInsight,
  getInsights,
  postInsight,
  putInsight,
} from 'api/insights';

export const changeInsight = (name, value) => {
  return async dispatch => {
    try {
      const payload = { name, value };
      return dispatch({ type: INSIGHT_CHANGE, payload });
    } catch (err) {
      return dispatch({ type: INSIGHT_CHANGE, error: true, err });
    }
  };
};

export const createInsight = (insight, user) => {
  return async dispatch => {
    try {
      const payload = await postInsight(insight, user);
      return dispatch({ type: INSIGHT_CREATE, payload });
    } catch (err) {
      return dispatch({ type: INSIGHT_CREATE, error: true, err });
    }
  };
};

export const filterInsights = (filter) => {
  return async dispatch => {
    try {
      const payload = await getInsights({ search: filter }, null);
      return dispatch({ type: INSIGHTS_FILTER, payload });
    } catch (err) {
      return dispatch({ type: INSIGHTS_FILTER, error: true, err });
    }
  };
};

export const loadInsight = slug => {
  return async dispatch => {
    try {
      let payload = { item: null };
      if ( slug ) {
        payload = await getInsight(slug);
      }
      return dispatch({ type: INSIGHT_LOAD, payload });
    } catch (err) {
      return dispatch({ type: INSIGHT_LOAD, error: true, err });
    }
  };
};

export const loadInsights = userId => {
  return async dispatch => {
    try {
      const payload = await getInsights(null, userId);
      return dispatch({ type: INSIGHTS_LOAD, payload });
    } catch (err) {
      return dispatch({ type: INSIGHTS_LOAD, error: true, err });
    }
  };
};

export const removeInsight = (_id) => {
  return async dispatch => {
    try {
      const payload = await deleteInsight(_id);
      return dispatch({ type: INSIGHT_REMOVE, payload });
    } catch (err) {
      return dispatch({ type: INSIGHT_REMOVE, error: true, err });
    }
  };
};

export const unloadInsight = () => {
  return async dispatch => {
    try {
      return dispatch({ type: INSIGHT_UNLOAD });
    } catch (err) {
      return dispatch({ type: INSIGHT_UNLOAD, error: true, err });
    }
  };
};

export const unloadInsights = () => {
  return async dispatch => {
    try {
      return dispatch({ type: INSIGHTS_UNLOAD });
    } catch (err) {
      return dispatch({ type: INSIGHTS_UNLOAD, error: true, err });
    }
  };
};

export const updateInsight = (insight) => {
  return async dispatch => {
    try {
      const payload = await putInsight(insight);
      return dispatch({ type: INSIGHT_UPDATE, payload });
    } catch (err) {
      return dispatch({ type: INSIGHT_UPDATE, error: true, err });
    }
  };
};