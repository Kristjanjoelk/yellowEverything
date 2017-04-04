import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import store from './store';
import App from './pages/app/App';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Root from './pages/root';
import './control';
import './index.css';


ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory}>
          <Route component={Root}>
            <Route path="/" component={App}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
          </Route>
      </Router>
  </Provider>
  , document.getElementById('root')
);
