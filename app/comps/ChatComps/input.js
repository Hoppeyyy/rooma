import React from "react";
import styled from "styled-components";
import Chat from "../../pages/chat";

const Cont = styled.div`
  display: flex;
  align-items: center;
`;
const ChatInput = styled.input`
  width: 100%;
  padding: 25px;
  border-radius: 20px;
  border: 1px solid #cacaca;
  margin: 0px 45px 35px 45px;
`;

const Input = ({}) => {
  return (
    <Cont>
      <ChatInput type="text" placeholder="Write a message..." />
    </Cont>
  );
};

export default Input;
