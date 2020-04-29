import { createReducer } from "redux-act";
import {
  searchArtist,
  getSearchedAlbums,
  apiCallError,
} from "./search.actions";
import { ISearchState } from "../../types/store/search.types";

const initialState: ISearchState = {
  loading: false,
  searchValue: "",
  albums: [],
  error: undefined,
};

const reducer = createReducer({}, initialState);

reducer.on(searchArtist, (state, payload) => ({
  ...state,
  searchValue: payload,
  albums: [],
  loading: true,
}));

reducer.on(getSearchedAlbums, (state, payload) => ({
  ...state,
  albums: payload,
  loading: false,
}));

reducer.on(apiCallError, (state, payload) => ({
  ...state,
  error: payload,
}));

export default reducer;
