import * as actions from "./action"; // Imports all the actions from postsActions

export const initialState = {
  temp:'temp'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.TEMP:                                                 // Begins loading
      return { ...state, temp: action.payload };
    default:
      return state;
  }
}