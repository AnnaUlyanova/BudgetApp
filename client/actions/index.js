import superagent from 'superagent'

export const addNewCategory = category => {
  return dispatch => {
    dispatch({
      type: 'ADD_CATEGORY_PENDING'
    })
    request
      .send('/categories')
      .end((error, response) => {
        if (error) {
          dispatch({
            type: 'ADD_CATEGORY_FAILURE'
          }) else {
            const category = response.database
            dispatch ({
              type: 'ADD_CATEGORY_SUCCESS',
              category
            })
          }
        }
      })
  }
}
