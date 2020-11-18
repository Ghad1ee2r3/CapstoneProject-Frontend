import { SET_BILLS } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BILLS:
      const bills = action.payload;
      return bills;

    default:
      return state;
  }
};

export default reducer;
