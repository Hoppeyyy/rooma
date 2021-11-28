import { useState, useContext, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import * as React from "react";
import Button from "../../comps/Button";
import { useRouter } from "next/router";
import { joinRoom } from "../../api/room.api";
import { globalContext } from "../../store/globalContext";
import ErrorMsg from "../../UI/ErrorMsg";

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  // margin: 20px;
  margin-top: 20px;
  width: 100%;
`;
const Cont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px;
  margin-top: 10px;
  max-width: 550px;
  margin-bottom: 50px;
`;
const Heading = styled.p`
  font-size: 23px;
  font-weight: 700;
  margin-bottom: -2px;
`;
const Para = styled.p`
  font-size: 17px;
`;

const Bot = styled.div`
  marign-left: -200px;
  width: 178px;
  height: 48px;
`;

const Textbox = styled.input`
  width: 178px;
  height: 48px;
  border-radius: 4px;
  margin: 2px;
  background-color: #f2f2f2;
  border-color: transparent;
`;

const Line = styled.hr`
  border-color: #cccccc;
  border-width: 0.5px;
  border-style: solid;
  width: 100%;
`;

const JoinFrom = ({ routeToColor = "/pick_a_color" }) => {
  const router = useRouter();
  const [InvCode, setInvCode] = useState("");

  const {
    currentUser,
    setCurrentUser,
    currentError,
    setCurrentError,
    setCurrentMsg,
    currentMsg,
  } = useContext(globalContext);

  useEffect(() => {
    return () => {
      setCurrentError("");
    };
  }, []);

  const onJoinRoom = () => {
    const room_obj = {
      invcode: InvCode,
    };
    // console.log("ddddddddddddddddddddddd");
    // console.log(InvCode);
    // setCurrentError("InvCode");
    joinRoom(room_obj, (err) => {
      if (err) {
        console.log("2222222222222222");
        console.log(err);
        console.log(setCurrentError);
        setCurrentError("Join room failed, please verify your invite code.");
      } else {
        // Need to nest a join room api before going to "/" here
        // router.push(routeToLogin);
        console.log("success");
        router.push(routeToColor);
      }
    });
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setInvCode(e.target.value);
  };

  return (
    <MainCont>
      <Cont>
        <Heading className="opensans">Let's Get Started</Heading>
        <Para className="opensans">
          Get started by creating a new team and invite your roommates.
        </Para>
        <Bot>
          <Button
            onClick={() => router.push(routeToColor)}
            title="Get Started"
            width="178px"
            height="48px"
            borderRadius="4px"
            margin="2px"
            fontSize="17px"
          ></Button>
        </Bot>
      </Cont>
      <Line />
      <Cont>
        {currentError && <ErrorMsg errmsg={currentError}></ErrorMsg>}
        <Heading className="opensans">Join with a Code</Heading>
        <Para className="opensans">
          Join by getting an invite code from your room members
        </Para>
        <Bot style={{ display: "flex" }}>
          <Textbox onChange={onChange}></Textbox>
          <Button
            onClick={() => onJoinRoom()}
            title="Join"
            width="178px"
            height="48px"
            borderRadius="4px"
            margin="2px"
            fontSize="17px"
          ></Button>
        </Bot>
      </Cont>
      <Line />
      <Cont>
        <Heading className="opensans">Join with a Link</Heading>
        <Para className="opensans">
          Join by getting an invite link from your room members. Click on the
          link and join automatically.
        </Para>
      </Cont>
    </MainCont>
  );
};

export default JoinFrom;
