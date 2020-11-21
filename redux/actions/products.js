import { SET_PRODUCT } from "./actionTypes";

import instance from "./instance";
export const fetchProduct = (productBarcode, storeBarcode) => async (dispatch) => {
  try {
    const res = await instance.get(`${storeBarcode}/products/${productBarcode}/`);
    const product = res.data;
    console.log("-------------from action------");

    console.log(product);
    console.log("-------------from action------");

    dispatch({
      type: SET_PRODUCT,
      payload: product,
    });
  } catch (error) {
    console.error(error);
  }
};
