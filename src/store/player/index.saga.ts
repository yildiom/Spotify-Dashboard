import { all } from "redux-saga/effects";

import watchCurrentlyPlaying from "./currentlyPlaying.saga";
import watchPlay from "./play.saga";
import watchPause from "./pause.saga";
import watchPrevious from "./previous.saga";
import watchNext from "./next.saga";

export default function* playerSagas() {
  yield all([
    watchCurrentlyPlaying(),
    watchPlay(),
    watchPause(),
    watchPrevious(),
    watchNext()
  ]);
}
