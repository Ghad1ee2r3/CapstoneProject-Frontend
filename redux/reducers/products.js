import { SET_PRODUCTS } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      const products = action.payload;
      return products;

    default:
      return state;
  }
};

export default reducer;
