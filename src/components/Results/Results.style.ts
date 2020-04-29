import styled from "styled-components";
import { ReactComponent as HeartIcon } from "../../assets/heart_icon.svg";

export const ResultsContainer = styled.div`
  width: 100%
  max-height: 10em;
  display: flex;
  font-family: Gotham-Light;
`;

export const Img = styled.img`
  width: 13em;
  height: 13em;
  box-shadow: 1px 2px 3px 1px #eeeeee;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export const StyledHeart = styled(HeartIcon)`
  width: 3em;
  height: 3em;
  position: absolute;
  fill: red;
  top: 40%;
  left: 40%;
  display: none;
  z-index: 3;
  cursor: pointer;
`;
export const ImgHolder = styled.div`
  background-color: white;
  margin-right: 3em;
  position: relative;
  &:hover {
    background-color: black;
  }
  &:hover ${StyledHeart} {
    display: block;
  }
`;

export const Header = styled.h4`
  font-family: Gotham-Light;
  font-size: 1.1em;
`;
