import React, { useState } from "react";
import Popup from "reactjs-popup";

//styled
import styled from "styled-components";
import "../../../App.css";

//media
import Photos from "../../../assets/images/gallery-icon.png";
import SliderGallery from "../../modal/SliderGallery";

export default function Amenities() {
  const [open, setOpen] = useState(false);
  const Album = [
    {
      id: 1,
      number: "7",
      image: require("../../../assets/images/conference-room.png"),
      title: "Conference Room",
    },
    {
      id: 2,
      number: "7",
      title: "Administration Cabin",
      image: require("../../../assets/images/administration-cabin.png"),
    },
    {
      id: 3,
      number: " 7",
      title: "Presentation Hall",
      image: require("../../../assets/images/presentation-hall.png"),
    },
    {
      id: 4,
      number: " 7",
      image: require("../../../assets/images/workstation.png"),
      title: "Workstation",
    },
    {
      id: 5,
      number: "7",
      image: require("../../../assets/images/conference-room.png"),
      title: "Conference Room",
    },
    {
      id: 6,
      number: "7",
      image: require("../../../assets/images/dinning-room.png"),
      title: "Dining Space",
    },
    {
      id: 7,
      number: "7",
      image: require("../../../assets/images/wash-room.png"),
      title: "Wash Room",
    },
    {
      id: 8,
      number: "7",
      image: require("../../../assets/images/toilets.png"),
      title: "Toilets",
    },
    {
      id: 9,
      number: "7",
      image: require("../../../assets/images/living-room.png"),
      title: "Others",
    },
  ];

  const renderAlbum = Album.map((albums) => {
    return (
      <Gallery className="photos" key={albums.id} onClick={() => setOpen((o) => !o)}>
        <NumberContainer>
          <Number>1/{albums.number}</Number>
        </NumberContainer>
        <Image src={albums.image} />
        <Title className="title">{albums.title}</Title>
        <TitleHover className="hoverTitle">
          <AlbumContainer>
            <AlbumImage src={Photos} />
          </AlbumContainer>
          +{albums.number} More Images
        </TitleHover>
      </Gallery>
    );
  });

  return (
    <MainContainer id="amenities">
      <Heading>
        Our <SubHeader>Amenities</SubHeader>
      </Heading>
      <Line>
        <LineImage
          src={require("../../../assets/images/green-line.png")}
          alt="Green Iine"
        />
      </Line>
      <Description>
        Techies Park is a world-class infrastructure with premium amenities to
        promote education and entrepreneurship and thereby aid overall
        development of the constituency.
      </Description>
      <BottomContainer>{renderAlbum}</BottomContainer>
  
      <Popup open={open}  overlayStyle={{ background: "#fff" }} lockScroll={true}>
        <SliderGallery open={open} setOpen={setOpen}/>
      </Popup>
    </MainContainer>
  );
}
const MainContainer = styled.section`
  padding: 100px;
  @media all and (max-width: 768px) {
    padding: 100px 50px;
  }
  @media all and (max-width: 480px) {
    padding: 100px 37px;
  }
  @media all and (max-width: 360px) {
    padding: 37px;
  }
`;
const Heading = styled.h3`
  text-align: center;
  font-family: "DM Sans_bold";
  font-size: 35px;
  @media all and (max-width: 380px) {
    font-size: 28px;
  }
`;
const SubHeader = styled.span`
  color: #62af84;
`;
const Line = styled.div`
  width: 107px;
  position: absolute;
  right: 640px;
  @media all and (max-width: 1380px) {
    right: 519px;
  }
  @media all and (max-width: 1280px) {
    right: 413px;
  }
  @media all and (max-width: 1080px) {
    right: 370px;
  }
  @media all and (max-width: 980px) {
    right: 265px;
  }
  @media all and (max-width: 768px) {
    right: 197px;
  }
  @media all and (max-width: 640px) {
    right: 120px;
  }
  @media all and (max-width: 480px) {
    right: 60px;
  }
`;
const LineImage = styled.img`
  display: block;
  width: 100%;
`;
const Description = styled.p`
  text-align: center;
  font-family: "DM Sans_regular";
  width: 800px;
  margin: 30px auto 60px;
  color: #747474;
  font-size: 17px;
  @media all and (max-width: 980px) {
    width: 517px;
  }
  @media all and (max-width: 640px) {
    width: 100%;
  }

  @media all and (max-width: 360px) {
    font-size: 15px;
  }
`;

const BottomContainer = styled.ul`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media all and (max-width: 1380px) {
    width: 100%;
  }
`;
const Gallery = styled.li`
  width: 32%;
  padding: 10px;
  margin-bottom: 20px;
  position: relative;
  background: #f9f9f9;
  border-radius: 6px;
  animation: 600ms ease-in-out 0ms 1 normal none running fade;
  @keyframes fade {
    0% {
      opacity: 0;
      transform: scale(0.7);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  &:hover {
    cursor: pointer;
    .title {
      display: none;
    }
    .hoverTitle {
      display: block;
      position: absolute;
      bottom: 37px;
      left: 140px;
      color: #fff;
      font-family: "DM Sans_regular";
      text-decoration: underline;
      font-size: 14px;
      animation: 600ms ease-in-out 0ms 1 normal none running fade;
      @media all and (max-width: 1380px) {
        left: 126px;
      }
      @media all and (max-width: 1080px) {
        left: 80px;
      }
      @media all and (max-width: 640px) {
        left: 150px;
      }
      @media all and (max-width: 480px) {
        left: 120px;
      }
      @media all and (max-width: 360px) {
        left: 88px;
      }
    }
  }
  @media all and (max-width: 980px) {
    width: 48%;
  }
  @media all and (max-width: 640px) {
    width: 100%;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;
const NumberContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 60px;
  padding: 10px 18px;
`;
const Number = styled.h6`
  color: #fff;
`;
const Title = styled.h5`
  position: absolute;
  bottom: 37px;
  left: 134px;
  color: #fff;
  font-family: "DM Sans_regular";
  animation: 600ms ease-in-out 0ms 1 normal none running fade;
  @media all and (max-width: 1380px) {
    left: 126px;
  }
  @media all and (max-width: 1280px) {
    left: 95px;
  }
  @media all and (max-width: 1080px) {
    left: 75px;
  }
  @media all and (max-width: 640px) {
    left: 139px;
  }
  @media all and (max-width: 480px) {
    left: 95px;
  }
  @media all and (max-width: 360px) {
    left: 70px;
  }
`;
const TitleHover = styled.h4`
  display: none;
`;
const AlbumContainer = styled.span`
  position: absolute;
  position: absolute;
  bottom: -1px;
  left: -23px;
  width: 20px;
  display: inline-block;
`;
const AlbumImage = styled.img`
  display: block;
  width: 100%;
`;
