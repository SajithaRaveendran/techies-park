import React from "react";
import { Link } from "react-router-dom";

//styling
import styled from "styled-components";

export default function EventList() {
  const Program = [
    {
      id: 1,
      heading: "Business meeting organised on the 28th August at Kannur",
      date: "Aug. 25, 2022",
      description:
        "As part of Talrop's Invest in Kerala campaign, a business meeting was organised on 28th August at Kannur.The event was held at Talrop's Techies Park, NAHER Arts and Science College, Kanhirode, Kannur and many potential Angel Investors took part in the meeting. Talked about the needs and opportunities of Angel Investors in a startup and the risks & benefits of Angel Investing were also discussed. A detailed overview of Talrop's mission and investment opportunities in Talrop's startups were discussed.",
      image: require("../../../assets/images/meeting_1.png"),
    },
    {
      id: 2,
      heading: "Business meeting organised on the 28th August at Kannur",
      date: "Aug. 25, 2022",
      description:
        " Talrop's Techies Park at the NAHER Arts & Science College under KMJ Management were visited by MLA Mr. Sunny Joseph, Peravoor Assembly Constituency in Kannur District.In order to strengthen Kerala's startup ecosystem, he also pledged his complete support for Talrop's initiatives in the Peravoor Assembly Constituency, including the implementation of Techies Park.",
      image: require("../../../assets/images/meeting_2.png"),
    },
    {
      id: 3,
      heading: "Business meeting organised on the 28th August at Kannur",
      date: "Aug. 25, 2022",
      description:
        "Cyber Month program at Talrop's new Techies Park at NAHER Arts and Science College campus of Kannur Assembly Constituency was inaugurated by the Inspector of Police, Mr Sibeesh VP of Chakkarakal station, Kannur.As part of Cyber Month, a lot of free programs suitable for every group of people are organised at Techies Park. Community development is an important aspect that Talrop focuses on, as part of developing a strong startup ecosystem in Kerala. Through Cyber Month programs, Talrop hopes to bring the people from every assembly constituency to Talrop's system and to grow as a community.",
      image: require("../../../assets/images/meeting_3.png"),
    },
    {
      id: 4,
      heading: "Business meeting organised on the 28th August at Kannur",
      date: "Aug. 25, 2022",
      description:
        "As part of Talrop's Invest in Kerala campaign, a business meeting was organised on 28th August at Kannur.The event was held at Talrop's Techies Park, NAHER Arts and Science College, Kanhirode, Kannur and many potential Angel Investors took part in the meeting. Talked about the needs and opportunities of Angel Investors in a startup and the risks & benefits of Angel Investing were also discussed. A detailed overview of Talrop's mission and investment opportunities in Talrop's startups were discussed.",
      image: require("../../../assets/images/meeting_1.png"),
    },
    {
      id: 5,
      heading: "Business meeting organised on the 28th August at Kannur",
      date: "Aug. 25, 2022",
      description:
        " Talrop's Techies Park at the NAHER Arts & Science College under KMJ Management were visited by MLA Mr. Sunny Joseph, Peravoor Assembly Constituency in Kannur District.In order to strengthen Kerala's startup ecosystem, he also pledged his complete support for Talrop's initiatives in the Peravoor Assembly Constituency, including the implementation of Techies Park.",
      image: require("../../../assets/images/meeting_2.png"),
    },
    {
      id: 6,
      heading: "Business meeting organised on the 28th August at Kannur",
      date: "Aug. 25, 2022",
      description:
        "Cyber Month program at Talrop's new Techies Park at NAHER Arts and Science College campus of Kannur Assembly Constituency was inaugurated by the Inspector of Police, Mr Sibeesh VP of Chakkarakal station, Kannur.As part of Cyber Month, a lot of free programs suitable for every group of people are organised at Techies Park. Community development is an important aspect that Talrop focuses on, as part of developing a strong startup ecosystem in Kerala. Through Cyber Month programs, Talrop hopes to bring the people from every assembly constituency to Talrop's system and to grow as a community.",
      image: require("../../../assets/images/meeting_3.png"),
    },
  ];
  
  const rederEvent = Program.map((events) => {
    return (
      <BottomEvent key={events.id}>
        <EventRight>
          <EventImage src={events.image}/>
        </EventRight>
        <EventLeft>
          <EventHeader>{events.heading}</EventHeader>
          <EventDate>{events.date}</EventDate>
          <EventDescription>{events.description.slice(0,300)}...</EventDescription>
          <Below>
            <Button>
              <ButtonContent to="/single-events">View More</ButtonContent>
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
      <SearchContainer>
        <SearchIcon>
          <Search
            src={require("../../../assets/images/search.png")}
            alt="Search"
          />
        </SearchIcon>
        <InputSearch type="text" placeholder="Search Events here" />
      </SearchContainer>
      <BottomContainer>{rederEvent}</BottomContainer>
      <Pagination>
        <PaginationItem>
          <PageCount className="one">1</PageCount>
        </PaginationItem>
        <PaginationItem>
          <PageCount>2</PageCount>
        </PaginationItem>
        <PaginationItem>
          <PageCount>
            <Arrow>
              <Image src={require("../../../assets/images/next-arrow.png")} alt="Next Arrow"/>
            </Arrow>
          </PageCount>
        </PaginationItem>
      </Pagination>
    </MainContainer>
  );
}
const MainContainer = styled.section`
  padding: 70px;
  @media all and (max-width: 980px) {
    padding: 70px 25px;
  }
  @media all and (max-width: 480px) {
    padding: 25px 15px;
  }
`;
const Heading = styled.h3`
  text-align: center;
  font-family: "DM Sans_bold";
  font-size: 35px;
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
  right: 44%;
  @media all and (max-width: 768px) {
    right: 35%;
  }
  @media all and (max-width: 640px) {
    right: 30%;
  }
`;
const LineImage = styled.img`
  display: block;
  width: 100%;
`;
const Description = styled.p`
  text-align: center;
  font-family: "DM Sans_regular";
  width: 60%;
  margin: 30px auto 40px;
  color: #747474;
  font-size: 17px;
  @media all and (max-width: 980px) {
    width: 85%;
  }
  @media all and (max-width: 640px) {
    width: 100%;
  }
  @media all and (max-width: 480px) {
    font-size: 16px;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  width: 35%;
  margin: 0 auto;
  align-items: center;
  height: 50px;
  border: 1px solid #d4d4d4;
  margin-bottom: 40px;
  border-radius: 8px;
  padding: 20px;
  color: #adadad;
  font-family: "DM Sans_bold";

  @media all and (max-width: 769px) {
    padding: 10px;
    width: 45%;
  }
  @media all and (max-width: 640px) {
    width: 60%;
  }
  @media all and (max-width: 480px) {
    width: 75%;
  }
`;

const SearchIcon = styled.div`
  width: 25px;
  margin-right: 20px;
`;

const Search = styled.img`
  width: 100%;
  display: block;
`;
const InputSearch = styled.input``;

const BottomContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
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
  @media all and (max-width: 1280px) {
    padding: 20px;
  }
  @media all and (max-width: 1080px) {
    width: 45%;
  }
  @media all and (max-width: 769px) {
    width: 100%;
    padding: 40px;
  }
  @media all and (max-width: 480px) {
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
  @media all and (max-width: 768px) {
    width: 25%;
  }
  @media all and (max-width: 640px) {
    width: 33%;
  }
  @media all and (max-width: 480px) {
    width: 42%;
  }
  @media all and (max-width: 360px) {
    width: 48%;
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
const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const PaginationItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 15px;
  border-radius: 50%;
  border: 1px solid #0fa76f;
  width: 50px;
  height: 50px;
  text-align: center;
  padding: 20px;
  &:first-child {
    background: #0fa76f;
    .one {
      color: #fff;
    }
  }
  &:last-child {
  }
  padding: 13px;
`;
const PageCount = styled.a`
  color: #0fa76f;
  font-family: gordita_medium;
  cursor: pointer;
`;
const Arrow = styled.span`
  width: 200px;
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
