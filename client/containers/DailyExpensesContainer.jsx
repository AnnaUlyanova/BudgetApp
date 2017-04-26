import { connect } from 'react-redux'

import DailyExpenses from '../components/DailyExpenses/DailyExpenses'

import { addNewCategory } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    addNewCategory: category => dispatch(addNewCategory(category))
  }
}

// const mapStateToProps = (state) => {
//   return state
// }

export default connect(null, mapDispatchToProps)(DailyExpenses)
