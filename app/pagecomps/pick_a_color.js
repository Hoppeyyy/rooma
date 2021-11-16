import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import Tutorial from '../comps/Tutorial';
import PickColorForm from '../comps/PickColorForm';
import {useState} from 'react';



const MainCont = styled.div`
display:flex;
width:100vw;
height:100vh;

`
const LeftCont = styled.div`
display: flex;
flex-direction: column;
flex:1;
background-color: #F6F6FE;
justify-content:center;
`

const LogoCont = styled.img`
width: 100px;
margin: 20px 20px 0px 30px;
position:absolute;
top: 10px;
`


const RightCont = styled.div`
display:flex;
flex:1;
`


export default function PickColor() {
  const [buttonstate1, setButtonState1] = useState(0);
  const [buttonstate2, setButtonState2] = useState(0);
  const [buttonstate3, setButtonState3] = useState(0);
  const [buttonstate4, setButtonState4] = useState(0);
  const [buttonstate5, setButtonState5] = useState(0);
  const [buttonstate6, setButtonState6] = useState(0);

  const onBtn1Click= () =>{
    if (buttonstate1===0){
    setButtonState1(1);
    setButtonState2(0);
    setButtonState3(0);
    setButtonState4(0);
    setButtonState5(0);
    setButtonState6(0);
  }else{
    setButtonState1(0);
  }
  }
  const onBtn2Click = () =>{
    if (buttonstate2===0){
    setButtonState2(1);
    setButtonState1(0);
    setButtonState3(0);
    setButtonState4(0);
    setButtonState5(0);
    setButtonState6(0);
  }else{
    setButtonState2(0);
  }
  }
  const onBtn3Click = () =>{
    if (buttonstate3===0){
    setButtonState3(1);
    setButtonState1(0);
    setButtonState2(0);
    setButtonState4(0);
    setButtonState5(0);
    setButtonState6(0);
  }else{
    setButtonState3(0);
  }
  }
  const onBtn4Click = () =>{
      if (buttonstate4===0){
      setButtonState4(1);
      setButtonState1(0);
      setButtonState2(0);
      setButtonState3(0);
      setButtonState5(0);
      setButtonState6(0);
    }else{
      setButtonState4(0);
    }
    }
  const onBtn5Click = () =>{
      if (buttonstate5===0){
      setButtonState5(1);
      setButtonState1(0);
      setButtonState2(0);
      setButtonState3(0);
      setButtonState4(0);
      setButtonState6(0);
    }else{
      setButtonState5(0);
    }
    }
  const onBtn6Click= () =>{
      if (buttonstate6===0){
      setButtonState6(1);
      setButtonState1(0);
      setButtonState2(0);
      setButtonState3(0);
      setButtonState4(0);
      setButtonState5(0);
    }else{
      setButtonState6(0);
    }
    }
  
  return (
  
    <MainCont>
        
        <LeftCont>
        <LogoCont src="/Mainlogo.png"/>
             <Tutorial 
                chead="Pick" 
                bhead=" your color" 
                para="Pick your personal color for the schedule and start distributing your chores and record important events" 
                animation="/pick-a-color-animation.svg"/>
        </LeftCont>
        <RightCont>
            <PickColorForm
             onBtn1={()=>{
                onBtn1Click();
             }}
             border1={buttonstate1 === 1 ? 'solid 4px #7450E9' : 'none'}
            
             onBtn2={()=>{
              onBtn2Click();
             }}
             border2={buttonstate2 === 1 ? 'solid 4px #7450E9' : 'none'}

             onBtn3={()=>{
              onBtn3Click();
             }}
             border3={buttonstate3 === 1 ? 'solid 4px #7450E9' : 'none'}

             onBtn4={()=>{
              onBtn4Click();
            }}
            border4={buttonstate4 === 1 ? 'solid 4px #7450E9' : 'none'}

             onBtn5={()=>{
              onBtn5Click();
            }}
            border5={buttonstate5 === 1 ? 'solid 4px #7450E9' : 'none'}

             onBtn6={()=>{
              onBtn6Click();
            }}
            border6={buttonstate6 === 1 ? 'solid 4px #7450E9' : 'none'}
            />
        </RightCont>

      
    </MainCont>
  
  )
}