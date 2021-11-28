import React, { useState } from "react";
import styled from "styled-components";
import User1 from "./user1";
import User2 from "./user2";
import Input from "./input";
const RightCont = styled.div`
  display: flex;
  flex: 3;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;
const ChatCont1 = styled.div`
  display: flex;
  width: 100%;
`;
const ChatCont2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
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

function ChatBox({ user, RightChatter, YourMsgs, onMsgSubmit }) {
  const [Message, setMessage] = useState("");
  const handleMsgSubmit = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setMessage("");

      onMsgSubmit(e, Message);
    }
  };

  const updateMsg = (e) => {
    setMessage(e.target.value);
  };

  const addYourMyMsgs = () => {
    const msg_list = YourMsgs.map((ym) => {
      return (
        <ChatCont2>
          <User2 ymsg={ym}></User2>
        </ChatCont2>
      );
    });

    return msg_list;
  };

  const getOthersMessage = () => {
    console.log(RightChatter.length);
    let msg_list = [];
    msg_list = RightChatter.map((chatter) => {
      console.log("????????");
      console.log(chatter);
      return (
        <ChatCont1>
          <User1 chatter={chatter} user={user}></User1>
        </ChatCont1>
      );
    });

    return msg_list;
  };

  return (
    <RightCont>
      {getOthersMessage()}
      {/* <ChatCont1>
        <User1></User1>
      </ChatCont1> */}
      {addYourMyMsgs()}
      {/* <ChatCont2>
        <User2></User2>
      </ChatCont2> */}
      <Cont>
        <ChatInput
          value={Message}
          type="text"
          onKeyUp={(e) => handleMsgSubmit(e)}
          placeholder="Write a message..."
          onChange={(e) => {
            updateMsg(e);
          }}
        />
      </Cont>
      {/* {getChatInputs()} */}
      {/* <Input onkeyup={(e) => onMsgSubmit(e)}></Input> */}
    </RightCont>
  );
}

export default ChatBox;
