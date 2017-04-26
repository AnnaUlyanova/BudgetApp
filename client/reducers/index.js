export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY_SUCCESS':
      return Object.assign({}, state, {[action.category.id]: action.category})

    default:
      return state
  }
}
