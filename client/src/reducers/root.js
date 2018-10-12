import { combineReducers } from 'redux';

import careers from 'reducers/careers';
import insights from 'reducers/insights';
import nav from 'reducers/nav';
import products from 'reducers/products';
import session from 'reducers/session';

export default combineReducers({
  careers,
  insights,
  nav,
  products,
  session,
});