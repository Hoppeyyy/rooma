import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import NavBar2 from '../comps/NavBar2';
import CalendarComp from '../comps/CalendarComp';
import Event from '../comps/Event';
import {useState} from 'react';
import Greeting from '../comps/Greeting';
import AddMembers from '../comps/AddMembers';
import Tab from '../comps/TaskComp/tabs';
import TaskComp from '../comps/TaskComp/task';
import Assigned from '../comps/TaskComp/assigned';

const MainCont = styled.div`
  display:flex;
  flex-direction:row;
  width:100vw;
  height:100vh;
`
const LeftCont = styled.div`
display:flex;
flex-grow:1;
position: fixed;
`

const MiddleCont = styled.div`
display:flex;
flex-direction:column;
flex-grow:9;
margin-left:300px;

`


const RightCont = styled.div`
display:flex;
flex-direction:column;
flex-grow:0.5;

`

const AddTaskCont = styled.div`
display:flex;
flex-direction:column;
`

export default function Add_task() {
  const [buttonstate1, setButtonState1] = useState(0);
  const [buttonstate5, setButtonState5] = useState(0);
  const EventHandleClick = () =>{
    if (buttonstate1===0){
    setButtonState1(1);
  }else{
    setButtonState1(0);
  }
  }
  const GlobalNavClick = () =>{
    if (buttonstate5===0){
    setButtonState5(1);
  }else{
    setButtonState5(0);
  }
  }
  const [buttonstate6, setButtonState6] = useState(0);
  const NotificationClick = () =>{
      if (buttonstate6===0){
      setButtonState6(1);
      setButtonState7(0);
    }else{
      setButtonState6(0);
      setButtonState7(1);
    }
    }
  
    const [buttonstate7, setButtonState7] = useState(0);
    const BackClick = () =>{
        if (buttonstate7===0){
        setButtonState7(1);
        setButtonState6(0);
      }else{
        setButtonState7(0);
        setButtonState6(1);
      }
      }
  //Onclick show Add Task Comp
  const [buttonstate8, setButtonState8] = useState(0);
  const HandleClickTaskComp1 = () =>{
    if (buttonstate8===0){
      setButtonState8(1);
    }
  }
  const [buttonstate9, setButtonState9] = useState(0);
  const HandleClickTaskComp2 = () =>{
    if (buttonstate9 ===0){
      setButtonState9(1);
      setButtonState8(0);
      setButtonState10(0);
    }
   
  }
  const [buttonstate10, setButtonState10] = useState(0);
  const HandleClickTaskComp3 = () =>{
    if (buttonstate10 ===0){
      setButtonState10(1); 
      setButtonState9(0);
      setButtonState8(0);  
    }
    else if (buttonstate10 === 1){
      setButtonState8(0);  
    }
   else{
     setButtonState10(0);
   }
  }
  return (
  
    <MainCont>
      <LeftCont>
      <NavBar2
    // user pic src
    src="/Avatar.png"
    // user name
    name="Esther Howard"
    // user rooma point
    user_point="100 pts"
    // if there is new message in alert display:block else display:none
    Alertdisplay="block"
    // showing user is in add_task page right now
    color2="#8867EB"
    src2="/Task_Icon_Color.svg"

    // click navigation make it small or big
    onContClick={()=>{
      GlobalNavClick();
    }}
    Navwidth={buttonstate5 === 1 ? '140px' : '288px' || buttonstate6 ===1 ? '288px':''}
    display={buttonstate5 === 1 ? 'none' : 'flex'}
    displayLogo={buttonstate5 === 1 ? 'flex' : 'none'}
    displayHome={buttonstate5 === 1 ? 'none' : 'block'}
    displayTask={buttonstate5 === 1 ? 'none' : 'block'}
    displayChat={buttonstate5 === 1 ? 'none' : 'block'}
    displayMember={buttonstate5 === 1 ? 'none' : 'block'}
    displayCommunity={buttonstate5 === 1 ? 'none' : 'block'}
    displaySetting={buttonstate5 === 1 ? 'none' : 'block'}
    alignItems={buttonstate5 === 1 ? 'center':'unset'}
    justifyContent={buttonstate5 ===1 ? 'center':'space-even'}

    onNotificationClick={()=>{
      NotificationClick();
    }}
    onBackClick={()=>{
      BackClick();
    }}
    Contdisplay={buttonstate6 === 1 ? 'none':'flex' || buttonstate7 === 1 ? 'flex':'none'}
    Contdisplay2={buttonstate6 === 1 ? 'flex':'none'|| buttonstate7 === 1 ? 'none':'flex'}
    />
      </LeftCont>
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
       onClick={() =>{
        HandleClickTaskComp1();
        
      }} 
      display={buttonstate8 || buttonstate9 || buttonstate10 === 1 ? 'none':'flex'}
    
      />
      <Tab  
      display={buttonstate9 || buttonstate10 === 1 ? 'flex':'none'}
      onTabClick={()=>{
        HandleClickTaskComp3();
      }}

      />
      <TaskComp  
      onClick={() =>{
        HandleClickTaskComp2();
      }}
      display={buttonstate8 || buttonstate10 === 1 ? 'flex':'none'|| buttonstate9 === 1 ? 'none':'flex'}
      
      
      />
      <Assigned 
      display={buttonstate9 === 1 ? 'flex':'none'|| buttonstate10 === 1 ? 'none':'flex'}/>
    </AddTaskCont>
    
      </MiddleCont>
      <RightCont>
        <CalendarComp/>
          <Event
          height="550px"
          day="Oct8"
          week="Thrusday"
          bgcolor="rgba(240,199,137,30%)"
          // visibility="visible"
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