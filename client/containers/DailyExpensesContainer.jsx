import { connect } from 'react-redux'

import DailyExpenses from '../components/DailyExpenses/DailyExpenses'

import { addNewCategory } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    addNewCategory: (categoryId, categoryName) => dispatch(addNewCategory(categoryId, categoryName))
  }
}

// const mapStateToProps = (state) => {
//   return state
// }

export default connect(null, mapDispatchToProps)(DailyExpenses)
