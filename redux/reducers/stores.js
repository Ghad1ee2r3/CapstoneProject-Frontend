import { SET_STORES } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORES:
      const stores = action.payload;
      return stores;

    default:
      return state;
  }
};

export default reducer;
