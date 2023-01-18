import React, { useState } from "react";

//styling
import styled from "styled-components";

//media
import Bg from "../../../assets/images/talrop-techies.png";
import Logo from "../../../assets/images/talrop-logo.png";
import showPwdImg from "../../../assets/images/eye.svg";
import hidePwdImg from "../../../assets/images/hide.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [input, setInput] = useState("");
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [label, setLabel] = useState(false);
  const [labelview, setLabelview] = useState(false);
  const navigate = useNavigate();

  let handle_submit = (e) => {
    e.preventDefault();
    if (input && pwd === "") {
      navigate("/home")
    } else {
    navigate("/home");
    }
  };
  return (
    
    <LoginContainer>
      <LoginLeft bg={Bg}>
        <LeftContent>
          <BottomContent>
            <LeftHeadder>Techies Park</LeftHeadder>
            <LeftParagraph>
              Techies park is a technology and entrepreneurship hub, a project
              from Talrop. To build a strong startup ecosystem and accelerate
              startups, Talrop is establishing Techies Parks in all 140 Assembly
              Constituencies of Kerala.
            </LeftParagraph>
          </BottomContent>
        </LeftContent>
      </LoginLeft>

      <LoginRight>
        <Rightcontainer>
          <RightTop>
            <LogoContainer>
              <LogoImage src={Logo} />
            </LogoContainer>
            <TopHeader>TECHIES PARK</TopHeader>
          </RightTop>
          <RightSubHead>
            A Project from
            <SubPortion>Talrop</SubPortion>
          </RightSubHead>
          <RightParagraph>
            To aid the development of a strong startup ecosystem in our state,
            Talrop has designed Techies park
          </RightParagraph>
          <FormContainer>
            <Label className={label ? "active" : ""}>Username</Label>
            <InputContainer1
              onClick={() => setLabel(!label)}
              className={label ? "active" : ""}
            >
              <InputField
                placeholder="Username"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                required
              />
            </InputContainer1>
            <InputContainer2 className={labelview ? "active" : ""}>
              <Label className={labelview ? "active" : ""}>Password</Label>

              <ImageIconeye
                title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? hidePwdImg : showPwdImg}
                onClick={() => setIsRevealPwd((prevState) => !prevState)}
              />
              <InputField
                onClick={() => setLabelview(!labelview)}
                placeholder="Password"
                type={isRevealPwd ? "text" : "password"}
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                required
              />
            </InputContainer2>
            <CheckBoxButton>
              <CheckBox type="checkbox">
              </CheckBox>
              <Span>Keep me signed in</Span>
            </CheckBoxButton>
          </FormContainer>
          <LoginButton
            to={pwd && input === "" ? "" : "/home"}
            onClick={(e) => handle_submit(e)}
            type="submit"
          >
            <LoginContent>Login</LoginContent>
          </LoginButton>
        </Rightcontainer>
      </LoginRight>
    </LoginContainer>
  );
}
const LoginContainer = styled.section`
  display: flex;
  justify-content: space-between;
  @media all and (max-width:768px ){
   flex-wrap:wrap-reverse;
  }
`;
const LoginLeft = styled.div`
  background-image: url(${({ bg }) => bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;
  height: 100vh;
  @media all and (max-width:768px ){
    width: 100%;
  }
`;
const LeftContent = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: end;
  align-items: end;
`;
const BottomContent = styled.div`
  margin: 0px 0px 60px 40px;
`;

const LeftHeadder = styled.h5`
  color: rgb(255, 255, 255);
  text-transform: capitalize;
  font-size: 18px;
  font-family: gordita_medium;
`;
const LeftParagraph = styled.p`
  color: rgb(255, 255, 255);
  font-size: 14px;
  width: 72%;
  margin: 12px 0px 36px;
  font-family: gordita_regular;
  @media all and (max-width:360px){
    width: 96%;
  }
`;
const LoginRight = styled.div`
  width: 50%;
  @media all and (max-width:768px ){
    width: 100%;
  }
`;
const Rightcontainer = styled.div`
  width: 65%;
  margin: 60px auto;
  
`;
const RightTop = styled.div``;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoImage = styled.img``;
const TopHeader = styled.span`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  font-size: 24px;
  font-family: Gordita_bold;
  color: rgb(36, 125, 61);
`;
const RightSubHead = styled.h3`
  font-size: 14px;
  color: rgb(77, 77, 77);
  font-family: gordita_medium;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 5px;
`;
const SubPortion = styled.a`
  color: rgb(26, 152, 124);
  font-family: gordita_medium;
  margin-left: 2px;
  text-decoration: none;
`;
const RightParagraph = styled.p`
  margin: 15px 0px 45px;
  font-size: 18px;
  text-align: center;
  color: rgb(116, 116, 116);
  
`;
const FormContainer = styled.div`
  position: relative;
`;
const Label = styled.label`
  top: -20px;
  color: #4d4d4d;
  font-size: 12px;
  position: absolute;
  left: 7px;
  display: none;
  &.active {
    display: block;
    transition: width 2s ease-in-out;
    transition-delay: 0.1s;
  }
`;

const InputContainer1 = styled.div`
  height: 45px;
  width: 100%;
  background: #f4f5fc;
  border-radius: 5px;
  padding: 10px;

  &.active {
    border: 1px solid #247d3d;
    background: #fff;
  }
`;
const InputField = styled.input`
  width: 90%;
  color: #000;
`;
const InputContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  height: 45px;
  width: 100%;
  background: #f4f5fc;
  border-radius: 5px;
  padding: 10px;
  position: relative;
  transition-delay: 0.1s;
  &.active {
    border: 1px solid #247d3d;
    background: #fff;
    transition-delay: 0.1s;
  }
`;
const ImageIconeye = styled.img`
  width: 20px;
  position: absolute;
  right: 20px;
  top: 14.9px;
  cursor: pointer;
`;

const CheckBoxButton = styled.div`
  display: flex;
  margin-top: 70px;
`;
const CheckBox = styled.input`
  accent-color:#247d3d;
  width: 18px;
`;
const Span = styled.span`
  display: inline-block;
  font-size: 16px;
  font-family: "DM Sans_bold";
  margin-left: 12px;
  color: #212121;
`;
const LoginButton = styled(Link)`
  background: #247d3d;
  padding: 15px 22px;
  width: 100%;
  text-align: center;
  border: none;
  border-radius: 5px;
  margin-top: 60px;
  cursor: pointer;
  display: block;
`;
const LoginContent = styled.a`
  color: #fff;
  font-family: "DM Sans_bold";
  font-size: 16px;
`;
