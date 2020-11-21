import { SET_PRODUCTS } from "./actionTypes";

import instance from "./instance";
export const fetchProducts = (barcodeproduct, barcode) => async (dispatch) => {
  try {
    const res = await instance.get(`${barcode}/products/${barcodeproduct}/`);
    const products = res.data;
    console.log("-------------from action------");

    console.log(products);
    console.log("-------------from action------");

    dispatch({
      type: SET_PRODUCTS,
      payload: products,
    });
  } catch (error) {
    console.error(error);
  }
};
