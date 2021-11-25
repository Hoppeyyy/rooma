import Head from "next/head";
import styled from "styled-components";
import * as React from "react";
import NavBar3 from "../comps/NavBar3";
import CalendarComp from "../comps/CalendarComp";
import Event from "../comps/Event";
import { useState, useContext, useEffect } from "react";
import Greeting from "../comps/Greeting";
import AddMembers from "../comps/AddMembers";
import Tab from "../comps/TaskComp/tabs";
import TaskComp from "../comps/TaskComp/task";
import Assigned from "../comps/TaskComp/assigned";
import CalEventMerged from "../comps/CalEventMerged";
import { globalContext } from "../store/globalContext";
import LoadingSpinner from "../UI/LoadingSpinner";

const MainCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;
const LeftCont = styled.div`
  display: flex;
  flex-grow: 1;
  position: fixed;
`;

const MiddleCont = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 9;
  margin-left: 300px;
`;

const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0.5;
`;

const AddTaskCont = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Add_task() {
  const [buttonstate1, setButtonState1] = useState(0);
  const [buttonstate5, setButtonState5] = useState(0);
  const {
    setCurrentUser,
    currentUser,
    currentExpandNav,
    setCurrentExpandNav,
    setLoadingSpinner,
    loadingSpinner,
  } = useContext(globalContext);
  const [onLinkClicked, setOnLinkClicked] = useState(false);

  useEffect(() => {
    if (loadingSpinner) {
      setLoadingSpinner(false);
    }
  }, [loadingSpinner]);

  const GlobalNavClick = () => {
    if (buttonstate5 === 0) {
      setButtonState5(1);
    } else {
      setButtonState5(0);
    }
  };
  const [buttonstate6, setButtonState6] = useState(0);
  const NotificationClick = () => {
    if (buttonstate6 === 0) {
      setButtonState6(1);
      setButtonState7(0);
    } else {
      setButtonState6(0);
      setButtonState7(1);
    }
  };

  const [buttonstate7, setButtonState7] = useState(0);
  const BackClick = () => {
    if (buttonstate7 === 0) {
      setButtonState7(1);
      setButtonState6(0);
    } else {
      setButtonState7(0);
      setButtonState6(1);
    }
  };
  //Onclick show Add Task Comp
  const [buttonstate8, setButtonState8] = useState(0);
  const HandleClickTaskComp1 = () => {
    if (buttonstate8 === 0) {
      setButtonState8(1);
    }
  };
  const [buttonstate9, setButtonState9] = useState(0);
  const HandleClickTaskComp2 = () => {
    if (buttonstate9 === 0) {
      setButtonState9(1);
      setButtonState8(0);
      setButtonState10(0);
    }
  };
  const [buttonstate10, setButtonState10] = useState(0);
  const HandleClickTaskComp3 = () => {
    if (buttonstate10 === 0) {
      setButtonState10(1);
      setButtonState9(0);
      setButtonState8(0);
    } else if (buttonstate10 === 1) {
      setButtonState8(0);
    } else {
      setButtonState10(0);
    }
  };

  const onLinkClick = () => {
    setOnLinkClicked(true);
  };
  return (
    <MainCont>
      <LeftCont>
        <NavBar3 onLinkClick={onLinkClick} />
      </LeftCont>
      {onLinkClicked ? (
        <LoadingSpinner />
      ) : (
        <>
          <MiddleCont>
            <Greeting
              width="250px"
              height="100px"
              heading="Add Tasks"
              User=""
              ps=""
              visibility="visible"
            />
            <AddTaskCont>
              <AddMembers
                heading="Add Task"
                ps="Start by adding a task"
                title="Add Task"
                width="132px"
                height="50px"
                borderRadius="4.2px"
                onClick={() => {
                  HandleClickTaskComp1();
                }}
                display={
                  buttonstate8 || buttonstate9 || buttonstate10 === 1
                    ? "none"
                    : "flex"
                }
              />
              <Tab
                display={buttonstate9 || buttonstate10 === 1 ? "flex" : "none"}
                onTabClick={() => {
                  HandleClickTaskComp3();
                }}
              />
              <TaskComp
                onClick={() => {
                  HandleClickTaskComp2();
                }}
                display={
                  buttonstate8 || buttonstate10 === 1
                    ? "flex"
                    : "none" || buttonstate9 === 1
                    ? "none"
                    : "flex"
                }
              />
              <Assigned
                display={
                  buttonstate9 === 1
                    ? "flex"
                    : "none" || buttonstate10 === 1
                    ? "none"
                    : "flex"
                }
              />
            </AddTaskCont>
          </MiddleCont>
          <RightCont>
            <CalEventMerged />
          </RightCont>
        </>
      )}
    </MainCont>
  );
}
