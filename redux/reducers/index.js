import useReducer from "./user";
import { combineReducers } from "redux";
import errorsReducer from "./errors";
import productsReducer from "./products";
import storesReducer from "./stores";

import userCart from "./cart";
import billsReducer from "./bills";

const rootReducer = combineReducers({
  user: useReducer,
  errorMsg: errorsReducer,
  stores: storesReducer,
  //products: productsReducer,
  cart: userCart,
  bills: billsReducer,
});

export default rootReducer;
