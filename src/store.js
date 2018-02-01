import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { applyMiddleware, createStore, compose } from 'redux';

import reducer from './reducers'

const middleware = applyMiddleware(promise(), thunk)

export default createStore(reducer, compose(
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))