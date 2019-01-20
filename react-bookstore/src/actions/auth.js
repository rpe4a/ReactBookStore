import { USER_LOGGED_IN } from "../types";
import api from "../api";

//* action
export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

//* dispatcher
export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));
