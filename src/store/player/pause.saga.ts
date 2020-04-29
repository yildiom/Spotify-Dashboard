import { takeLatest, put } from "redux-saga/effects";
import { pause, setPause, apiCallError } from "./player.actions";
import qs from "query-string";

function* fetchPause() {
  let parsed = qs.parse(window.location.search);
  let accessToken = parsed.access_token;

  try {
    yield fetch("https://api.spotify.com/v1/me/player/pause", {
      method: "PUT",
      headers: { Authorization: "Bearer " + accessToken }
    }).then(response => {
      if (response.status === 204) {
        console.log("Successfully paused the track");
      }
    });

    yield put(setPause());
  } catch (e) {
    yield put(apiCallError(e));
    console.log(e);
  }
}

export default function* watchPause() {
  yield takeLatest(pause.getType(), fetchPause);
}
