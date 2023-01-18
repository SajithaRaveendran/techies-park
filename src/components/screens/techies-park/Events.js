import React from "react";

//styled
import styled from "styled-components";

//packages
import { Link } from "react-router-dom";

export default function Events() {
 
  const Program = [
    {
      id: 1,
      heading: "Business meeting organised on the 28th August at Kannur",
      date: "Aug. 25, 2022",
      description:
        "As part of Talrop's Invest in Kerala campaign, a business meeting was organised on 28th August at Kannur.The event was held at Talrop's Techies Park, NAHER Arts and Science College, Kanhirode, Kannur and many potential Angel Investors took part in the meeting. Talked about the needs and opportunities of Angel Investors in a startup and the risks & benefits of Angel Investing were also discussed. A detailed overview of Talrop's mission and investment opportunities in Talrop's startups were discussed.",
      icon: require("../../../assets/images/01.png"),
      image: require("../../../assets/images/meeting_1.png"),
    },
    {
      id: 2,
      heading: "Business meeting organised on the 28th August at Kannur",
      date: "Aug. 25, 2022",
      description:
        "Talrop's Techies Park at the NAHER Arts & Science College under KMJ Management were visited by MLA Mr. Sunny Joseph, Peravoor Assembly Constituency in Kannur District.In order to strengthen Kerala's startup ecosystem, he also pledged his complete support for Talrop's initiatives in the Peravoor Assembly Constituency, including the implementation of Techies Park.",
      icon: require("../../../assets/images/02.png"),
      image: require("../../../assets/images/meeting_2.png"),
    },
    {
      id: 3,
      heading: "Business meeting organised on the 28th August at Kannur",
      date: "Aug. 25, 2022",
      description:
        "Cyber Month program at Talrop's new Techies Park at NAHER Arts and Science College campus of Kannur Assembly Constituency was inaugurated by the Inspector of Police, Mr Sibeesh VP of Chakkarakal station, Kannur.As part of Cyber Month, a lot of free programs suitable for every group of people are organised at Techies Park. Community development is an important aspect that Talrop focuses on, as part of developing a strong startup ecosystem in Kerala. Through Cyber Month programs, Talrop hopes to bring the people from every assembly constituency to Talrop's system and to grow as a community.",
      icon: require("../../../assets/images/03.png"),
      image: require("../../../assets/images/meeting_3.png"),
    },
  ];
  const rederEvent = Program.map((events) => {
    return (
      <BottomEvent key={events.id} to="/single-events">
        <EventLeft>
          <EventHeader>{events.heading}</EventHeader>
          <EventDate>{events.date}</EventDate>
          <EventDescription>{events.description.slice(0,300)}...</EventDescription>
          <Below>
            <Button  to="/single-events">
              <ButtonContent to="/single-events">View More</ButtonContent>
              <ArrowIcon>
                <ArrowImage
                  src={require("../../../assets/images/arrow.png")}
                  alt="Arrow Icon"
                />
              </ArrowIcon>
            </Button>
            <OneContainer>
              <OneImage src={events.icon} />
            </OneContainer>
          </Below>
        </EventLeft>
        <EventRight>
          <EventImage src={events.image} alt="meeting_1" />
        </EventRight>
      </BottomEvent>
    );
  });

  return (
    <MainContainer id="events">
      <Heading>
        Our <SubHeader>Events</SubHeader>
      </Heading>
      <Line>
        <LineImage
          src={require("../../../assets/images/green-line.png")}
          alt="Green Line"
        />
      </Line>
      <Description>
        Several events are being organised by Talrop and its startups in Techies
        Parks to support entrepreneurship and technological education. Techies
        Parks is a venue that is open to both governmental and non-governmental
        organisations.
      </Description>

      <BottomContainer>{rederEvent}</BottomContainer>
      <EventButton to="/events">
        <ButtonContent1 to="/events">View More Events</ButtonContent1>
        <ArrowContainer>
          <Image
            src={require("../../../assets/images/arrow.png")}
            alt="Arrow Icon"
          />
        </ArrowContainer>
      </EventButton>
    </MainContainer>
  );
}
const MainContainer = styled.section`
  padding: 100px;
  background: #fcfbf8;
  @media all and (max-width: 768px) {
    padding: 100px 50px;
  }
  @media all and (max-width: 480px) {
    padding: 100px 20px;
  }
  @media all and (max-width: 360px) {
    padding: 37px 20px;
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
    right: 544px;
  }
  @media all and (max-width: 1280px) {
    right: 441px;
  }
  @media all and (max-width: 1080px) {
    right: 395px;
  }
  @media all and (max-width: 980px) {
    right: 287px;
  }
  @media all and (max-width: 768px) {
    right: 223px;
  }
  @media all and (max-width: 640px) {
    right: 144px;
  }
  @media all and (max-width: 480px) {
    right: 85px;
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
const BottomContainer = styled.ul``;
const BottomEvent = styled(Link)`
  display: flex;
  width: 80%;
  background: #fff6f9;
  border: 1px solid rgb(255, 234, 241);
  border-radius: 12px;
  margin: 0 auto;
  padding: 50px;
  margin-bottom: 20px;
  &:nth-child(2n) {
    background: #f1fcff;
    border: 1px solid rgb(200, 239, 239);
    flex-direction: row-reverse;
    justify-content: space-between;
    @media all and (max-width: 980px) {
      flex-direction: column-reverse;
    }
  }
  @media all and (max-width: 1380px) {
    width: 100%;
  }
  @media all and (max-width: 980px) {
    flex-direction: column-reverse;
  }
  @media all and (max-width: 640px) {
    padding: 30px;
  }
