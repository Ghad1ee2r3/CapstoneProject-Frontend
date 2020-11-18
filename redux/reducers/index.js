import useReducer from "./user";
import { combineReducers } from "redux";
import errorsReducer from "./errors";
import productsReducer from "./products";
import userCart from "./cart";

const rootReducer = combineReducers({
  user: useReducer,
  errorMsg: errorsReducer,
  //products: productsReducer,
  // cart: userCart,
});

export default rootReducer;
