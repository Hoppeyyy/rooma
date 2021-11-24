import Head from "next/head";
import styled from "styled-components";
import * as React from "react";
import { useContext } from "react";
import Button from "../../comps/Button";
import { useRouter } from "next/router";
import api from "../../api/axios";
import { globalContext } from "../../store/globalContext";
const MainCont = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
`;

const Cont = styled.div`
  width: 700px;
  height: 150px;
`;

const Title = styled.p`
  font-size: 29px;
  font-weight: 400;
`;
const Para = styled.p`
  font-size: 23px;
  font-weight: 400;
  color: #666666;
  margin-top: -12px;
`;

const Line = styled.hr`
  border-color: #cccccc;
  border-width: 0.5px;
  border-style: solid;
  width: 100%;
`;
const ButtonDiv = styled.div`
  margin-left: 65%;
  margin-top: 30px;
`;

const LogOut = ({ display = "none" }) => {
  const { currentUser, setCurrentUser } = useContext(globalContext);
  const onLogout = async () => {
    await api({
      method: "get",
      url: "auth/logout",
      withCredentials: true,
    });
    setCurrentUser(null);
    router.push("/");
  };
  const router = useRouter();
  return (
    <MainCont display={display}>
      <Line />

      <Cont>
        <Title>Log Out</Title>
        <Para>Log out from Rooma.</Para>
      </Cont>

      <ButtonDiv onClick={() => onLogout()}>
        <Button
          title="Log Out"
          width="183px"
          height="59px"
          borderRadius="4px"
          margin="2px"
          fontSize="19px"
          bgcolor="#E9614F"
        ></Button>
      </ButtonDiv>
    </MainCont>
  );
};

export default LogOut;
