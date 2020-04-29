import React, { memo, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import Helmet from "react-helmet";
import { BottomContainer } from "./Home.style";

import Navigation from "../../components/Navigation";
import Layout from "../../components/Layout";
import SearchField from "../../components/SearchField";
import Results from "../../components/Results";
import CurrentlyPlaying from "../../components/CurrentlyPlaying";
import Favorites from "../../components/Favorites";

import { getUserInfo } from "../../store/user/user.actions";
import { getAccessToken } from "../../store/auth/auth.actions";

import { getUserAlbums } from "../../store/album/album.actions";
import { getCurrentlyPlaying } from "../../store/player/player.actions";

const Home: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();
  useEffect(() => {
    dispatch(getAccessToken()); //buna gerek yok zaten reduxta olacak
    dispatch(getUserInfo());
    dispatch(getUserAlbums());
    dispatch(getCurrentlyPlaying());
  });

  const reloadCurrentlyPlaying = useCallback(
    () => dispatch(getCurrentlyPlaying()),
    [dispatch]
  );

  const reloadSavedAlbums = useCallback(() => dispatch(getUserAlbums()), [
    dispatch,
  ]);

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="The home page" />
      </Helmet>
      <Navigation />
      <Layout>
        <SearchField />
        <Results reload={reloadSavedAlbums} />
        <BottomContainer>
          <CurrentlyPlaying reload={reloadCurrentlyPlaying} />
          <Favorites reload={reloadSavedAlbums} />
        </BottomContainer>
      </Layout>
    </>
  );
};

export default memo(Home);
