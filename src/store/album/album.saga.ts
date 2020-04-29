import { takeLatest, put, all } from "redux-saga/effects";
import {
  getUserAlbums,
  setUserAlbums,
  apiCallError,
  saveAlbum,
  setSaveAlbum,
  removeAlbum,
  setRemoveAlbum
} from "./album.actions";
import qs from "query-string";

function* fetchUserAlbums() {
  let parsed = qs.parse(window.location.search);
  let accessToken = parsed.access_token;

  try {
    const userAlbums = yield fetch(
      "https://api.spotify.com/v1/me/albums?limit=7",
      {
        headers: { Authorization: "Bearer " + accessToken }
      }
    ).then(response => response.json());

    yield put(setUserAlbums(userAlbums.items));
  } catch (e) {
    yield put(apiCallError(e));
    console.log(e);
  }
}

function* watchGetAlbums() {
  yield takeLatest(getUserAlbums.getType(), fetchUserAlbums);
}
//@ts-ignore
function* fetchSaveAlbum(saveAlbum) {
  let parsed = qs.parse(window.location.search);
  let accessToken = parsed.access_token;

  try {
    yield fetch(
      "https://api.spotify.com/v1/me/albums?ids=" + saveAlbum.payload,
      {
        method: "PUT",
        headers: { Authorization: "Bearer " + accessToken }
      }
    ).then(response => {
      if (response.status === 201) {
        console.log("Successfully saved the album");
      }
    });

    yield put(setSaveAlbum(saveAlbum.payload));
  } catch (e) {
    yield put(apiCallError(e));
    console.log(e);
  }
}

function* watchSaveAlbum() {
  yield takeLatest(saveAlbum.getType(), fetchSaveAlbum);
}

//@ts-ignore
function* fetchRemoveAlbum(removeAlbum) {
  let parsed = qs.parse(window.location.search);
  let accessToken = parsed.access_token;

  try {
    yield fetch(
      "https://api.spotify.com/v1/me/albums?ids=" + removeAlbum.payload,
      {
        method: "DELETE",
        headers: { Authorization: "Bearer " + accessToken }
      }
    ).then(response => {
      if (response.status === 200) {
        console.log("Successfully removed the album from favorites");
      }
    });

    yield put(setRemoveAlbum(removeAlbum.payload));
  } catch (e) {
    yield put(apiCallError(e));
    console.log(e);
  }
}

function* watchRemoveAlbum() {
  yield takeLatest(removeAlbum.getType(), fetchRemoveAlbum);
}

export default function* watchAlbums() {
  yield all([watchGetAlbums(), watchSaveAlbum(), watchRemoveAlbum()]);
}
