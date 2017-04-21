import React from 'react'

import ExpensesSpreadSheet from './ExpensesSpreadSheet'
import AddCategoryButton from './AddCategoryButton'
import AddSpendingButton from './AddSpendingButton'
import AddSpendingModal from './AddSpendingModal'

export default React.createClass({

  getInitialState() {
    return {
      showAddSpending: false
    }
  },

  closeAddSpending() {
    this.setState({
      showAddSpending: false
    })
  },

  openAddSpending() {
    this.setState({
      showAddSpending: true
    })
  },

  render() {
    return (
      <div>
        <h1>My Daily Expenses</h1>
        <div>
          <ExpensesSpreadSheet />
          <AddCategoryButton />
          <AddSpendingButton open={this.openAddSpending}/>
          <AddSpendingModal
          close={this.closeAddSpending}
          show={this.state.showAddSpending}
          />
        </div>
      </div>
    )
  }
})
