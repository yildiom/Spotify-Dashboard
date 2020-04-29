import styled from "styled-components";

export const SearchHeader = styled.h1`
  font-size: 40px;
  font-family: Gotham-Light;
`;

export const SearchContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 30em;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SearchInput = styled.input`
  font-family: Gotham-Light;
  border: 1px;
  padding: 0.7em 2.5em;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 900;
  background: #f8f8f8;
  margin-right: 1em;
  box-shadow: 1px 2px 3px 1px #eeeeee;
  width: %60;
`;

export const SearchButton = styled.button`
  font-family: Gotham-Light;
  font-size: 14px;
  font-weight: bold;
  border: 1px;
  border-radius: 20px;
  background: #20d760;
  color: white;
  padding: 0.7em 3em;
`;

export const SearchForm = styled.form`
  width: 100%;
`;
