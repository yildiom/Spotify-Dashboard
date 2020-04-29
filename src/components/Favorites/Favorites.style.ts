import styled from "styled-components";
import { ReactComponent as HeartIcon } from "../../assets/heart_icon.svg";
import { ReactComponent as Trash } from "../../assets/icon-trash-can.svg";

export const Wrapper = styled.div`
  width: 45%;
  max-height: %100;
`;

export const FavoritesContainer = styled.div`
  width: 100%;
  height: 19.8em;
  font-family: Gotham-Light;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const Img = styled.img`
  width: 4em;
  height: 4em;
  box-shadow: 1px 2px 3px 1px #eeeeee;
  margin: 0.5em;
`;
export const StyledHeart = styled(HeartIcon)`
  width: 1.3em;
  height: 1.3em;
  position: absolute;
  fill: red;
  top: 70%;
  left: 90%;
`;
export const AlbumCard = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 0.5em;
  box-shadow: 1px 2px 3px 1px #eeeeee;
`;

export const AlbumName = styled.h3`
  font-size: 1em;
  line-height: 0;
`;

export const ArtistName = styled.p`
  font-size: 0.7em;
  font-weight: bold;
  line-height: 1em;
`;

export const AlbumInfoHolder = styled.div`
  margin-left: 0.7em;
  padding-top: 0.5em;
`;

export const Header = styled.h4`
  font-family: Gotham-Light;
  font-size: 1.1em;
`;

export const StyledTrash = styled(Trash)`
  font-family: Gotham;
  fill: black;
  cursor: pointer;
  position: absolute;
  width: 1.1em;
  height: 1.6em;
  top: 68%;
  left: 80%;
`;
