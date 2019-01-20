import { USER_LOGGED_IN } from "../types";

const initialState = {};

export default (state = initialState, { type, user }) => {
  switch (type) {
    case USER_LOGGED_IN:
      return { ...state, ...user };
    default:
      return state;
  }
};
