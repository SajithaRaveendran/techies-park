import React from "react";

//styling
import styled from "styled-components";

export default function Footer() {
  return (
    <MainContainer>
      <FooterTop>
        <Techies>
          <TechiesImage
            src={require("../../../assets/images/footer-techies-park.png")}
            alt="Techies Logo"
          />
        </Techies>
        <FooterHead>A Project from</FooterHead>
        <Talrop>
          <TalropImage src={require("../../../assets/images/talrop.png")} alt="Talrop Logo"/>
        </Talrop>
      </FooterTop>
      <HrLine />
      <FooterBottom>
        <Itmes>
          <Item href="https://www.instagram.com/talropworld/">
            <ItemImage
              src={require("../../../assets/images/instagram.png")}
              alt="Instagram"
            />
          </Item>
        </Itmes>
        <Itmes>
          <Item href="https://www.facebook.com/talropworld/">
            <ItemImage
              src={require("../../../assets/images/facebook.png")}
              alt="Facebook"
            />
          </Item>
        </Itmes>
        <Itmes>
          <Item href="https://twitter.com/talropworld/">
            <ItemImage
              src={require("../../../assets/images/twitter.png")}
              alt="Fwitter"
            />
          </Item>
        </Itmes>
        <Itmes>
          <Item href="https://www.linkedin.com/company/talrop/">
            <ItemImage
              src={require("../../../assets/images/linkedin.png")}
              alt="Linkedin"
            />
          </Item>
        </Itmes>
        <Itmes>
          <Item href="https://www.youtube.com/c/talrop">
            <ItemImage
              src={require("../../../assets/images/youtube.png")}
              alt="Youtube"
            />
          </Item>
        </Itmes>
      </FooterBottom>
    </MainContainer>
  );
}
const MainContainer = styled.section`
  background: #1e1e1e;
  padding: 50px 0;
`;
const FooterTop = styled.div``;
const Techies = styled.div`
  width: 13%;
  margin: 0 auto;
  @media all and (max-width: 980px) {
    width: 25%;
  }
  @media all and (max-width: 360px) {
    width: 45%;
  }
`;
const TechiesImage = styled.img`
  display: block;
  width: 100%;
`;
const FooterHead = styled.h2`
  color: #d6d6d6;
  text-align: center;
  margin: 20px 0;
  font-size: 18px;
  font-family: "DM Sans_regular";
`;
const Talrop = styled.div`
  width: 4%;
  margin: 0 auto;
  @media all and (max-width: 980px) {
    width: 8%;
  }
  @media all and (max-width: 360px) {
    width: 14%;
  }
`;
const TalropImage = styled.img`
  display: block;
  width: 100%;
`;
const HrLine = styled.hr`
  border-bottom: 1px solid #303030;
  margin-top: 30px;
`;
const FooterBottom = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const Itmes = styled.li`
  margin-right: 30px;
  width: 20px;
  &:nth-child(even) {
    width: 10px;
  }
  &:nth-child(4n) {
    width: 19px;
  }
`;
const Item = styled.a`
  cursor: pointer;
`;
const ItemImage = styled.img`
  width: 100%;
  display: block;
`;
