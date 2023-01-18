import React from "react";

//styled
import styled from "styled-components";

//packages
import { Link } from "react-scroll";
import LandingHamburger from "../../modal/LandingHamburger";

export default function Navbar() {
  return (
    <MainContainer>
      <Header>
        <HeadLeft>
          <Logo to="home">
            <LogoImage
              src={require("../../../assets/images/techies-logo.jpg")}
              alt="Techies Logo"
            />
          </Logo>
        </HeadLeft>
        <HeadRight>
          <NavItems>
            <NavItem to="home" smooth activeClass="active" spy offset={-180}>
              Home
            </NavItem>
            <NavItem
              to="amenities"
              smooth
              activeClass="active"
              spy
              offset={20}
            >
              Our Amenities
            </NavItem>
            <NavItem to="events" smooth activeClass="active" spy offset={-70}>
              Our Events
            </NavItem>
            <NavItem
              to="revenue"
              smooth
              activeClass="active"
              spy={true}
              offset={-50}
            >
              Revenue Models
            </NavItem>
          </NavItems>
          <MenuContainer>
            <LandingHamburger/>
          </MenuContainer>
        </HeadRight>
      </Header>
    </MainContainer>
  );
}
const MainContainer = styled.section`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;

  /* touch-action: none; */
`;
const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 80%;
  margin: 0 auto;
  position: relative;
  z-index: 300;
  @media all and (max-width: 980px) {
    width: 100%;
    padding: 0 50px;
  }
  @media all and (max-width: 640px) {
    width: 100%;
    padding: 0 30px;
  }
`;
const HeadLeft = styled.h1`
  width: 16%;
  @media all and (max-width: 980px) {
    width: 27%;
  }
  @media all and (max-width: 640px) {
    width: 38%;
  }
  @media all and (max-width: 480px) {
    width: 45%;
  }
  @media all and (max-width: 360px) {
    width: 50%;
  }
`;
const Logo = styled(Link)`
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
const NavItem = styled(Link)`
  cursor: pointer;
  margin-left: 70px;
  font-family: 'Gordita_medium';
  color: #666666;
  font-size: 17px;
  &.active {
    color: #4eaf7c !important;
  }
  &:first-child {
    margin-left: 0;
  }
  @media all and (max-width: 1380px) {
    margin-left: 50px;
  }
`;
const MenuContainer = styled.div`
  width: 80px;
  cursor: pointer;
  display: none;
  @media all and (max-width:980px) {
    display: block;
  }
`;
