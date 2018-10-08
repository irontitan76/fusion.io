import { combineReducers } from 'redux';

import insights from 'reducers/insights';
import nav from 'reducers/nav';
import session from 'reducers/session';

export default combineReducers({
  insights,
  nav,
  session,
});