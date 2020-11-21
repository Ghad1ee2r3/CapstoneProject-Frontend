import { SET_PRODUCT } from "../actions/actionTypes";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      const product = action.payload;
      return product;

    default:
      return state;
  }
};

export default reducer;
