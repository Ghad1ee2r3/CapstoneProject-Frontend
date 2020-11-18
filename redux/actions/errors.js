import { SET_ERRORS } from "./actionTypes";

export const resetErrors = () => {
  return {
    type: SET_ERRORS,
    payload: [],
  };
};
