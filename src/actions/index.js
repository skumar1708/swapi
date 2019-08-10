import { createActionTypes } from "../utils";

export const AppActions = createActionTypes("login", [
  "LOGIN_CLICKED",
  "LOGOUT_CLICKED",
  "POST_LOGIN",
  "POST_LOGOUT",
  "GET_PLANETS",
  "SET_PLANETS",
]);

export const onLogin = (data) => ({
  type: AppActions.LOGIN_CLICKED,
  payload: {
    ...data
  }
});

export const getPlanets = (data) => ({
  type: AppActions.GET_PLANETS,
  payload: {
    ...data
  }
});

export const setPlanets = (data) => ({
  type: AppActions.SET_PLANETS,
  payload: {
    ...data
  }
});

export const onLogout = () => ({
  type: AppActions.LOGOUT_CLICKED,
});

export const postLogin = (data) => ({
  type: AppActions.POST_LOGIN,
  payload: {
    ...data
  }
});

export const postLogout = () => ({
  type: AppActions.POST_LOGOUT,
});