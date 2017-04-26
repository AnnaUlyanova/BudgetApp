import { connect } from 'react-redux'

import DailyExpenses from '../components/DailyExpenses/DailyExpenses'

import { addNewCategory } from '..actions'

const mapDispatchToProps = dispatch => {
  addNewCategory: category => dispatch(addNewCategory(category))
}

export default connect(null, mapDispatchToProps)(DailyExpenses)
