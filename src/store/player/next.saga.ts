import { takeLatest, put } from "redux-saga/effects";
import { next, setNext, apiCallError } from "./player.actions";
import qs from "query-string";

function* fetchNext() {
  let parsed = qs.parse(window.location.search);
  let accessToken = parsed.access_token;

  try {
    yield fetch("https://api.spotify.com/v1/me/player/next", {
      method: "POST",
      headers: { Authorization: "Bearer " + accessToken }
    }).then(response => {
      if (response.status === 204) {
        console.log("Successfully skipped to the next track");
      }
    });
    yield put(setNext());
  } catch (e) {
    yield put(apiCallError(e));
    console.log(e);
  }
}

export default function* watchNext() {
  yield takeLatest(next.getType(), fetchNext);
}
