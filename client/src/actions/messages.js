import {
  MESSAGE_LOAD,
  MESSAGE_UNLOAD,
} from 'actions';

/**
 * @function loadMessage (individual)
 * @argument message - The message to be displayed in the Snackbar component
 * @returns @async a dispatch function which is setting the specified message
 *  state and its respective fields and default values
 */
export const loadMessage = content => {
  return async dispatch => {
    try {
      const payload = { content };
      return dispatch({ payload, type: MESSAGE_LOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: MESSAGE_LOAD });
    }
  };
};

/**
 * @function unloadMessage (individual)
 * @returns @async a dispatch function which is resetting the message state
 */
export const unloadMessage = () => {
  return async dispatch => {
    try {
      return dispatch({ type: MESSAGE_UNLOAD });
    } catch (err) {
      return dispatch({ err, error: true, type: MESSAGE_UNLOAD });
    }
  };
};