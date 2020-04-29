import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #191414;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 24px;
  display: flex;
  position: relative;
  height: 100%;
`;

export const Img = styled.img`
  display: block;
  width: 3em;
  height: 3em;
  position: absolute;
  top: 1em;
`;

export const Dashboard = styled.h1`
  font-size: 1.5em;
  color: white;
  font-family: Gotham;
  position: absolute;
  left: 3.7em;
  top: 0.3em;
`;

export const ContainerRight = styled.div`
  margin: 0 auto;
  width: 15%;
  padding: 0 24px;
  display: flex;
  height: 100%;
  text-decoration: none;
`;

export const NavItem = styled.h2`
  font-size: 1em;
  color: white;
  font-family: Gotham-Light;
  margin: 2em 0 0 1.5em;
`;
