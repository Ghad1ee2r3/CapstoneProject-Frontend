import { SET_PAYMENT } from "./actionTypes";
import instance from "./instance";

export const fetchPaymentLink = (orderNumber) => async (dispatch) => {
    try {
        const res = await instance.post(`checkout/${orderNumber}/get_payment_url/`);
        const paymnetLink = res.data;


    dispatch({
      type: SET_PAYMENT,
      payload: paymnetLink,
    });
  } catch (error) {
    console.error(error);
  }
};
