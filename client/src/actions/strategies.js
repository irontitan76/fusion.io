import {
  NEW_STRATEGY_ADD,
  NEW_STRATEGY_CHANGE,
  NEW_STRATEGY_LOAD,
  NEW_STRATEGY_UNLOAD,
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

export const addNewStrategy = (strategy) => {
  return async dispatch => {
    try {
      const payload = postStrategies(strategy);
      return dispatch({ type: NEW_STRATEGY_ADD, payload });
    } catch (err) {
      return dispatch({ type: NEW_STRATEGY_ADD, error: true, err });
    }
  };
};

export const changeNewStrategy = (name, value) => {
  return async dispatch => {
    try {
      const payload = { name, value };
      return dispatch({ type: NEW_STRATEGY_CHANGE, payload });
    } catch (err) {
      return dispatch({ type: NEW_STRATEGY_CHANGE, error: true, err });
    }
  };
};

export const loadNewStrategy = () => {
  return async dispatch => {
    try {
      return dispatch({ type: NEW_STRATEGY_LOAD });
    } catch (err) {
      return dispatch({ type: NEW_STRATEGY_LOAD, error: true, err });
    }
  };
};

export const loadStrategy = (id) => {
  return async dispatch => {
    try {
      const payload = await getStrategy(id);
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

export const unloadNewStrategy = () => {
  return async dispatch => {
    try {
      return dispatch({ type: NEW_STRATEGY_UNLOAD });
    } catch (err) {
      return dispatch({ type: NEW_STRATEGY_UNLOAD, error: true, err });
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