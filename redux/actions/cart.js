import { AsyncStorage } from "react-native";
import { SET_CART, ADD_ITEM, DELETE_ITEM } from "./actionTypes";

export const setCart = () => {
  return {
    type: SET_CART,
  };
};

export const addItemToCart = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const deleteItemFromCart = (item) => ({
  type: DELETE_ITEM,
  payload: item,
});
