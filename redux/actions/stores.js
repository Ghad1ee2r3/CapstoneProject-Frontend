import { SET_STORES } from "./actionTypes";

import instance from "./instance";
export const fetchStores = () => async (dispatch) => {
  try {
    const res = await instance.get("stores/");
    const stores = res.data;

    dispatch({
      type: SET_STORES,
      payload: stores,
    });
  } catch (error) {
    console.error(error);
  }
};
