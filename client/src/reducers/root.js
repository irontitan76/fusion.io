import { combineReducers } from 'redux';

import careers from 'reducers/careers';
import insights from 'reducers/insights';
import messages from 'reducers/messages';
import nav from 'reducers/nav';
import policies from 'reducers/policies';
import products from 'reducers/products';
import session from 'reducers/session';
import standards from 'reducers/standards';
import strategies from 'reducers/strategies';

export default combineReducers({
  careers,
  insights,
  messages,
  nav,
  policies,
  products,
  session,
  standards,
  strategies,
});