import Head from "next/head";
import styled from "styled-components";
import * as React from "react";
import { useContext, useEffect } from "react";

import Tutorial from "../comps/Tutorial";
import JoinFrom from "../comps/JoinForm";
import { globalContext } from "../store/context/globalContext";
import api from "../config/axios";

const MainCont = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const LeftCont = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #f6f6fe;
  justify-content: center;
`;

const LogoCont = styled.img`
  width: 100px;
  margin: 20px 20px 0px 30px;
  position: absolute;
  top: 10px;
`;

const RightCont = styled.div`
  display: flex;
  flex: 1;
`;

export default function Join({ user }) {
  const { currentUser, setCurrentUser } = useContext(globalContext);

  useEffect(() => {
    if (!currentUser) {
      setCurrentUser(user);
    }
  });

  return (
    <MainCont>
      <LeftCont>
        <LogoCont src="/Mainlogo.png" />
        <Tutorial
          chead="Join"
          bhead=" with your Roommates"
          para="Create a new room for your roommates or join automatically by getting a code"
          animation="/Join-animation.svg"
        />
      </LeftCont>
      <RightCont>
        <JoinFrom></JoinFrom>
      </RightCont>
    </MainCont>
  );
}

export async function getServerSideProps(ctx) {
  const response = await api({
    method: "get",
    url: "/auth/authenticate",
    headers: ctx.req.headers.cookie
      ? { cookie: ctx.req.headers.cookie }
      : undefined,
  });

  return {
    props: {
      user: response.data,
    },
  };
}
