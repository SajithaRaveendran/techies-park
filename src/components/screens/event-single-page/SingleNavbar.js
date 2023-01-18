import React from "react";
import { Link } from "react-router-dom";

//styling
import styled from "styled-components";


export default function SingleNavbar() {
 
  return (
    <MainContainer>
      <Header>
        <ArrowContainer to="/home">
          <ArrowImage
            src={require("../../../assets/images/previous-arrow.png")}
            alt="Arrow Image"
          />
        </ArrowContainer>
        <Head>
          <Logo>
            <LogoImage
              src={require("../../../assets/images/techies-logo.jpg")}
              alt="Techies Logo"
            />
          </Logo>
        </Head>
      </Header>
    </MainContainer>
  );
}
const MainContainer = styled.section`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
`;
const Header = styled.section`
  display: flex;
  align-items: center;
  height: 100px;
  width: 80%;
  margin: 0 auto;

  @media all and (max-width: 480px) {
    width: 85%;
  }
`;
const ArrowContainer = styled(Link)`
  width: 60px;
  border: 1px solid #0fa76f;
  border-radius: 6px;
  padding: 5px 15px;
  cursor: pointer;
`;
const ArrowImage = styled.img`
  display: block;
  width: 100%;
`;
const Head = styled.h1`
  width: 16%;
  margin-left: 20px;
  @media all and (max-width: 1280px) {
    width: 22%;
  }
  @media all and (max-width: 980px) {
    width: 25%;
  }
  @media all and (max-width: 768px) {
    width: 43%;
  }
  @media all and (max-width: 480px) {
    width: 55%;
  }
`;
const Logo = styled.a`
  cursor: pointer;
  font-family: "Gordita_medium";
`;

const LogoImage = styled.img`
  display: block;
  width: 100%;
`;
