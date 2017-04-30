const INITIAL_STATE = {
  categories: []
}

export default (state = INITIAL_STATE, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case 'ADD_CATEGORY_SUCCESS':
      newState.categories.push(action.category)
      return newState

    case 'ADD_CATEGORY_FAILURE':
      return newState

    default:
      return state
  }
}
