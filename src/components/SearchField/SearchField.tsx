import React, { memo, useState, SyntheticEvent } from "react";
import { useDispatch } from "react-redux";
import {
  SearchHeader,
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchForm,
} from "./SearchField.style";
import { searchArtist } from "../../store/search/search.actions";

const SearchField: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(searchArtist(search));
    setSearch("");
  };

  return (
    <SearchContainer>
      <SearchHeader>Search for an artist</SearchHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search..."
          style={{ width: "50%" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></SearchInput>
        <SearchButton type="submit">search</SearchButton>
      </SearchForm>
    </SearchContainer>
  );
};

export default memo(SearchField);
