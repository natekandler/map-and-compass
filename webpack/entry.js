import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from "./src/views/Home/Home"
import PagesIndex from "./src/views/Pages/PagesIndex"
require('./src/styles/style.scss');

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
    </Route>
    <Route path="/Pages" component={PagesIndex}>
    </Route>
  </Router>
), document.body)
