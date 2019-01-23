import {
  STRATEGIES_LOAD,
  STRATEGIES_UNLOAD,
  STRATEGY_CHANGE,
  STRATEGY_CREATE,
  STRATEGY_REMOVE,
  STRATEGY_LOAD,
  STRATEGY_UNLOAD,
  STRATEGY_UPDATE,
} from 'actions';

import {
  deleteStrategy,
  getStrategy,
  getStrategies,
  postStrategy,
  putStrategy,
} from 'api/strategies';

export const changeStrategy = (name, value) => {
  return dispatch => {
    try {
      const payload = { name, value };
      return dispatch({ payload, type: STRATEGY_CHANGE });
    } catch (err) {
      return dispatch({ err, error: true, type: STRATEGY_CHANGE });
    }
  };
};

export const createStrategy = (strategy) => {
  return dispatch => {
    try {
      const payload = postStrategy(strategy);
      return dispatch({ payload, type: STRATEGY_CREATE });
    } catch (err) {
      return dispatch({ err, error: true, type: STRATEGY_CREATE });
    }
  };
};

export const loadStrategies = () => {
  return async dispatch => {
    try {
      const payload = await getStrategies();
      return dispatch({ payload, type: STRATEGIES_LOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: STRATEGIES_LOAD });
    }
  };
};

export const loadStrategy = (id) => {
  return async dispatch => {
    try {
      const payload = id ? await getStrategy(id) : { item: null };
      return dispatch({ payload, type: STRATEGY_LOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: STRATEGY_LOAD });
    }
  };
};

export const removeStrategy = (_id) => {
  return async dispatch => {
    try {
      const payload = await deleteStrategy(_id);
      return dispatch({ payload, type: STRATEGY_REMOVE });
    } catch (err) {
      return dispatch({ err, error: true, type: STRATEGY_REMOVE });
    }
  };
};

export const unloadStrategy = () => {
  return dispatch => {
    try {
      return dispatch({ type: STRATEGY_UNLOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: STRATEGY_UNLOAD });
    }
  };
};

export const unloadStrategies = () => {
  return dispatch => {
    try {
      return dispatch({ type: STRATEGIES_UNLOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: STRATEGIES_UNLOAD });
    }
  };
};

export const updateStrategy = (update) => {
  return async dispatch => {
    try {
      const payload = await putStrategy(update);
      return dispatch({ payload, type: STRATEGY_UPDATE });
    } catch (err) {
      return dispatch({ err, error: true, type: STRATEGY_UPDATE });
    }
  };
};