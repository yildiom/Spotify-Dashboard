import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAlbum } from "../../store/album/album.actions";
import {
  Wrapper,
  FavoritesContainer,
  Img,
  AlbumCard,
  StyledHeart,
  AlbumName,
  ArtistName,
  AlbumInfoHolder,
  Header,
  StyledTrash,
} from "./Favorites.style";
import { v1 as uuid } from "uuid";
import { IStore } from "../../types/store/store.types";

interface FavoritesProps {
  reload: () => void;
}

const Favorites: React.FC<FavoritesProps> = ({ reload }) => {
  const dispatch = useDispatch();

  const [deleted, setDeleted] = useState<boolean>(false);

  const userAlbums = useSelector(
    (state: IStore) => state.userAlbums.albumDetails
  );

  useEffect(() => {
    reload();
    return () => {
      setDeleted(false);
    };
  }, [deleted]);

  return (
    <Wrapper>
      <Header>My favorite albums</Header>
      <FavoritesContainer>
        {userAlbums ? (
          userAlbums.map((album: any) => (
            <AlbumCard key={uuid()}>
              <StyledHeart key={uuid()} />
              <StyledTrash
                onClick={() => {
                  dispatch(removeAlbum(album.album.id));
                  setDeleted(true);
                }}
              ></StyledTrash>
              <Img
                key={album.album.id}
                alt="album-cover"
                src={album.album.images[2].url}
              />
              <AlbumInfoHolder>
                <AlbumName>{album.album.name}</AlbumName>
                <ArtistName>{album.album.artists[0].name}</ArtistName>
              </AlbumInfoHolder>
            </AlbumCard>
          ))
        ) : (
          <div>Loading..</div>
        )}
      </FavoritesContainer>
    </Wrapper>
  );
};

export default Favorites;
