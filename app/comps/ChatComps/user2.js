import React from "react";
import styled from "styled-components";
import Chat from "../../pages/chat";

const NavCont = styled.div`
  display: flex;
  align-items: center;
  margin: 60px;
`;

const ChatBubble = styled.div`
  display: flex;
  order: 0;
  align-self: center;
  flex-grow: 0;
  background: #7651e9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16), 0px -1px 1px rgba(0, 0, 0, 0.08);
  border-radius: 28.3636px 0px 28.3636px 28.3636px;
  color: #1a1a1a;
  padding: 15px;
  margin-top: 10px;
  font-size: 17px;
  color: white;
`;

const Time = styled.div`
  color: #9a9999;
  font-size: 14px;
  margin-top: 50px;
  margin-left: 15px;
`;

const User2 = ({ ymsg }) => {
  return (
    <NavCont>
      <ChatBubble className="opensans">{ymsg}</ChatBubble>
      <Time>{new Date().getHours() + ":" + new Date().getMinutes()}</Time>
      {/* <Time>6:00PM</Time> */}
    </NavCont>
  );
};

export default User2;
