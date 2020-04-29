import { takeLatest, put } from "redux-saga/effects";
import { previous, setPrevious, apiCallError } from "./player.actions";
import qs from "query-string";

function* fetchPrevious() {
  let parsed = qs.parse(window.location.search);
  let accessToken = parsed.access_token;

  try {
    yield fetch("https://api.spotify.com/v1/me/player/previous", {
      method: "POST",
      headers: { Authorization: "Bearer " + accessToken }
    }).then(response => {
      if (response.status === 204) {
        console.log("Successfully skipped to the previous track");
      }
    });

    yield put(setPrevious());
  } catch (e) {
    yield put(apiCallError(e));
    console.log(e);
  }
}

export default function* watchPrevious() {
  yield takeLatest(previous.getType(), fetchPrevious);
}
