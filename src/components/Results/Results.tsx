import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ResultsContainer,
  Img,
  ImgHolder,
  StyledHeart,
  Header,
} from "./Results.style";
import { v1 as uuid } from "uuid";
import { saveAlbum } from "../../store/album/album.actions";
import { IStore } from "../../types/store/store.types";

interface ResultsProps {
  reload: () => void;
}

const Results: React.FC<ResultsProps> = ({ reload }) => {
  const dispatch = useDispatch();

  const [liked, setLiked] = useState<boolean>(false);

  const albums = useSelector((state: IStore) => state.search.albums);

  useEffect(() => {
    reload();
    return () => {
      setLiked(false);
    };
  }, [liked]);

  return (
    <>
      <Header>Results</Header>
      <ResultsContainer>
        {albums ? (
          albums.map((album: any) => (
            <ImgHolder
              key={album.id}
              onClick={() => {
                dispatch(saveAlbum(album.id));
                setLiked(true);
                //setTimeout(() => reload(), 1000);
              }}
            >
              <StyledHeart />
              <Img alt="album-cover" src={album.images[0].url} />
            </ImgHolder>
          ))
        ) : (
          <div>no results.</div>
        )}
      </ResultsContainer>
    </>
  );
};

export default memo(Results);
