import request from 'superagent'

export const addNewCategory = category => {
  return dispatch => {
    // dispatch({
    //   type: 'ADD_CATEGORY_PENDING'
    // })
    request.post('/')
      .send(category)
      .end((error, response) => {
        if (error) {
          dispatch(addCategoryFailure({
            message: error.message
          }))
        } else {
            const category = response.database
            dispatch ({
              type: 'ADD_CATEGORY_SUCCESS',
              category
            })
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
