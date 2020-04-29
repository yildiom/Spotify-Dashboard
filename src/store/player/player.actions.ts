import { createAction } from "redux-act";

export const getCurrentlyPlaying = createAction("getCurrentlyPlaying");

export const setCurrentlyPlaying = createAction(
  "setCurrentlyPlaying",
  (payload: object) => payload
);

export const play = createAction("play");
export const setPlay = createAction("setPlay");

export const pause = createAction("pause");
export const setPause = createAction("setPause");

export const previous = createAction("previous");
export const setPrevious = createAction("setPrevious");

export const next = createAction("next");
export const setNext = createAction("setNext");

export const apiCallError = createAction(
  "callError",
  (payload: any) => payload
);
