import { createReducer } from "redux-act";
import {
  setSaveAlbum,
  getUserAlbums,
  setUserAlbums,
  setRemoveAlbum,
  apiCallError,
} from "./album.actions";
import { IUserAlbumsState } from "../../types/store/album.types";

const initialState: IUserAlbumsState = {
  loading: false,
  albumDetails: [],
  likedAlbumID: "",
  removedAlbumID: "",
  error: undefined,
};

const reducer = createReducer({}, initialState);

reducer.on(getUserAlbums, (state) => ({
  ...state,
  loading: true,
}));

reducer.on(setUserAlbums, (state, payload) => ({
  ...state,
  albumDetails: payload,
  loading: false,
}));

reducer.on(setSaveAlbum, (state, payload) => ({
  ...state,
  likedAlbumID: payload,
  loading: false,
}));

reducer.on(setRemoveAlbum, (state, payload) => ({
  ...state,
  removedAlbumID: payload,
  loading: false,
}));

reducer.on(apiCallError, (state, payload) => ({
  ...state,
  error: payload,
}));

export default reducer;
