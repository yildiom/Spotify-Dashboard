import { takeLatest, put } from "redux-saga/effects";
import {
  getCurrentlyPlaying,
  setCurrentlyPlaying,
  apiCallError
} from "./player.actions";
import qs from "query-string";

function* fetchCurrentlyPlaying() {
  let parsed = qs.parse(window.location.search);
  let accessToken = parsed.access_token;

  try {
    const currentlyPlayingInfo = yield fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: { Authorization: "Bearer " + accessToken }
      }
    ).then(response => response.json());

    yield put(setCurrentlyPlaying(currentlyPlayingInfo));
  } catch (e) {
    yield put(apiCallError(e));
    console.log(
      "This error has probably occured due to the lack of a currently playing track"
    );
  }
}

export default function* watchCurrentlyPlaying() {
  yield takeLatest(getCurrentlyPlaying.getType(), fetchCurrentlyPlaying);
}