`;
const EventLeft = styled.div`
  width: 55%;
  @media all and (max-width: 980px) {
    width: 100%;
  }
`;
const EventHeader = styled.h3`
  font-family: "DM Sans_bold";
  font-size: 22px;
  color: #0a0a0a;
  @media all and (max-width: 1380px) {
    font-size: 24px;
  }
  @media all and (max-width: 1380px) {
    margin-top: 20px;
  }
`;
const EventDate = styled.h6`
  color: #adadad;
  font-family: "DM Sans_medium";
  font-size: 14px;
  margin: 20px 0;
`;
const EventDescription = styled.p`
  font-family: "DM Sans_regular";
  color: #747474;
  font-size: 14px;
  width: 97%;
  margin-bottom: 50px;
`;
const Button = styled(Link)`
  background: #0fa76f;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 6px;
  width: 150px;
  height: 50px;
  cursor: pointer;
`;
const ButtonContent = styled(Link)`
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
const EventRight = styled.div`
  width: 42%;
  display: inline-block;
  border-radius: 6px;
  @media all and (max-width: 980px) {
    width: 75%;
    margin: 0 auto;
    height: 220px;
  }
  @media all and (max-width: 640px) {
    width: 90%;
  }
  @media all and (max-width: 480px) {
    width: 100%;
  }
`;
const EventImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
const OneContainer = styled.div`
  width: 126px;
  margin-right: 50px;
  @media all and (max-width: 1380px) {
    width: 80px;
  }
  @media all and (max-width: 1380px) {
    margin-right: 0;
  }
  @media all and (max-width: 480px) {
    width: 60px;
  }
  @media all and (max-width: 380px) {
    display: none;
  }
`;
const OneImage = styled.img`
  display: block;
  width: 100%;
`;
const Below = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const EventButton = styled(Link)`
  background: #0fa76f;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 6px;
  width: 200px;
  height: 50px;
  cursor: pointer;
  margin: 50px auto 0;
  @media all and (max-width: 768px) {
    background:none;
    padding: 0;
  }
`;
const ArrowContainer = styled.div``;
const Image = styled.img``;

const ButtonContent1 = styled(Link)`
  color: #fff;
  margin-right: 10px;
  font-family: "DM Sans_medium";
  font-size: 16px;
  @media all and (max-width: 768px) {
  color: #0fa76f;
  text-decoration: underline;
  font-size: 18px;
}
`;