import { takeLatest, put, all } from "redux-saga/effects";
import { getUserInfo, setUserInfo, apiCallError } from "./user.actions";
import qs from "query-string";

function* fetchUserInfo() {
  let parsed = qs.parse(window.location.search);
  let accessToken = parsed.access_token;
  try {
    if (accessToken) {
      const userInfo = yield fetch("https://api.spotify.com/v1/me", {
        headers: { Authorization: "Bearer " + accessToken },
      }).then((response) => {
        if (response.status === 401) {
          window.location.assign("http://localhost:8888/login");
        }
        return response.json();
      });

      yield put(setUserInfo(userInfo));
    } else {
      window.location.assign("http://localhost:8888/login");
    }
  } catch (e) {
    yield put(apiCallError(e));
    console.log(e);
  }
}

export default function* watchUserInfo() {
  yield takeLatest(getUserInfo.getType(), fetchUserInfo);
}
