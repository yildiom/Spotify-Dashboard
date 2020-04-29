import { takeLatest, put } from "redux-saga/effects";
import {
  searchArtist,
  getSearchedAlbums,
  apiCallError
} from "./search.actions";
import qs from "query-string";

//@ts-ignore
function* fetchArtistInfo(searchArtist) {
  let parsed = qs.parse(window.location.search);
  let accessToken = parsed.access_token;
  let searchValue = searchArtist.payload.toLowerCase().replace(/\s/g, "");

  try {
    const albumsInfo = yield fetch(
      "https://api.spotify.com/v1/search?q=" +
        searchValue +
        "&type=album&limit=3",
      {
        headers: { Authorization: "Bearer " + accessToken }
      }
    ).then(response => response.json());

    //console.log(albumsInfo);

    yield put(getSearchedAlbums(albumsInfo.albums.items));
  } catch (e) {
    yield put(apiCallError(e));
    console.log(e);
  }
}

export default function* watchSearch() {
  yield takeLatest(searchArtist.getType(), fetchArtistInfo);
}
