import React, { useState } from "react";
//styles
import styled from "styled-components";
// packages
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const SliderGallery = ({open,setOpen}) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [photo, setPhoto] = useState([
    {
      id: 1,
      image: require("../../assets/images/work1.png"),
    },
    {
      id: 2,
      image: require("../../assets/images/work2.png"),
    },
    {
      id: 3,
      image: require("../../assets/images/work3.png"),
    },
    {
      id: 4,
      image: require("../../assets/images/work4.png"),
    },
  ]);

  const handleChange = (value) => {
    setSliderValue(value);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: sliderValue,
    beforeChange: (current, next) => setSliderValue(next),
  };

  return (
    <>
      <MainContainer>
        <Header>
          <HeaderLeft>
            <LogoContainer to="/home">
              <Image
                src={require("../../assets/images/techies-logo.jpg")}
                alt="Logo"
              />
            </LogoContainer>
          </HeaderLeft>
          <HeaderRight>
            <PhotoScroll>
              {photo.map((pic) => {
                return (
                  <ImgContainer>
                    <Image src={pic.image}></Image>
                  </ImgContainer>
                );
              })}
            </PhotoScroll>
            <CloseButtonContainer onClick={()=>setOpen(false)}>
              <CloseButton
                src={require("../../assets/images/slider-close.svg").default}
              ></CloseButton>
            </CloseButtonContainer>
          </HeaderRight>
        </Header>
        <Hr />
        <Slider {...settings}>
          {photo.map((pic) => {
            return (
              <ImageContainer key={pic.id}>
                <Image src={pic.image}></Image>
              </ImageContainer>
            );
          })}
        </Slider>
      </MainContainer>
    </>
  );
};

export default SliderGallery;

const MainContainer = styled.section`
  height: 100vh;
`;
const Header = styled.header`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
`;
const HeaderLeft = styled.h1`
  width: 60%;
`;
const LogoContainer = styled(Link)`
  width: 30%;
  display: block;
  @media all and (max-width: 1080px) {
   width: 37%;
  }
  @media all and (max-width: 768px) {
   width: 55%;
  }
  @media all and (max-width: 640px) {
   width: 70%;
  }
  @media all and (max-width: 480px) {
   width: 89%;
  }
`;
const HeaderRight = styled.div`
  width: 25%;
  display: flex;
`;
const PhotoScroll = styled.ul`
  display: flex;
  overflow-x: scroll;
  width: 60%;
  @media all and (max-width: 768px) {
   display: none;
  }
`;
const ImgContainer = styled.li`
  width: 50%;
  max-width: 70px;
  min-width: 70px;
  margin-left: 5px;
  cursor: pointer;
`;
const CloseButtonContainer = styled.div`
  margin-left: 15px;
  cursor: pointer;
  @media all and (max-width: 768px) {
   margin-left: 50%;
  }
  @media all and (max-width: 640px) {
   width: 30%;
  }
  @media all and (max-width: 480px) {
   width: 50%;
  }
`;
const CloseButton = styled.img`
  display: block;
  width: 100%;
`;
const Hr = styled.hr`
  border-bottom: 1px solid #6666;
`;
const ImageContainer = styled.div`
  width: 50% !important;
  margin: 20px auto;
  list-style: none;
  display: block !important;
  @media all and (max-width: 980px) {
    width:79% !important;
  }
  @media all and (max-width: 768px) {
    margin: 80px auto 20px;
  }
  @media all and (max-width: 640px) {
    width: 85% !important;
  }
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
