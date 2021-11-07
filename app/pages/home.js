import styled from 'styled-components';
import * as React from 'react';
import {useState} from 'react';
import NavBar from '../comps/NavBar';
// import NavBar2 from '../comps/NavBar2';
// add navbar 2 

import Greeting from '../comps/Greeting';
import Reminder from '../comps/Reminder';
import Completed from '../comps/Completed';
import WeeklyRewards from '../comps/WeeklyRewards';
import CalendarComp from '../comps/CalendarComp';
import Event from '../comps/Event';


const MainCont = styled.div`
  display:flex;
  flex-direction:row;
  width:100vw;
  height:100vh;
`
const LeftCont = styled.div`
display:flex;
flex-grow:1;
`

const MiddleCont = styled.div`
display:flex;
flex-direction:column;
flex-grow:8;
`


const RightCont = styled.div`
display:flex;
flex-direction:column;
flex-grow:1;
`



export default function Home (){

  //NavBar onClick function
  // const [showNav2, setShowNav2] = useState(false)
  // const [showNav, setShowNav] = useState(true)



  // detect button clicked or not
  const [buttonstate1, setButtonState1] = useState(0);
  const [buttonstate2, setButtonState2] = useState(0);
  const [buttonstate3, setButtonState3] = useState(0);
  const [buttonstate4, setButtonState4] = useState(0);

  const EventHandleClick = () =>{
    if (buttonstate1===0){
    setButtonState1(1);
  }else{
    setButtonState1(0);
  }
  }
  const ReminderHandleClick = () =>{
    if (buttonstate2===0){
    setButtonState2(1);
  }else{
    setButtonState2(0);
  }
  }
  const CompleteHandleClick = () =>{
    if (buttonstate3===0){
    setButtonState3(1);
  }else{
    setButtonState3(0);
  }
  }
  const CompleteAfterHandleClick = () =>{
      if (buttonstate4===0){
      setButtonState4(1);
    }else{
      setButtonState4(0);
    }
    }
  return (<MainCont>

    <LeftCont>
      <NavBar 
        // show={showNav} 
        // onNavClick={()=>{setShowNav2(true);{setShowNav(false)}}}
        ></NavBar>
      {/* <NavBar2 
        show={showNav2} 
        onNav2Click={()=>{setShowNav(true); {setShowNav2(false)}}}
        ></NavBar2> */}
    </LeftCont>

    <MiddleCont>
    <Greeting
    width="250px"
    height="100px"
    heading="Hello Ester!"
    ps="Here’s your schedule this week"
    visibility="visible"
    />
    
    <Reminder
    heading="Today"
    visibility="hidden"

    onMoreClick={() =>{
      ReminderHandleClick();
    }} 
    height={buttonstate2 === 1 ? '760px' : '360px'}
    top={buttonstate2 === 1 ? '820px' : '425px'}
    title={buttonstate2 === 1 ? 'close ' : 'more '}
    complete_display={buttonstate2 === 1 ? 'none' : 'block'}
    rewards_display={buttonstate2 || buttonstate3 === 1 ? 'none' : 'block'}

    onCompleteClick={()=>{
      CompleteHandleClick();
    }}
    complete_width={buttonstate3 === 1 ? '685px' : '235px'}
    complete_height={buttonstate3 === 1 ? '360px' : '47px'}
    complete_borderRadius={buttonstate3 === 1 ? '22px' : '8px'}
    more_display={buttonstate3 === 1 ? 'none' : 'flex'}
    more_after_display={buttonstate3 === 1 ? 'flex' : 'none'}

    onCompleteClick_After={()=>{
      CompleteAfterHandleClick();
    }}

    />
    </MiddleCont>

    <RightCont>
      <CalendarComp/>
     <Event
      height="550px"
      day="Oct8"
      week="Thrusday"
      bgcolor="rgba(240,199,137,30%)"
      visibility="visible"
      task_name="Event Name"
      vlcolor="#F0C789"
      name="Name"
      date="5:00-7:00PM"
      onClick={() =>{
        EventHandleClick();
      }} 
      visibility={buttonstate1 === 1 ? 'hidden' : 'visible'}
      src={buttonstate1 === 1 ? '/add_rotate.png': '/add.png'}
      visibility2={buttonstate1 ===1 ? 'visible': 'hidden'}
     />
    </RightCont>
  </MainCont>
  )
}
