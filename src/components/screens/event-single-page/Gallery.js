import React from "react";
//styles
import styled from "styled-components";

export default function Gallery() {
  const Photos = [
    {
      id: 1,
      photo: require("../../../assets/images/gallery-1.png"),
    },
    {
      id: 2,
      photo: require("../../../assets/images/gallery-2.png"),
    },
    {
      id: 3,
      photo: require("../../../assets/images/gallery-3.png"),
    },
    {
      id: 4,
      photo: require("../../../assets/images/gallery-4.png"),
    },
  ];

  const renderPhotos = Photos.map((image) => {
    return (
      <GalleryItems>
        <GalleryImage src={image.photo} />
      </GalleryItems>
    );
  });
  return (
    <MainContainer>
      <Container>
        <Heading>
          Moment <SubHeader>Gallery</SubHeader>
        </Heading>
        <Line>
          <LineImage
            src={require("../../../assets/images/green-line.png")}
            alt="Green Line"
          />
        </Line>
        <ImageContainer>
          <GalleryContainer>{renderPhotos}</GalleryContainer>
        </ImageContainer>
      </Container>
    </MainContainer>
  );
}
const MainContainer = styled.section`
  padding: 100px 50px;
  @media all and (max-width: 768px) {
    padding: 20px 20px;
  }
`;
const Container = styled.section`
  width: 85%;
  margin: 0 auto;
`;
const Heading = styled.h3`
  font-family: "DM Sans_bold";
  font-size: 35px;
  @media all and (max-width: 980px) {
    text-align: center;
  }
  @media all and (max-width: 480px) {
    font-size: 28px;
  }
`;
const SubHeader = styled.span`
  color: #62af84;
`;
const Line = styled.div`
  width: 119px;
  position: absolute;
  left: 21%;
  @media all and (max-width: 1280px) {
    left: 26%;
  }

  @media all and (max-width: 980px) {
    left: 52%;
  }
`;
const LineImage = styled.img`
  display: block;
  width: 100%;
`;
const ImageContainer = styled.div``;

const GalleryContainer = styled.ul`
  display: flex;
  overflow-x: scroll;
  margin-top: 50px;
  ::-webkit-scrollbar {
    display: none;
  }
  @media all and (max-width: 980px) {
    flex-wrap: wrap;
    overflow: unset;
  }
`;
const GalleryItems = styled.li`
  display: flex;
  max-width: 325px;
  min-width: 325px;
  margin-left: 20px;
  cursor: pointer;
  @media all and (max-width: 980px) {
    max-width: 325px;
    min-width: 75%;
    margin: 0 auto 20px;
  }
`;
const GalleryImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 4px;
`;
