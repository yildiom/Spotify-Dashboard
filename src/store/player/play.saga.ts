import { takeLatest, put } from "redux-saga/effects";
import { play, setPlay, apiCallError } from "./player.actions";
import qs from "query-string";

function* fetchPlay() {
  let parsed = qs.parse(window.location.search);
  let accessToken = parsed.access_token;

  try {
    yield fetch("https://api.spotify.com/v1/me/player/play", {
      method: "PUT",
      headers: { Authorization: "Bearer " + accessToken }
    }).then(response => {
      if (response.status === 204) {
        console.log("Successfully playing the track");
      }
    });

    yield put(setPlay());
  } catch (e) {
    yield put(apiCallError(e));
    console.log(e);
  }
}

export default function* watchPlay() {
  yield takeLatest(play.getType(), fetchPlay);
}
