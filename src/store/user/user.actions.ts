import { createAction } from "redux-act";

export const getUserInfo = createAction("getUserInfo");

export const setUserInfo = createAction(
  "setUserInfo",
  (payload: object) => payload
);

export const apiCallError = createAction(
  "callError",
  (payload: any) => payload
);
