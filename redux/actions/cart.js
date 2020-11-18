import { AsyncStorage } from "react-native";
import { SET_CART, ADD_ITEM, CHECKOUT } from "./actionTypes";

export const setCart = () => {
  return {
    type: SET_CART,
  };
};

export const addItemToCart = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const checkoutCart = (cart) => ({
  type: CHECKOUT,
  payload: cart,
});
