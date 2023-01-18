import React, { useState } from "react";

//styling
import styled from "styled-components";

//packages
import Popup from "reactjs-popup";

//media
import Video from "../../../assets/images/video.mp4";

export default function Spotlight() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <MainContainer id="home">
      <SpotlightLeft>
        <SpotlightHeader>
          Now we are at <LocationName>Kannur</LocationName> Building a Strong
          Startup Ecosystem
        </SpotlightHeader>
        <SpotlightParagragh>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
          pellentesque sit faucibus vel tellus pharetra et molestie. Enim in
          vulputate in parturient diam in vulputatem Lorem ipsum tellus pharetra
          et molestie.
        </SpotlightParagragh>
        <Place>
          <Location>
            <LocationImage
              src={require("../../../assets/images/loction-icon.jpg")}
              alt="Loction Icon"
            />
          </Location>
          <PlaceName>Kannur Techie’s Park, Kanhirode, Mattannur</PlaceName>
        </Place>
        <PlayButton onClick={() => setOpen((o) => !o)}>
          <ButtonContent>Play Video</ButtonContent>
          <VideoIcon>
            <VideoImage
              src={require("../../../assets/images/video-icon.png")}
              alt="Video Icon"
            />
          </VideoIcon>
        </PlayButton>
      </SpotlightLeft>
      <ImageContainer>
        <BackgroundImage
          src={require("../../../assets/images/building.png")}
          alt="Building"
        />
      </ImageContainer>
      <PlayIcon>
        <PlayImage
          onClick={() => setOpen((o) => !o)}
          src={require("../../../assets/images/play-icon.png")}
          alt-="Play Icon"
        />
      </PlayIcon>
      <Popup
        className="video"
        open={open}
        lockScroll={true}
        overlayStyle={{ background: "rgba(0,0,0,.5)" }}
      >
        <Popupdiv>
          <Videos controls autoPlay="autoPlay">
            <Source src={Video} />
          </Videos>
          <Closeimage
            onClick={closeModal}
            src={require("../../../assets/images/close.svg").default}
            alt="Close"
          />
        </Popupdiv>
      </Popup>
    </MainContainer>
  );
}
const MainContainer = styled.section`
  background: linear-gradient(284.92deg, #f4f1e9 0%, #ffffff 98.38%);
  position: relative;
  @media all and (max-width: 980px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 50px;
    text-align: center;
  }

  @media all and (max-width: 360px) {
    padding: 5px;
  }
`;
const SpotlightLeft = styled.div`
  padding: 7% 0 7% 10%;
  @media all and (max-width: 1380px) {
    padding: 6% 0 7% 10%;
  }
  @media all and (max-width: 980px) {
    padding: 0px;
    width: 85%;
    margin: 0 auto;
  }
  @media all and (max-width: 640px) {
    width: 100%;
  }
`;
const SpotlightHeader = styled.h4`
  font-family: "DM Sans_bold";
  width: 630px;
  font-size: 60px;
  @media all and (max-width: 1380px) {
    font-size: 40px;
    width: 425px;
  }
  @media all and (max-width: 1380px) {
    font-size: 34px;
    width: 400px;
  }
  @media all and (max-width: 980px) {
    width: 100%;
    margin-top: 30px;
  }
  @media all and (max-width: 640px) {
    font-size: 28px;
  }
  @media all and (max-width: 360px) {
    font-size: 24px;
  }
`;
const LocationName = styled.span`
  font-family: "DM Sans_bold";
  color: #0fa76f;
  font-style: italic;
`;
const SpotlightParagragh = styled.p`
  font-family: "DM Sans_regular";
  width: 530px;
  font-size: 15px;
  color: #747474;
  margin-top: 20px;
  @media all and (max-width: 1380px) {
    width: 38%;
  }
  @media all and (max-width: 1080px) {
    width: 58%;
  }
  @media all and (max-width: 980px) {
    width: 100%;
  }
`;
const Place = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  background: #fff;
  margin-top: 40px;
  margin-bottom: 60px;
  border-radius: 12px;
  padding: 16px 22px;
  border: 1px solid #eeeeee;
  height: 50px;
  @media all and (max-width: 980px) {
    margin: 20px auto 0;
  }
  @media all and (max-width: 640px) {
    width: 235px;
  }
