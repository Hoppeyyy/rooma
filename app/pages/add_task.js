import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import NavBar2 from '../comps/NavBar2';
import CalendarComp from '../comps/CalendarComp';
import Event from '../comps/Event';
import {useState} from 'react';
import Greeting from '../comps/Greeting';
import AddMembers from '../comps/AddMembers';

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

const AddTaskCont = styled.div`
display:flex;
flex-direction:column;
`

export default function Add_task() {
  const [buttonstate1, setButtonState1] = useState(0);

  const EventHandleClick = () =>{
    if (buttonstate1===0){
    setButtonState1(1);
  }else{
    setButtonState1(0);
  }
  }
  
  return (
  
    <MainCont>
      <LeftCont>
        <NavBar2 />
      </LeftCont>
      <MiddleCont>
      <Greeting
    width="250px"
    height="100px"
    heading="Add Tasks"
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
      />
    </AddTaskCont>
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