// Action Types

export const TEMP = 'TEMP'


// Action Creators
    // The type from the action type
    // Payload is data to be passed around to store
export const temp1 = (val) => ({
  type: TEMP,
  payload: val
})


// Dispatch calls the action to be executed


// export function fetchPosts() {
//   return async dispatch => {
//     dispatch(getPosts())

//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//       const data = await response.json()

//       dispatch(getPostsSuccess(data))
//     } catch (error) {
//       dispatch(getPostsFailure())
//     }
//   }
// }