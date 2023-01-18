import React, { useState } from "react";

//styles
import styled from "styled-components";

//package
import { Link } from "react-scroll";

export default function LandingHamburger() {
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => {
    setVisible(!visible);
  };
  return (
    <MainContainer style={{ top: visible && 0 }}>
      <ButtonContainer onClick={toggleMenu}>
        <ButtonImage
          src={require("../../assets/images/menu.png")}
        ></ButtonImage>
      </ButtonContainer>
      <Layout >
        {visible && (
          <Container
            animation={
              !visible? "slide-top": "slide-bottom" | 
              visible ? "slide-bottom": "slide-top"
            }
          >
            <Nav>
              <Link
                onClick={() =>
                  visible === true ? setVisible(false) : setVisible(true)
                }
                style={{ cursor: "pointer" }}
                activeClass="active"
                to="spotlight"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Home
              </Link>
            </Nav>
            <Nav>
              <Link
                onClick={() =>
                  visible === true ? setVisible(false) : setVisible(true)
                }
                style={{ cursor: "pointer" }}
                activeClass="active"
                to="amenities"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Our Amenities
              </Link>
            </Nav>
            <Nav>
              <Link
                onClick={() =>
                  visible === true ? setVisible(false) : setVisible(true)
                }
                style={{ cursor: "pointer" }}
                activeClass="active"
                to="events"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Our Events
              </Link>
            </Nav>
            <Nav>
              <Link
                onClick={() =>
                  visible === true ? setVisible(false) : setVisible(true)
                }
                style={{ cursor: "pointer" }}
                activeClass="active"
                to="revenue"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Revenue Models
              </Link>
            </Nav>
            <Nav>
              <Link>Go to Dashboard</Link>
            </Nav>
          </Container>
        )}
      </Layout>
    </MainContainer>
  );
}

const MainContainer = styled.section``;
const ButtonContainer = styled.div`
  width: 80px;
  @media all and (max-width: 640px) {
    width: 88%;
  }
`;
const ButtonImage = styled.img`
  display: block;
  width: 100%;
`;
const Container = styled.ul`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background: rgb(240, 248, 238);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  text-align: center;

  @keyframes slide-bottom {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100px);
    }
  }

  @keyframes slide-top {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-700px);
    }
  }
  animation: ${({ animation }) => animation} 0.3s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
const Nav = styled.li`
  width: 100%;
  margin-bottom: 45px;
  font-size: 16px;
  color: #666666;
  font-family: "Gordita_medium";
  &:last-child {
    display: block;
    color: #fff;
    background: rgb(15, 167, 111);
    border-radius: 5px;
    width: 30%;
    font-family: "Gordita_medium";
    padding: 10px 0px;
    font-size: 16px;
    cursor: pointer;
    margin: 0 auto;
    @media all and (max-width: 640px) {
      width: 65%;
    }
  }
`;
const Layout = styled.div`
 
  
`;
