import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

// Actions
import {
  checkForToken,
  fetchProduct,
  fetchBills,
  fetchStores,
} from "./actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchStores());
//store.dispatch(fetchBills());

// store.dispatch(fetchProduct());

store.dispatch(checkForToken());

export default store;
