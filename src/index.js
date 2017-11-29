import React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'

import { Link } from 'react-router-dom'
import { Route, Switch } from 'react-router'

import Example from './containers/Example';
import Video from './containers/Video';
const history = createHistory()

const store = createStore(
  routerReducer,
  applyMiddleware(routerMiddleware(history)),
)

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch)

const AppContainer = () => (
  <ConnectedSwitch>
    <Route exact path="/" component={Example} />
    <Route path="/video" component={Video} />
  </ConnectedSwitch>
)

const App = connect(state => ({
  location: state.location,
}))(AppContainer)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)