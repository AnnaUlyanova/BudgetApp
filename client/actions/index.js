import request from 'superagent'

export const addNewCategory = category => {
  return dispatch => {
    // dispatch({
    //   type: 'ADD_CATEGORY_PENDING'
    // })
    request.post('/')
      .send( category )
      .end((error, response) => {
        if (error) {
          return dispatch(addCategoryFailure({
            message: error.message
          }))
        } else {
            const category = response.body
            dispatch (addCategorySuccess({category}))
          }
      })
   }
 }

 export const addCategoryFailure = ({ category }) => {
   return {
     type: 'ADD_CATEGORY_FAILURE',
     category
   }
 }

export const addCategorySuccess = ({ category }) => {
  return {
    type: 'ADD_CATEGORY_SUCCESS',
    category
  }
}
