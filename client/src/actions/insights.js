import {
  INSIGHT_ADD,
  INSIGHT_CHANGE,
  INSIGHT_LOAD,
  INSIGHT_UPDATE,
  INSIGHTS_FILTER,
  INSIGHTS_LOAD,
  INSIGHT_UNLOAD,
  INSIGHTS_UNLOAD
} from 'actions';

import {
  getInsight,
  getInsights,
  postInsights,
  putInsights,
} from 'api/insights';

export const addInsight = (insight, user) => {
  return async dispatch => {
    try {
      const payload = await postInsights(insight, user);
      return dispatch({ type: INSIGHT_ADD, payload });
    } catch (err) {
      return dispatch({ type: INSIGHT_ADD, error: true, err });
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

export const changeInsight = (name, value) => {
  return async dispatch => {
    try {
      return dispatch({ type: INSIGHT_CHANGE, payload: { name, value }});
    } catch (err) {
      return dispatch({ type: INSIGHT_CHANGE, error: true, err });
    }
  };
};

export const loadInsight = slug => {
  return async dispatch => {
    try {
      let payload = null;
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

export const unloadInsight = id => {
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
      const payload = await putInsights(insight);
      return dispatch({ type: INSIGHT_UPDATE, payload });
    } catch (err) {
      return dispatch({ type: INSIGHT_UPDATE, error: true, err });
    }
  };
}