import React from "react";
import styled from "styled-components";
import Chat from "../../pages/chat";
import Input from "./input";
const NavCont = styled.div`
  display: flex;
  align-items: center;
  margin: 60px;
`;
const ProfileCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Avatar = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 30px;
  margin-top: 20px;
  border-radius: 50%;
`;
const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
`;
const ChatBubble = styled.div`
  display: flex;
  order: 0;
  align-self: center;
  flex-grow: 0;
  background: #f2f2f2;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16), 0px -1px 1px rgba(0, 0, 0, 0.08);
  border-radius: 0px 24px 24px 24px;
  color: #1a1a1a;
  padding: 15px;
  margin-top: 10px;
  font-size: 17px;
`;
const Name = styled.div`
  font-size: 21px;
  font-weight: 500;
  color: #181135;
`;

const Time = styled.div`
  color: #9a9999;
  font-size: 14px;
  margin-top: 50px;
  margin-left: 15px;
`;

const User1 = ({ chatter, user }) => {
  console.log("zzzzzzzzzzzzzzzzzzzzzzz");
  console.log(chatter);
  return (
    <NavCont>
      <ProfileCont>
        <Avatar src={chatter.pfp ? chatter.pfp : "/Avatar2.png"} />
      </ProfileCont>

      <InfoCont>
        <Name>{chatter.name}</Name>
        <ChatBubble className="opensans">Hello {user.name}</ChatBubble>
      </InfoCont>

      <Time>6:00PM</Time>
    </NavCont>
  );
};

export default User1;
