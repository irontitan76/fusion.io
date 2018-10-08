import { INSIGHTS_LOAD } from 'actions';

import { getInsights } from 'api/insights';

export const loadInsights = () => {
  return async dispatch => {
    try {
      const payload = await getInsights();
      return dispatch({ type: INSIGHTS_LOAD, payload });
    } catch (err) {
      return dispatch({ type: INSIGHTS_LOAD, error: true, err });
    }
  };
};