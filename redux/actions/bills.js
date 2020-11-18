import { SET_BILLS } from "./actionTypes";
import instance from "./instance";

export const fetchBills = () => async (dispatch) => {
  try {
    const res = await instance.get("bills/");
    const bills = res.data;
    dispatch({
      type: SET_BILLS,
      payload: bills,
    });
  } catch (error) {
    console.error(error);
  }
};
