import { createStore, compose, applyMiddleware } from 'redux';
import root from 'reducers/root';
import thunk from 'redux-thunk';

export default compose(applyMiddleware(thunk))(createStore)(
  root,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);