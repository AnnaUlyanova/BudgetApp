import React from 'react'
import ReactDOM from 'react-dom'
import {Router, IndexRoute, Route, hashHistory} from 'react-router'

import App from './components/App'
import Content from './components/Content'
import DailyExpenses from './components/DailyExpenses'
import Reports from './components/Reports'
import SavingGoal from './components/SavingGoals'
import About from './components/About'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (<Router history={hashHistory}>
      <Route path='/' component={App}>
        <Route component={Content}>
          <IndexRoute component={DailyExpenses} />
          <Route path='reports' component={Reports} />
          <Route path='goals' component={SavingGoal} />
          <Route path='about' component={About} />
        </Route>
      </Route>
    </Router>
  ),

    document.getElementById('app')
  )
})
