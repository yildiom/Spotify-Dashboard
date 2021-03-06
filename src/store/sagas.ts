import { all } from "redux-saga/effects";

import watchUserInfo from "./user/user.saga";
import watchSearch from "./search/search.saga";
import watchAlbums from "./album/album.saga";
import playerSagas from "./player/index.saga";
import watchAccessToken from "./player/index.saga";

export default function* sagas() {
  yield all([
    watchAccessToken(),
    watchUserInfo(),
    watchSearch(),
    watchAlbums(),
    playerSagas(),
  ]);
}
