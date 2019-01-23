import {
  INSIGHT_CHANGE,
  INSIGHT_CREATE,
  INSIGHT_LOAD,
  INSIGHT_REMOVE,
  INSIGHT_UNLOAD,
  INSIGHT_UPDATE,
  INSIGHTS_FILTER,
  INSIGHTS_LOAD,
  INSIGHTS_UNLOAD,
} from 'actions';

import {
  deleteInsight,
  getInsight,
  getInsights,
  postInsight,
  putInsight,
} from 'api/insights';

export const changeInsight = (name, value) => {
  return dispatch => {
    try {
      const payload = { name, value };
      return dispatch({ payload, type: INSIGHT_CHANGE });
    } catch (err) {
      return dispatch({ err, error: true, type: INSIGHT_CHANGE });
    }
  };
};

export const createInsight = (insight, user) => {
  return async dispatch => {
    try {
      const payload = await postInsight(insight, user);
      return dispatch({ payload, type: INSIGHT_CREATE });
    } catch (err) {
      return dispatch({ err, error: true, type: INSIGHT_CREATE });
    }
  };
};

export const filterInsights = (filter) => {
  return async dispatch => {
    try {
      const payload = await getInsights({ search: filter }, null);
      return dispatch({ payload, type: INSIGHTS_FILTER });
    } catch (err) {
      return dispatch({ err, error: true, type: INSIGHTS_FILTER });
    }
  };
};

export const loadInsight = slug => {
  return async dispatch => {
    try {
      let payload = { item: null };
      if (slug) {
        payload = await getInsight(slug);
      }
      return dispatch({ payload, type: INSIGHT_LOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: INSIGHT_LOAD });
    }
  };
};

export const loadInsights = userId => {
  return async dispatch => {
    try {
      const payload = await getInsights(null, userId);
      return dispatch({ payload, type: INSIGHTS_LOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: INSIGHTS_LOAD });
    }
  };
};

export const removeInsight = (_id) => {
  return async dispatch => {
    try {
      const payload = await deleteInsight(_id);
      return dispatch({ payload, type: INSIGHT_REMOVE });
    } catch (err) {
      return dispatch({ err, error: true, type: INSIGHT_REMOVE });
    }
  };
};

export const unloadInsight = () => {
  return dispatch => {
    try {
      return dispatch({ type: INSIGHT_UNLOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: INSIGHT_UNLOAD });
    }
  };
};

export const unloadInsights = () => {
  return dispatch => {
    try {
      return dispatch({ type: INSIGHTS_UNLOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: INSIGHTS_UNLOAD });
    }
  };
};

export const updateInsight = (insight) => {
  return async dispatch => {
    try {
      const payload = await putInsight(insight);
      return dispatch({ payload, type: INSIGHT_UPDATE });
    } catch (err) {
      return dispatch({ err, error: true, type: INSIGHT_UPDATE });
    }
  };
};