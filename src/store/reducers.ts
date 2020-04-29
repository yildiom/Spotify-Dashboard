// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import systemReducer from "../../src/store/system/system.reducer";
// import intlReducer from "../../src/store/intl/intl.reducer";
// import authReducer from "../../src/store/auth/auth.reducer";
import userReducer from "./user/user.reducer";
import searchReducer from "./search/search.reducer";
import userAlbumReducer from "./album/album.reducer";
import playerReducer from "./player/player.reducer";

const reducers = {
  //   system: systemReducer,
  //   intl: intlReducer,
  //   auth: persistReducer({ key: "auth", storage }, authReducer)
  user: userReducer,
  search: searchReducer,
  userAlbums: userAlbumReducer,
  player: playerReducer
};

export default reducers;
