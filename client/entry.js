import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Dashboard from "./src/views/Dashboard/Dashboard"
import PagesIndex from "./src/views/Pages/PagesIndex"
import Page from "./src/views/Pages/Page"
import CategoriesIndex from "./src/views/Categories/CategoriesIndex"
import Category from "./src/views/Categories/Category"
import About from "./src/views/About/About"
import Advertise from "./src/views/Advertise/Advertise"

import configureStore from './src/redux/store/configure_store';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import pagesReducer  from './src/reducers/pages_reducer';
import categoriesReducer from './src/reducers/categories_reducer';
require('./src/styles/style.scss');

const store = createStore(
  combineReducers({
    categories: categoriesReducer,
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
          <IndexRoute component={Dashboard}/>
          <Route path="/pages" >
            <IndexRoute component={PagesIndex}/>
            <Route path="/pages/:id" component={Page} />
          </Route>
          <Route path="/categories" >
            <IndexRoute component={CategoriesIndex}/>
            <Route path="/categories/:slug" component={Category} />
          </Route>
        </Route>
        <Route path="/about" component={About} />
      </Router>
    </div>
  </Provider>
), document.getElementById('root'))

