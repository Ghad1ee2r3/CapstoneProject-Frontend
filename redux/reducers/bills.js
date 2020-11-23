import { SET_BILLS, ADD_BILL } from "../actions/actionTypes";

const initialState = [];

// const initialState = [{
//   total: 0,
//   tax: 0,
//   items: [],}
// ];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BILLS:
      const bills = action.payload;
      console.log("--------bills reducer-----");
      console.log(bills);
      return bills;

    case ADD_BILL:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default reducer;
