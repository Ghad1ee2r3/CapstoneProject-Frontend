import { SET_CURRENT_USER } from "../actions/actionTypes";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
