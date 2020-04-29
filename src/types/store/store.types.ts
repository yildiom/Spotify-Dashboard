import { IUserState } from "./user.types";
import { ISearchState } from "./search.types";
import { IUserAlbumsState } from "./album.types";
import { IPlayerState } from "./player.types";

export interface IStore {
  user: IUserState;
  search: ISearchState;
  userAlbums: IUserAlbumsState;
  player: IPlayerState;
}
