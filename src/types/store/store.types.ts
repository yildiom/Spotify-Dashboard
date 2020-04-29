// import { ISystemState } from "../../../../../../../Projects/Boilerplate/client/src/types/store/system.types";
// import { IIntlState } from "../../../../../../../Projects/Boilerplate/client/src/types/store/intl.types";
// import { IAuthState } from "../../../../../../../Projects/Boilerplate/client/src/types/store/auth.types";
import { IUserState } from "./user.types";
import { ISearchState } from "./search.types";
import { IUserAlbumsState } from "./album.types";
import { IPlayerState } from "./player.types";

export interface IStore {
  // system: ISystemState;
  // intl: IIntlState;
  // auth: IAuthState;
  user: IUserState;
  search: ISearchState;
  userAlbums: IUserAlbumsState;
  player: IPlayerState;
}
