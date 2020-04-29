import { createReducer } from "redux-act";
import {
  getCurrentlyPlaying,
  setCurrentlyPlaying,
  apiCallError,
  setPlay,
  setPause,
  setPrevious,
  setNext,
} from "./player.actions";
import { IPlayerState } from "../../types/store/player.types";

const initialState: IPlayerState = {
  loading: false,
  currentlyPlaying: undefined,
  trackStatus: "",
  error: undefined,
};

const reducer = createReducer({}, initialState);

reducer.on(getCurrentlyPlaying, (state) => ({
  ...state,
  loading: true,
}));

reducer.on(setCurrentlyPlaying, (state, payload) => ({
  ...state,
  currentlyPlaying: payload,
  loading: false,
}));

reducer.on(setPlay, (state) => ({
  ...state,
  trackStatus: "Playing",
}));

reducer.on(setPause, (state) => ({
  ...state,
  trackStatus: "Paused",
}));

reducer.on(setPrevious, (state) => ({
  ...state,
  trackStatus: "Skipped to previous",
}));

reducer.on(setNext, (state) => ({
  ...state,
  trackStatus: "Skipped to next",
}));

reducer.on(apiCallError, (state, payload) => ({
  ...state,
  error: payload,
}));

export default reducer;
