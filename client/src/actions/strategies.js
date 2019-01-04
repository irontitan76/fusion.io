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
  return async dispatch => {
    try {
      const payload = { name, value };
      return dispatch({ type: STRATEGY_CHANGE, payload });
    } catch (err) {
      return dispatch({ type: STRATEGY_CHANGE, error: true, err });
    }
  };
};

export const createStrategy = (strategy) => {
  return async dispatch => {
    try {
      const payload = postStrategy(strategy);
      return dispatch({ type: STRATEGY_CREATE, payload });
    } catch (err) {
      return dispatch({ type: STRATEGY_CREATE, error: true, err });
    }
  };
};

export const loadStrategies = () => {
  return async dispatch => {
    try {
      const payload = await getStrategies();
      return dispatch({ type: STRATEGIES_LOAD, payload });
    } catch (err) {
      return dispatch({ type: STRATEGIES_LOAD, error: true, err });
    }
  };
};

export const loadStrategy = (id) => {
  return async dispatch => {
    try {
      const payload = id ? { item: null } : await getStrategy(id);
      return dispatch({ type: STRATEGY_LOAD, payload });
    } catch (err) {
      return dispatch({ type: STRATEGY_LOAD, error: true, err });
    }
  };
};

export const removeStrategy = (_id) => {
  return async dispatch => {
    try {
      const payload = await deleteStrategy(_id);
      return dispatch({ type: STRATEGY_REMOVE, payload });
    } catch (err) {
      return dispatch({ type: STRATEGY_REMOVE, error: true, err });
    }
  };
};

export const unloadStrategy = () => {
  return async dispatch => {
    try {
      return dispatch({ type: STRATEGY_UNLOAD });
    } catch (err) {
      return dispatch({ type: STRATEGY_UNLOAD, error: true, err });
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

export const updateStrategy = (update) => {
  return async dispatch => {
    try {
      const payload = await putStrategy(update);
      return dispatch({ type: STRATEGY_UPDATE, payload });
    } catch (err) {
      return dispatch({ type: STRATEGY_UPDATE, error: true, err });
    }
  };
};