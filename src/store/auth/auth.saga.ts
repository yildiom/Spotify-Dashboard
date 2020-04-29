import { takeLatest, put } from "redux-saga/effects";
import { apiCallError, setAccessToken, getAccessToken } from "./auth.actions";
import qs from "query-string";

function* fetchAccessToken() {
  let parsed = qs.parse(window.location.search);
  let accessToken = parsed.access_token;
  try {
    if (accessToken) {
      yield put(setAccessToken(accessToken));
    } else {
      yield put(setAccessToken(""));
      window.location.assign("http://localhost:8888/login");
    }
  } catch (e) {
    yield put(apiCallError(e));
    console.log(e);
  }
}

export default function* watchAccessToken() {
  yield takeLatest(getAccessToken.getType(), fetchAccessToken);
}
