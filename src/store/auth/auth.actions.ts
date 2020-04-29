import { createAction } from "redux-act";

export const getAccessToken = createAction("getAccessToken");

export const setAccessToken = createAction<string>(
  "setAccessToken",
  (payload: string) => payload
);

export const apiCallError = createAction<any>(
  "callError",
  (payload: any) => payload
);
