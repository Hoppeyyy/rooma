import React from "react";
import styled from "styled-components";

const NavCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  // width:80%;
  // height:1000%;
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.bgcolor};
  margin: 7px;
  border-radius: 16px;
  &:hover {
    cursor: pointer;
  }
`;
const ContentCont = styled.div`
  display: flex;
  flex-direction: row;
`;
const Icon = styled.img`
  width: 48px;
  height: 48px;
  margin-left: 60px;
  justify-content: center;
  align-items: center;
`;
const ContDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
`;
const Heading = styled.h4`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #1e1e1e;
`;
const Ps = styled.div`
  color: #737373;
`;
const SettingNavCont = ({
  bgcolor = "#FFFFFF",
  heading = "this is heading",
  ps = "this is paragraph",
  src = "http://placekitten.com/48/48",

  onClick = () => {},
}) => {
  return (
    <NavCont bgcolor={bgcolor} onClick={onClick}>
      <ContentCont>
        <Icon src={src}></Icon>
      </ContentCont>
      <ContDetail>
        <Heading className="opensans">{heading}</Heading>
        <Ps className="opensans">{ps}</Ps>
      </ContDetail>
    </NavCont>
  );
};

export default SettingNavCont;
