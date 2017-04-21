import React from 'react'

import ExpensesSpreadSheet from './ExpensesSpreadSheet'
import AddCategoryButton from './AddCategoryButton'
import AddSpendingButton from './AddSpendingButton'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>My Daily Expenses</h1>
        <div>
          <ExpensesSpreadSheet />
          <AddCategoryButton />
          <AddSpendingButton />
        </div>
      </div>
    )
  }
})
