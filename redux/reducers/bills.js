import { SET_BILLS, ADD_BILL } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BILLS:
      const bills = action.payload;

      return bills;

    case ADD_BILL:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default reducer;
