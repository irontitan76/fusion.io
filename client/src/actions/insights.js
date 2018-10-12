import {
  INSIGHT_LOAD,
  INSIGHTS_FILTER,
  INSIGHTS_LOAD,
  INSIGHTS_UNLOAD
} from 'actions';

import { getInsight, getInsights } from 'api/insights';

export const filterInsights = filter => {
  return async dispatch => {
    try {
      return dispatch({ type: INSIGHTS_FILTER, filter });
    } catch (err) {
      return dispatch({ type: INSIGHTS_FILTER, error: true, err });
    }
  };
};

export const loadInsight = id => {
  return async dispatch => {
    try {
      const payload = await getInsight(id);
      return dispatch({ type: INSIGHT_LOAD, payload });
    } catch (err) {
      return dispatch({ type: INSIGHT_LOAD, error: true, err });
    }
  };
};

export const loadInsights = userId => {
  return async dispatch => {
    try {
      const payload = await getInsights(userId);
      return dispatch({ type: INSIGHTS_LOAD, payload });
    } catch (err) {
      return dispatch({ type: INSIGHTS_LOAD, error: true, err });
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