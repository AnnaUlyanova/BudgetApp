import React from 'react'

import About from './About'
import DailyExpenses from './DailyExpenses'
import Reports from './Reports'
import SavingGoals from './SavingGoals'

export default React.createClass({
  render () {
    return (
      <div className='content'>
        {this.props.children}
      </div>
    )
  }
})
