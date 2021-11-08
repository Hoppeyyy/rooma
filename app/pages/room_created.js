import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { globalContext } from "../store/context/globalContext";
import { useContext } from "react";
import api from "../config/axios";
import { useRouter } from "next/router";

const Heading = styled.p`
  font-size: 23px;
  font-weight: 700;
  margin-bottom: -2px;
`;

const Bot = styled.div`
  marign-left: -200px;
  width: 178px;
  height: 48px;
`;

const Para = styled.p`
  font-size: 17px;
`;

const Textbox = styled.input`
  width: 178px;
  height: 48px;
  border-radius: 4px;
  margin: 2px;
  background-color: #f2f2f2;
  border-color: transparent;
`;

function room_created() {
  const { currentUser, setCurrentUser } = useContext(globalContext);
  const [Input, setInput] = useState("");
  const [ErrMsg, setErrMsg] = useState("");

  const router = useRouter();

  useEffect(() => {
    console.log(Input);
  });
  const enter = async () => {
    try {
      await api({
        method: "patch",
        url: "/room/join",
        data: {
          invcode: Input,
        },
        withCredentials: true,
      });

      router.push("/");
    } catch (error) {
      console.log("666666666666666666");
      console.log(error);
      setErrMsg("Wrong code entered!");

      //   throw error;
    }
  };
  return (
    <div>
      <Heading className="opensans">Room created, {currentUser.name}</Heading>
      <Para className="opensans">
        Input your this key to join : {currentUser.roomId}
      </Para>
      <Para className="opensans">
        Share this key with others to invite them to join as well.
      </Para>
      {ErrMsg && <p>{ErrMsg}</p>}
      <Bot>
        <Textbox
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></Textbox>
      </Bot>
      <button onClick={() => enter()}>Submit</button>
    </div>
  );
}

export default room_created;
