import { createAction } from "redux-act";

export const getUserAlbums = createAction("getUserAlbums");
export const setUserAlbums = createAction(
  "setUserAlbums",
  (payload: object[]) => payload
);

export const saveAlbum = createAction<string>(
  "saveAlbum",
  (payload: string) => payload
);
export const setSaveAlbum = createAction<string>(
  "setSaveAlbum",
  (payload: string) => payload
);

export const removeAlbum = createAction<string>(
  "removeAlbum",
  (payload: string) => payload
);
export const setRemoveAlbum = createAction<string>(
  "setRemoveAlbum",
  (payload: string) => payload
);

export const apiCallError = createAction(
  "callError",
  (payload: any) => payload
);
