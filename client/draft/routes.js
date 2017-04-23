import React from 'react'
import ReactDOM from 'react-dom'
import { IndexRoute, Route } from 'react-router'

import App from './components/App'
import Content from './components/Content'
import DailyExpenses from './components/DailyExpenses'
import Reports from './components/Reports'
import SavingGoal from './components/SavingGoals'
import About from './components/About'

export default (
    <Route path='/' component={App}>
      <Route component={Content}>
        <IndexRoute component={DailyExpenses} />
        <Route path='reports' component={Reports} />
        <Route path='goals' component={SavingGoal} />
        <Route path='about' component={About} />
      </Route>
    </Route>

)
