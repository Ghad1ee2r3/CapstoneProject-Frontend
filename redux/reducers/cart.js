import { SET_CART, ADD_ITEM, DELETE_ITEM } from "../actions/actionTypes";
import { AsyncStorage } from "react-native";

const initialState = {
  items: [],
  subtotal: 0,
  total: 0,
  tax: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return initialState;
    case ADD_ITEM:
      // check for existing item to update quantity only or add new item

      let items;
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (existingItem) {
        const newQuantity = existingItem.quantity + action.payload.quantity;
        const newItem = { ...existingItem, quantity: newQuantity };
        const updatedItems = state.items.filter(
          (item) => item.product.id !== existingItem.product.id
        );
        items = [newItem, ...updatedItems];
      } else {
        items = [...state.items, action.payload];
      }
      // update total, subtotal and tax

      const subtotal =
        state.subtotal + action.payload.quantity * action.payload.product.price;

      const tax = +(subtotal * 0.15).toFixed(2);
      const total = +(subtotal + tax).toFixed(2);
      let cart = {
        ...state,
        items: items,
        subtotal: subtotal,
        tax: tax,
        total: total,
      };

      return cart;

    case DELETE_ITEM:
      // console.log("____________from cart reducer____________");
      // console.log(action.payload);
      console.log("____________from cart reducer items____________");
      console.log(state.items);
      //...state.items.slice
      let index = state.items.indexOf(action.payload);
      console.log("____________from cart index =____________");
      console.log(index);
      let cartupdate = state.items.splice(index, 1);
      console.log("____________from cart list____________");
      console.log(cartupdate);
      cart = cartupdate;
      console.log("____________from cart after delete____________");
      console.log(state.items);

      return cart;

    default:
      return state;
  }
};

export default reducer;
