import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import api from "../api";

//* action
export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

//* dispatcher
export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.setItem("token", user.token);
    dispatch(userLoggedIn(user));
  });

export const logout = () => dispatch => {
  localStorage.removeItem("token");
  dispatch(userLoggedOut());
};
