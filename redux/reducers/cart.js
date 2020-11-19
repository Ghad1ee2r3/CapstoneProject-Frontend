import { SET_CART, ADD_ITEM, CHECKOUT } from "../actions/actionTypes";
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
      const tax = subtotal * 0.15;
      const total = subtotal + tax;
      const cart = {
        ...state,
        items: items,
        subtotal: subtotal,
        tax: tax,
        total: total,
      };

      return cart;

    default:
      return state;
  }
};

export default reducer;
