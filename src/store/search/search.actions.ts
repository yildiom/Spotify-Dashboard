import { createAction } from "redux-act";

export const searchArtist = createAction<string>(
  "searchArtist",
  (payload: string) => payload
);
export const getSearchedAlbums = createAction(
  "getAlbums",
  (payload: object[]) => payload
);

export const apiCallError = createAction(
  "callError",
  (payload: any) => payload
);
