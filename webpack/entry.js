import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from "./src/views/Home/Home"
import PagesIndex from "./src/views/Pages/PagesIndex"
import configureStore from './src/redux/store/configure_store';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
require('./src/styles/style.scss');

const store = createStore(
  combineReducers({
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

render((
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={Home}>
        </Route>
        <Route path="/Pages" component={PagesIndex}>
        </Route>
      </Router>
    </div>
  </Provider>
), document.body)

