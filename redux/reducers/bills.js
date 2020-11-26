import { SET_BILLS, ADD_BILL } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BILLS:
      const bills = action.payload;

      return bills;

    case ADD_BILL:
      const bill = [...state, action.payload];
      return bill;

    default:
      return state;
  }
};

export default reducer;
