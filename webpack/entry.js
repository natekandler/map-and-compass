import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Home from "./src/views/Home/Home"
import PagesIndex from "./src/views/Pages/PagesIndex"
import Page from "./src/views/Pages/Page"
import configureStore from './src/redux/store/configure_store';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import  pagesReducer  from './src/reducers/pages_reducer';
require('./src/styles/style.scss');

const store = createStore(
  combineReducers({
    pages: pagesReducer,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

render((
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" >
          <IndexRoute component={Home}/>
          <Route path="/pages" >
            <IndexRoute component={PagesIndex}/>
            <Route path="/pages/:id" component={Page} />
          </Route>
          <Route path="/categories" >
            <IndexRoute component={PagesIndex}/>
            <Route path="/categories/:id" component={Page} />
          </Route>
        </Route>
      </Router>
    </div>
  </Provider>
), document.getElementById('root'))

