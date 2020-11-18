import { AsyncStorage } from "react-native";
import decode from "jwt-decode";

import { SET_CURRENT_USER } from "./actionTypes";

import instance from "./instance";

const setCurrentUser = (token) => async (dispatch) => {
  await setAuthToken(token);
  dispatch({
    type: SET_CURRENT_USER,
    payload: token ? decode(token) : null,
  });
};

const setAuthToken = async (token) => {
  if (token) {
    await AsyncStorage.setItem("token", token);
    instance.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.Authorization;
    await AsyncStorage.removeItem("token");
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const res = await instance.post(`login/`, userData);
    let { access } = res.data;
    dispatch(setCurrentUser(access));
  } catch (error) {
    console.error("Error while logging in", error);
  }
};

export const signup = (userData) => async (dispatch) => {
  try {
    await instance.post(`signup/`, userData);
    dispatch(login(userData));
  } catch (error) {
    console.error("Error while signing up", error);
  }
};

export const logout = () => setCurrentUser();

export const checkForToken = () => async (dispatch) => {
  const currentTimeInSeconds = Date.now() / 1000;
  const token = await AsyncStorage.getItem("token");

  if (token && decode(token).exp >= currentTimeInSeconds)
    dispatch(setCurrentUser(token));
  else setAuthToken();
};
