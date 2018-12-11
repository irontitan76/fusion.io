import {
  STRATEGIES_LOAD,
  STRATEGIES_UNLOAD,
} from 'actions';

import { getStrategies } from 'api/strategies';

export const loadStrategies = userId => {
  return async dispatch => {
    try {
      const payload = await getStrategies(userId);
      return dispatch({ type: STRATEGIES_LOAD, payload });
    } catch (err) {
      return dispatch({ type: STRATEGIES_LOAD, error: true, err });
    }
  };
};

export const unloadStrategies = () => {
  return async dispatch => {
    try {
      return dispatch({ type: STRATEGIES_UNLOAD });
    } catch (err) {
      return dispatch({ type: STRATEGIES_UNLOAD, error: true, err });
    }
  };
};