import { SET_BILLS, ADD_BILL } from "./actionTypes";
import instance from "./instance";
import axios from "axios";

export const fetchBills = () => async (dispatch) => {
  try {
    console.log("fetchbill---------------");

    const res = await instance.get("orders/");
    const bills = res.data;
    console.log("--------bills action-----");
    console.log(bills);

    dispatch({
      type: SET_BILLS,
      payload: bills,
    });
  } catch (error) {
    console.error(error);
  }
};

export const postBill = (newBill) => async (dispatch) => {
  try {
    const res = await instance.post("order/", newBill);
    const bill = res.data;

    dispatch({
      type: ADD_BILL,
      payload: bill,
    });
  } catch (err) {
    console.error(error);
  }
};
