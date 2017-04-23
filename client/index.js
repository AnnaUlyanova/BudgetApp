import React from 'react'
import ReactDOM from 'react-dom'
import {Router, IndexRoute, Route, hashHistory} from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { Provider } from 'react-redux'

import reducers from './reducers'

import App from './components/App'
import Content from './components/Content'
import DailyExpenses from './components/DailyExpenses'
import Reports from './components/Reports'
import SavingGoal from './components/SavingGoals'
import About from './components/About'

let store = createStore(
  reducers, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (<Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route component={Content}>
            <IndexRoute component={DailyExpenses} />
            <Route path='reports' component={Reports} />
            <Route path='goals' component={SavingGoal} />
            <Route path='about' component={About} />
          </Route>
        </Route>
      </Router>
    </Provider>
  ),

    document.getElementById('app')
  )
})
