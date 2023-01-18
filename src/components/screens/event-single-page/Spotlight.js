import React from "react";
//styles
import styled from "styled-components";

export default function Spotlight() {
  return (
    <MainContainer>
      <Container>
        <SpotlightLeft>
          <SpotlightHeader>
            Ex-Minister and current MLA of the Kannur Assembly Constituency, Mr
            Kadannappalli Ramachandran visited Talrop's Techies Park
          </SpotlightHeader>
          <SubContainer>
            <EventCount>01</EventCount>
            <Description>
              As part of Talrop's Invest in Kerala campaign, a business meeting
              was organised on 28th August at Kannur.The event was held at
              Talrop's Techies Park, NAHER Arts and Science College, Kanhirode,
              Kannur and many potential Angel Investors took part in the
              meeting. Talked about the needs and opportunities of Angel
              Investors in a startup and the risks & benefits of Angel Investing
              were also discussed. A detailed overview of Talrop's mission and
              investment opportunities in Talrop's startups were discussed.
            </Description>
            <EventDetails>
              “Business meeting organised on the 28th August at Kannur”
            </EventDetails>
          </SubContainer>
        </SpotlightLeft>

        <SpotlightRight>
          <EventImage>
            <Image src={require("../../../assets/images/business-meet.png")} />
          </EventImage>
          <RightContainer></RightContainer>
        </SpotlightRight>
      </Container>
    </MainContainer>
  );
}

const MainContainer = styled.section`
  padding: 100px 0 100px 50px;
  background: #fcfbf8;
  @media all and (max-width: 1080px) {
    padding-left: 20px;
    padding-bottom: 50px;
  }
  @media all and (max-width: 769px) {
    padding: 50px 20px;

  }
`;

const Container = styled.section`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media all and (max-width: 980px) {
    flex-direction:column-reverse;
  }
  @media all and (max-width: 480px) {
    width: 95%;
  }
`;
const SpotlightLeft = styled.div`
  width: 45%;
  @media all and (max-width: 980px) {
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
  @media all and (max-width: 769px) {
    width: 100%;
  }
`;

const SpotlightRight = styled.div`
  width: 49%;
  position: relative;
  z-index: 0;
  @media all and (max-width: 980px) {
    width: 85%;
    margin: 0 auto;
  }
  @media all and (max-width: 768px) {
    width: 100%;
  }
`;
const SpotlightHeader = styled.h3`
  font-family: "DM Sans_bold";
  margin-bottom: 30px;
  font-size: 26px;
  @media all and (max-width: 1380px) {
    margin-bottom: 10px;
  }
  @media all and (max-width: 1080px) {
    font-size: 21px;
  }
  @media all and (max-width: 980px) {
    font-size: 24px;
    margin-top: 20px;
  }
  @media all and (max-width: 480px) {
    font-size: 21px;
  }
 
`;
const SubContainer = styled.div`
  margin-left: 30px;
  @media all and (max-width: 980px) {
    margin-left: 0;
  }
`;
const EventCount = styled.h5`
  color: rgb(15, 167, 111);
  font-size: 22px;
  margin-bottom: 10px;
  font-family: "DM Sans_bold";
 
`;
const Description = styled.p`
  color: #868686;
  font-family: gordita_regular;
  font-size: 17px;
  line-height: 1.6em;
  @media all and (max-width: 1280px) {
    font-size: 16px;
  }
  @media all and (max-width: 1080px) {
    font-size: 14px;
  }
  @media all and (max-width: 980px) {
    font-size: 15px;
  }
  @media all and (max-width: 480px) {
    font-size: 14px;
  }
`;
const EventDetails = styled.h4`
  color: rgb(0, 0, 0);
  font-size: 17px;
  font-family: "DM Sans_bold";
  margin-top: 20px;
  @media all and (max-width: 1380px) {
    margin-top: 10px;
  }
 
`;
const EventImage = styled.div`
  width: 90%;
  @media all and (max-width: 1380px) {
    width: 100%;
    
  }
  @media all and (max-width: 1080px) {
    
  }
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const RightContainer = styled.div`
  border: 1px solid rgb(15, 167, 111);
  width: 90%;
  height: 100%;
  position: absolute;
  top: -13%;
  right: -1%;
  border-radius: 26px;
  z-index: -1;
  @media all and (max-width: 1380px) {
    width: 100%;
    top: -9%;
    right: -8%;
  }
  @media all and (max-width: 1280px) {
    right: -10%;
    height: 79%;
  }
  @media all and (max-width: 1080px) {
    right: -10%;
    height: 75%;
  }
  @media all and (max-width: 980px) {
    display: none;
  }
`;
