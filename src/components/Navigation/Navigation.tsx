import React, { memo } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Container,
  Img,
  Dashboard,
  ContainerRight,
  NavItem
} from "./Navigation.style";
import logo from "../../assets/spotify_logo_green.png";

const Navigation: React.FC = () => {
  return (
    <Nav>
      <Container>
        <Link to="/">
          <Img alt="spotify-logo" src={logo} />
          <Dashboard>Spotify Dashboard</Dashboard>
        </Link>
        {/* <IcoLogo width={50} height={50} style={{ display: "block" }} /> */}
      </Container>
      <ContainerRight>
        <Link to="/">
          <NavItem>Home</NavItem>
        </Link>
        <Link to="/profile">
          <NavItem>Profile</NavItem>
        </Link>
      </ContainerRight>
    </Nav>
  );
};

export default memo(Navigation);
