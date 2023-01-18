import React from "react";

//styled
import styled from "styled-components";

export default function Models() {
  const Revenue = [
    {
      id: 1,
      image: require("../../../assets/images/sensex.png"),
      icon: require("../../../assets/images/sensex-white.png"),
      title: "Course Fee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec id lectus malesuada massa facilisi tempor. Dui est et eget in lorem turpis eros dignissim. ",
    },
    {
      id: 2,
      image: require("../../../assets/images/startup.png"),
      icon: require("../../../assets/images/startup-white.png"),
      title: "Startup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec id lectus malesuada massa facilisi tempor. Dui est et eget in lorem turpis eros dignissim. ",
    },
    {
      id: 3,
      image: require("../../../assets/images/work-space.png"),
      icon: require("../../../assets/images/work-space-white.png"),
      title: "Co-Working Space",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec id lectus malesuada massa facilisi tempor. Dui est et eget in lorem turpis eros dignissim. ",
    },
    {
      id: 4,
      image: require("../../../assets/images/revenue.png"),
      icon: require("../../../assets/images/revenue-white.png"),
      title: "Startup Revenue",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec id lectus malesuada massa facilisi tempor. Dui est et eget in lorem turpis eros dignissim. ",
    },
  ];

  const renderModel = Revenue.map((models) => {
    return (
      <Container className="bg" key={models.id}>
        <ImageContainer className="green">
          <Image src={models.image} />
        </ImageContainer>
        <ImageContainerWhite className="whiteImage">
          <Icon src={models.icon} />
        </ImageContainerWhite>
        <HeadMain className="Head_title">{models.title}</HeadMain>
        <Paragraph className="paragraph">{models.description}</Paragraph>
      </Container>
    );
  });

  return (
    <MainContainer id="revenue">
      <Heading>
        Revenue <SubHeader>Models</SubHeader>
      </Heading>
      <Line>
        <LineImage
          src={require("../../../assets/images/green-line.png")}
          alt="Green Line"
        />
      </Line>
      <Description>
        To build a strong startup ecosystem and accelerate startups, Talrop is
        establishing Techies Parks in all 140 Assembly constituencies of Kerala.
        7 of them are already established and remaining 133 will be done by the
        end of 2024.
      </Description>

      <Bottom>{renderModel}</Bottom>
    </MainContainer>
  );
}
const MainContainer = styled.section`
  padding: 100px;
  @media all and (max-width: 980px) {
    padding: 50px;
  }
  @media all and (max-width: 480px) {
    padding: 50px 10px;
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
  width: 119px;
  position: absolute;
  right: 665px;
  @media all and (max-width: 1380px) {
    right: 503px;
  }
  @media all and (max-width: 1280px) {
    right: 403px;
  }
  @media all and (max-width: 1080px) {
    right: 355px;
  }
  @media all and (max-width: 980px) {
    right: 250px;
  }
  @media all and (max-width: 768px) {
    right: 183px;
  }
  @media all and (max-width: 640px) {
    right: 104px;
  }
  @media all and (max-width: 480px) {
    right: 45px;
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
const Bottom = styled.ul`
  display: flex;
  width: 90%;
  margin: 0 auto;
  height: 260px;
  @media all and (max-width: 1380px) {
    width: 100%;
    height: 100%;
  }
  @media all and (max-width: 1280px) {
    flex-wrap: wrap;
  }
`;
const Container = styled.li`
  width: 24%;
  border: 1px solid #eeeeee;
  padding: 20px;
  border-radius: 6px;
  margin-right: 20px;
  transform: scale(0.9);
  transition: all 0.2s ease-in-out 0s;
  &:hover {
    transform: scale(1);
    background: linear-gradient(90deg, #0fa76f 2%, #21c487 97.59%);
    .Head_title {
      color: white;
    }
    .green {
      display: none;
    }
    .whiteImage {
      display: block;
    }
    .paragraph {
      color: white;
    }
  }
  @media all and (max-width: 1280px) {
    width: 30%;
  }
  @media all and (max-width: 980px) {
    width: 47%;
    &:nth-child(even) {
      margin-right: 0;
    }
  }
  @media all and (max-width: 480px) {
    width: 98%;
    &:nth-child(odd) {
      margin-right: 0;
    }
  }
`;
const ImageContainer = styled.div`
  width: 30px;
`;
const ImageContainerWhite = styled.div`
  width: 30px;
  display: none;
`;
const Image = styled.img`
  width: 100%;
`;
const Icon = styled.img``;
const HeadMain = styled.h3`
  font-family: "DM Sans_bold";
  font-size: 16px;
  margin: 10px 0 15px;
  color: #000;
`;
const Paragraph = styled.p`
  color: #747474;
  font-family: "DM Sans_regular";
  font-size: 14px;
  &:hover {
    cursor: text;
  }
`;
