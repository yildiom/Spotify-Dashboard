import styled from "styled-components";
import { ReactComponent as Play } from "../../assets/play_button.svg";
import { ReactComponent as Pause } from "../../assets/pause_button.svg";
import { ReactComponent as Skip } from "../../assets/skip_button.svg";

export const Wrapper = styled.div`
  width: 45%;
`;

export const Container = styled.div`
  width: 100%;
  font-family: Gotham-Light;
  position: relative;
`;

export const Img = styled.img`
  width: 20.4em;
  height: 19.5em;
  box-shadow: 1px 2px 3px 1px #eeeeee;
`;

export const Header = styled.h4`
  font-family: Gotham-Light;
  font-size: 1.1em;
`;

export const InfoContainer = styled.div`
  position: absolute;
  bottom: 1.5em;
  left: 1.5em;
  color: white;
`;

export const ArtistName = styled.h4`
  line-height: 0;
  font-family: Gotham;
  font-size: 1.2em;
  text-shadow: 1px 1px black;
`;
export const SongName = styled.p`
  line-height: 0;
  font-weight: 600;
  text-shadow: 1px 1px black;
`;

export const ControlContainer = styled.div`
  position: absolute;
  bottom: 1.5em;
  right: 1.5em;
  fill: white;
  display: flex;
`;

export const StyledPlay = styled(Play)`
  width: 1.5em;
  height: 1.5em;
  fill: white;
  cursor: pointer;
  margin-right: 0.3em;
  filter: drop-shadow(0 0 2px black);
`;

export const StyledPause = styled(Pause)`
  width: 1.5em;
  height: 1.5em;
  fill: white;
  cursor: pointer;
  margin-right: 0.3em;
  filter: drop-shadow(0 0 2px black);
`;

export const StyledPrevious = styled(Skip)`
  width: 1.5em;
  height: 1.5em;
  fill: white;
  cursor: pointer;
  margin-right: 0.3em;
  transform: rotate(180deg);
  filter: drop-shadow(0 0 2px black);
`;

export const StyledNext = styled(Skip)`
  width: 1.5em;
  height: 1.5em;
  fill: white;
  cursor: pointer;
  margin-right: 0.3em;
  filter: drop-shadow(0 0 2px black);
`;
