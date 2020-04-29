import { createReducer } from "redux-act";

import { setUserInfo, getUserInfo, apiCallError } from "./user.actions";
import { IUserState } from "../../types/store/user.types";

const initialState: IUserState = {
  loading: false,
  userDetails: {},
  error: undefined,
};

const reducer = createReducer({}, initialState);

reducer.on(getUserInfo, (state) => ({
  ...state,
  loading: true,
}));

reducer.on(setUserInfo, (state, payload) => ({
  ...state,
  userDetails: payload,
  loading: false,
}));

reducer.on(apiCallError, (state, payload) => ({
  ...state,
  error: payload,
}));

export default reducer;
