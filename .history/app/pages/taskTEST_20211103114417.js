import styled from 'styled-components';
import * as React from 'react';
import {useState} from 'react';
import NavBar from '../comps/NavBar'
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
 
    
    <MainCont>
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
     
  
    </RightCont>
  </MainCont>

}