`;
const Location = styled.div`
  margin-right: 10px;
  width: 20px;
`;
const LocationImage = styled.img`
  display: block;
  width: 100%;
`;
const PlaceName = styled.span`
  font-size: 15px;
  font-family: "DM Sans_bold";
`;
const PlayButton = styled.button`
  background: #0fa76f;
  display: flex;
  align-items: center;
  padding: 10px 24px;
  border-radius: 6px;
  width: 197px;
  height: 60px;
  cursor: pointer;
  &:hover {
    background-color: rgb(12, 125, 84);
    transition: all 0.4s ease-in 0s;
    opacity: 1;
  }
  @media all and (max-width: 980px) {
    margin: 20px auto;
  }
  @media all and (max-width: 640px) {
    width: 178px;
    height: 44px;
  }
`;
const ButtonContent = styled.a`
  color: #fff;
  margin-right: 10px;
  font-family: "DM Sans_medium";
  font-size: 18px;
`;
const VideoIcon = styled.div`
  width: 30px;
`;
const VideoImage = styled.img`
  display: block;
  width: 100%;
`;
const ImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 900px;
  @media all and (max-width: 1380px) {
    width: 770px;
  }
  @media all and (max-width: 1280px) {
    width: 570px;
  }
  @media all and (max-width: 1080px) {
    width: 470px;
  }
  @media all and (max-width: 980px) {
    position: static;
    margin: 0 auto;
  }
  @media all and (max-width: 640px) {
    width: 370px;
  }
  @media all and (max-width: 480px) {
    width: 300px;
  }
  @media all and (max-width: 360px) {
    width: 250px;
  }
`;
const BackgroundImage = styled.img`
  display: block;
  width: 100%;
  @media all and (max-width: 1380px) {
    height: 550px;
  }
  @media all and (max-width: 1280px) {
    height: 480px;
  }
  @media all and (max-width: 1080px) {
    height: 350px;
  }
  @media all and (max-width: 640px) {
    height: 310px;
  }
  @media all and (max-width: 480px) {
    height: 260px;
  }
`;
const PlayIcon = styled.div`
  position: absolute;
  right: 372px;
  top: 370px;
  width: 174px;
  cursor: pointer;
  @media all and (max-width: 1380px) {
    right: 311px;
    top: 295px;
    width: 153px;
  }
  @media all and (max-width: 1280px) {
    right: 222px;
    top: 299px;
    width: 129px;
  }
  @media all and (max-width: 1080px) {
    right: 182px;
    top: 339px;
    width: 106px;
  }
  @media all and (max-width: 980px) {
    right: 43%;
    top: 141px;
  }

  @media all and (max-width: 640px) {
    top: 106px;
    width: 70px;
  }
  @media (max-width: 480px) {
    right: 35%;
  }
  @media (max-width: 360px) {
    right: 38%;
    top: 79px;
  }
`;
const PlayImage = styled.img`
  display: block;
  width: 100%;
`;

const Closeimage = styled.img`
  width: 30px;
  cursor: pointer;
  position: absolute;
  right: 13%;
  top: 56px;
  @media all and (max-width: 1080px) {
    right: 3%;
  }
  @media all and (max-width: 640px) {
    width: 24px;
    right: 5%;
    top: 24px;
  }
`;

const Source = styled.source``;

const Videos = styled.video`
  width: 100%;
  border: none;
  padding-top: 54px;
`;

const Popupdiv = styled.div`
  width: 66%;
  margin: 0 auto;
  @media all and (max-width: 1080px) {
    width: 86%;
  }
  @media all and (max-width: 640px) {
    width: 92%;
  }
`;
