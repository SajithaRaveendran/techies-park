import React from "react";

//styling
import styled from "styled-components";

//package
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <MainContainer>
      <Header>
        <HeadLeft>
          <Logo to="/home">
            <LogoImage
              src={require("../../../assets/images/techies-logo.jpg")}
              alt="Techies Logo"
            />
          </Logo>
        </HeadLeft>
        <HeadRight>
          <NavItems>
            <NavItem to="/home">Home</NavItem>
            <NavItem  to="/events" activeClass="active">Our Events</NavItem>
            
          </NavItems>
        </HeadRight>
      </Header>
    </MainContainer>
  );
}
const MainContainer = styled.section`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;
`;
const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 80%;
  margin: 0 auto;
  @media all and (max-width: 480px) {
    width: 85%;
  }
`;
const HeadLeft = styled.h1`
  width: 16%;
  @media all and (max-width: 980px) {
    width: 27%;
  }
  @media all and (max-width: 480px) {
    width: 45%;
  }
`;
const Logo = styled(NavLink)`
  cursor: pointer;
`;
const LogoImage = styled.img`
  display: block;
  width: 100%;
`;
const HeadRight = styled.div``;
const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  @media all and (max-width: 980px) {
    display: none;
  }
`;
const NavItem = styled(NavLink)`
  cursor: pointer;
  margin-left: 70px;
  font-family: "Gordita_medium";
  color: #666666;
  font-size: 17px;
  &.active{
    color: rgb(78, 175, 124) !important;
  }
  &:first-child {
    margin-left: 0;
  }
  &:hover{
    color: rgb(78, 175, 124);
  }
  
  @media all and (max-width: 1380px) {
    margin-left: 50px;
    font-size: 16px;
  }
`;
