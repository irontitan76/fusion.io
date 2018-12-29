import {
  STRATEGY_ADD,
  STRATEGY_CHANGE,
  STRATEGY_REMOVE,
  STRATEGY_LOAD,
  STRATEGY_UNLOAD,
  STRATEGY_UPDATE,
  STRATEGIES_LOAD,
  STRATEGIES_UNLOAD,
} from 'actions';

import {
  deleteStrategy,
  getStrategy,
  getStrategies,
  postStrategies,
  putStrategies,
} from 'api/strategies';

export const addStrategy = (strategy) => {
  return async dispatch => {
    try {
      const payload = postStrategies(strategy);
      return dispatch({ type: STRATEGY_ADD, payload });
    } catch (err) {
      return dispatch({ type: STRATEGY_ADD, error: true, err });
    }
  };
};

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

export const loadStrategy = (id) => {
  return async dispatch => {
    try {
      let payload = { item: null };
      if ( id ) {
        payload = await getStrategy(id);
      }
      return dispatch({ type: STRATEGY_LOAD, payload });
    } catch (err) {
      return dispatch({ type: STRATEGY_LOAD, error: true, err });
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
      const payload = await putStrategies(update);
      return dispatch({ type: STRATEGY_UPDATE, payload });
    } catch (err) {
      return dispatch({ type: STRATEGY_UPDATE, error: true, err });
    }
  };
};