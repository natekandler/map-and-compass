import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from "./src/views/Home/Home"
import PagesIndex from "./src/views/Pages/PagesIndex"
import { createHistory } from 'history';
import configureStore from './src/redux/store/configure_store';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
require('./src/styles/style.scss');

const store = configureStore();
const history = createHistory();

syncReduxAndRouter(history, store);

render((
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
        </Route>
        <Route path="/Pages" component={PagesIndex}>
        </Route>
      </Router>
    </div>
  </Provider>
), document.body)

