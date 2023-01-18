import React from "react";

//styling
import styled from "styled-components";

export default function SimilarEvents() {
  const Program = [
    {
      id: 1,
      heading: "Business meeting organised on the 28th August at Kannur",
      date: "Aug. 25, 2022",
      description:
        "As part of Talrop's Invest in Kerala campaign, a business meeting was organised on 28th August at Kannur.The event was held at Talrop's Techies Park, NAHER Arts and Science College, Kanhirode, Kannur and many potential Angel Investors took part in the meeting. Talked about the needs and opportunities of Angel Investors in a startup and the risks & benefits ",
      image: require("../../../assets/images/meeting_1.png"),
    },
    {
      id: 2,
      heading: "Business meeting organised on the 28th August at Kannur",
      date: "Aug. 25, 2022",
      description:
        "Talrop's Techies Park at the NAHER Arts & Science College under KMJ Management were visited by MLA Mr. Sunny Joseph, Peravoor Assembly Constituency in Kannur District.In order to strengthen Kerala's startup ecosystem, he also pledged his complete support for Talrop's initiatives in the Peravoor Assembly Constituency, including the implementation",
      image: require("../../../assets/images/meeting_2.png"),
    },
    {
      id: 3,
      heading: "Business meeting organised on the 28th August at Kannur",
      date: "Aug. 25, 2022",
      description:
        "Cyber Month program at Talrop's new Techies Park at NAHER Arts and Science College campus of Kannur Assembly Constituency was inaugurated by the Inspector of Police, Mr Sibeesh VP of Chakkarakal station, Kannur.As part of Cyber Month, a lot of free programs suitable for every group of people are organised at Techies Park. Community",
      image: require("../../../assets/images/meeting_3.png"),
    },
  ];

  const renderEvent = Program.map((events) => {
    return (
      <BottomEvent key={events.id}>
        <EventRight>
          <EventImage src={events.image} alt="meeting_1" />
        </EventRight>
        <EventLeft>
          <EventHeader>{events.heading}</EventHeader>
          <EventDate>{events.date}</EventDate>
          <EventDescription>{events.description.slice(0,300)}...</EventDescription>
          <Below>
            <Button>
              <ButtonContent>View More</ButtonContent>
              <ArrowIcon>
                <ArrowImage
                  src={require("../../../assets/images/arrow.png")}
                  alt="Arrow Icon"
                />
              </ArrowIcon>
            </Button>
          </Below>
        </EventLeft>
      </BottomEvent>
    );
  });

  return (
    <MainContainer id="events">
      <Container>
        <Heading>
          Similar <SubHeader>Events</SubHeader>
        </Heading>
        <Line>
          <LineImage
            src={require("../../../assets/images/green-line.png")}
            alt="Green Line"
          />
        </Line>
        <BottomContainer>{renderEvent}</BottomContainer>
      </Container>
    </MainContainer>
  );
}
const MainContainer = styled.section`
  padding: 50px;
  background: rgb(252, 251, 248);

  @media all and (max-width: 980px) {
    padding: 25px;
  }
  @media all and (max-width: 480px) {
    padding: 25px 10px;
  }
`;

const Container = styled.section`
  width: 85%;
  margin: 0 auto;
  @media all and(max-width: 480px){
    width: 90%;
  }
`;
const Heading = styled.h3`
  font-family: "DM Sans_bold";
  font-size: 35px;
  @media all and (max-width: 981px) {
    text-align: center;
  }
  @media all and (max-width: 481px) {
    font-size: 28px;
  }
`;
const SubHeader = styled.span`
  color: #62af84;
`;
const Line = styled.div`
  width: 119px;
  position: absolute;
  right: 74%;
  @media all and (max-width: 1380px) {
    right: 70%;
  }
  @media all and (max-width: 1280px) {
    right: 66%;
  }
  @media all and (max-width: 1080px) {
    right: 64%;
  }
  @media all and (max-width: 980px) {
    right: 34%;
  }
  @media all and (max-width: 769px) {
    right: 30%;
  }
  @media all and (max-width: 640px) {
    right: 24%;
  }
  
`;
const LineImage = styled.img`
  display: block;
  width: 100%;
`;

const BottomContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;
const BottomEvent = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32%;
  background: #f7fff9;
  border: 1px solid rgb(184, 242, 202);
  border-radius: 12px;
  margin: 0 auto 30px;
  padding: 50px;
  @media all and (max-width: 1380px) {
    padding: 20px;
  }
  @media all and (max-width: 1280px) {
    padding: 15px;
  }
  @media all and (max-width: 1080px) {
    width: 45%;
  }
  @media all and (max-width: 1080px) {
    &:last-child {
      margin: 0 20px;
    }
  }
  @media all and (max-width: 980px) {
   
    &:last-child {
      margin: 0 15px ;
    }
  }
  @media all and (max-width: 769px) {
    width: 100%;
    padding: 40px;
    &:last-child {
      margin: 0 ;
    }
  }
  @media all and (max-width: 481px) {
    padding: 25px;
  }
`;
const EventLeft = styled.div``;
const EventHeader = styled.h3`
  font-family: "DM Sans_bold";
  font-size: 22px;
  color: #0a0a0a;
`;
const EventDate = styled.h6`
  color: #adadad;
  font-family: "DM Sans_medium";
  font-size: 14px;
  margin: 20px 0;
  border: 1px solid rgb(15, 167, 111);
  color: rgb(15, 167, 111);
  width: 45%;
  padding: 10px;
  border-radius: 8px;
  @media all and (max-width: 1380px) {
    width: 55%;
  }
  @media all and (max-width: 769px) {
    width: 35%;
  }
  @media all and (max-width: 640px) {
    width: 42%;
  }
  @media all and (max-width: 480px) {
    width: 53%;
  }
  @media all and (max-width: 360px) {
    width: 59%;
  }
`;
const EventDescription = styled.p`
  font-family: "DM Sans_regular";
  color: #747474;
  font-size: 16px;
  width: 97%;
  margin-bottom: 50px;
`;
const Button = styled.button`
  background: #0fa76f;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 6px;
  width: 150px;
  height: 50px;
  cursor: pointer;
`;
const ButtonContent = styled.a`
  color: #fff;
  margin-right: 10px;
  font-family: "DM Sans_medium";
  font-size: 16px;
`;
const ArrowIcon = styled.div`
  width: 30px;
`;
const ArrowImage = styled.img`
  display: block;
  width: 100%;
`;
const EventRight = styled.div``;
const EventImage = styled.img`
  display: block;
  width: 100%;
`;

const Below = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
