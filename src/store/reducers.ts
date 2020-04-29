// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import searchReducer from "./search/search.reducer";
import userAlbumReducer from "./album/album.reducer";
import playerReducer from "./player/player.reducer";

const reducers = {
  user: userReducer,
  search: searchReducer,
  userAlbums: userAlbumReducer,
  player: playerReducer,
};

export default reducers;
