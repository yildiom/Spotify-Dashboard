import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Wrapper,
  Container,
  Img,
  Header,
  InfoContainer,
  ArtistName,
  SongName,
  ControlContainer,
  StyledPlay,
  StyledPause,
  StyledNext,
  StyledPrevious,
} from "./CurrentlyPlaying.style";

import { play, pause, previous, next } from "../../store/player/player.actions";
import { IStore } from "../../types/store/store.types";

interface CurrentlyPlayingProps {
  reload: () => void;
}

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({ reload }) => {
  const dispatch = useDispatch();

  const [playStatus, togglePlayStatus] = useState<boolean>(true);

  const currentlyPlaying = useSelector(
    (state: IStore) => state.player.currentlyPlaying
  );

  return (
    <Wrapper>
      <Header>Currently Playing</Header>
      <Container>
        {currentlyPlaying ? (
          <div>
            <Img
              alt="album-cover"
              src={currentlyPlaying.item.album.images[0].url}
            />
            <InfoContainer>
              <ArtistName>
                {currentlyPlaying.item.album.artists[0].name}
              </ArtistName>
              <SongName>{currentlyPlaying.item.name}</SongName>
            </InfoContainer>
            <ControlContainer>
              <StyledPrevious
                onClick={() => {
                  dispatch(previous());
                  setTimeout(() => reload(), 500);
                }}
              />
              {playStatus ? (
                <StyledPlay
                  onClick={() => {
                    togglePlayStatus(!playStatus);
                    dispatch(play());
                  }}
                />
              ) : (
                <StyledPause
                  onClick={() => {
                    togglePlayStatus(!playStatus);
                    dispatch(pause());
                  }}
                />
              )}
              <StyledNext
                onClick={() => {
                  dispatch(next());
                  setTimeout(() => reload(), 500);
                }}
              />
            </ControlContainer>
          </div>
        ) : (
          <div>Play a song on Spotify to see it here</div>
        )}
      </Container>
    </Wrapper>
  );
};

export default CurrentlyPlaying;
