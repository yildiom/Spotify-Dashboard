import { createReducer } from "redux-act";
import { setAccessToken, apiCallError } from "./auth.actions";

import { IAuthState } from "../../types/store/auth.types";

const initialState: IAuthState = {
  loading: false,
  accessToken: "",
  error: undefined,
};

const reducer = createReducer({}, initialState);

reducer.on(setAccessToken, (state, payload) => ({
  ...state,
  accessToken: payload,
  loading: false,
}));

reducer.on(apiCallError, (state, payload) => ({
  ...state,
  error: payload,
}));

export default reducer;
