import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';

import './index.css';
import store from './store';
import history from './history';
import App from './containers/App';
import LogIn from './containers/LogIn';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <div>
      <Route exact={true} path="/" component={LogIn}/>
      <Route path="/list" component={App}/>
    </div>
  </Router>
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
