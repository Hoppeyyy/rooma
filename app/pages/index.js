import styled from "styled-components";
import * as React from "react";
import { useState, useContext } from "react";
import NavBar3 from "../comps/NavBar3";
import Greeting from "../comps/Greeting";
import Reminder from "../comps/Reminder";
import { requireAuthen } from "../api/require.authen";
import CalEventMerged from "../comps/CalEventMerged";

const MainCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;
const LeftCont = styled.div`
  display: flex;
  flex-grow: 1;
  // position: fixed;
`;

const MiddleCont = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 8;
  // margin-left: 10px;
  margin-top: 10px;
`;

const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export default function Home(props) {
  // detect button clicked or not
  const [buttonstate1, setButtonState1] = useState(0);

  const [buttonstate2, setButtonState2] = useState(0);
  const ReminderHandleClick = () => {
    if (buttonstate2 === 0) {
      setButtonState2(1);
    } else {
      setButtonState2(0);
    }
  };
  const [buttonstate3, setButtonState3] = useState(0);

  const CompleteHandleClick = () => {
    if (buttonstate3 === 0) {
      setButtonState3(1);
    } else {
      setButtonState3(0);
    }
  };
  // completed checkbtn default clicked change to not clicked // not working yet
  const [buttonstate4, setButtonState4] = useState(0);
  const CheckedButtonClick = () => {
    if (buttonstate4 === 0) {
      setButtonState4(1);
    } else {
      setButtonState4(0);
    }
  };
  const [buttonstate5, setButtonState5] = useState(0);
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
  return (
    <MainCont>
      <LeftCont>
        <NavBar3 />
      </LeftCont>

      <MiddleCont>
        <Greeting
          width="250px"
          height="100px"
          heading="Hello"
          // User should be connected with the users' name
          User={props.auth.user ? props.auth.user.name : "user!"}
          ps="Here’s your schedule this week"
          visibility="visible"
        />

        <Reminder
          // heading need to change when the user click the calendar and change the date for reminder
          heading="Today"
          // def_visibility will be visible when the user didn't schedule anything on the date. if there is a reminder, it should be hidden
          def_visibility="hidden"
          // checked is for completed radio button. defalt set as checked, but once the user want to bring the reminder back to active reminder, the button should be unclicked and the reminder cont will be deleted in completed reminder and bring it to the active reminder comp
          checked="defaultChecked"
          onMoreClick={() => {
            ReminderHandleClick();
          }}
          height={buttonstate2 === 1 ? "850px" : "600px"}
          top={buttonstate2 === 1 ? "920px" : "675px"}
          title_more={buttonstate2 === 1 ? "Close " : "More "}
          //complete_display={buttonstate2 === 1 ? 'none' : 'block'}
          rewards_display={buttonstate2 === 1 ? "none" : "block"}
          onCompleteClick={() => {
            CompleteHandleClick();
          }}
          title_complete={buttonstate3 === 1 ? "Hide " : "Completed "}
          reminder_display={buttonstate3 === 1 ? "none" : "block"}
          reminder_completed_display={buttonstate3 === 1 ? "block" : "none"}
          //complete_width={buttonstate3 === 1 ? '685px' : '235px'}
          //complete_height={buttonstate3 === 1 ? '360px' : '47px'}
          //complete_borderRadius={buttonstate3 === 1 ? '22px' : '8px'}
          //more_display={buttonstate3 === 1 ? 'none' : 'flex'}
          //more_after_display={buttonstate3 === 1 ? 'flex' : 'none'}

          onChecked_trigger={() => {
            CompleteAfterHandleClick();
          }}
        />
      </MiddleCont>

      <RightCont>
        <CalEventMerged />
      </RightCont>
    </MainCont>
  );
}

export const getServerSideProps = async (context) => {
  // return requireAuthen(context);
  let authProp = await requireAuthen(context, true);

  if (!authProp.hasOwnProperty("user")) {
    return { redirect: authProp };
  } else {
    return {
      props: {
        auth: authProp,
        // events: Math.random(),
      },
    };
  }
};

// export const getServerSideProps = (context) => {
//   // return requireAuthen(context);
//   return {
//     props: {
//       random: Math.random(),
//     },
//   };
// };
