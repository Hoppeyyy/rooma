import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import Tutorial from '../comps/Tutorial';
import PickColorForm from '../comps/PickColorForm';



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
margin: 20px;
position:absolute;
top: 10px;
`


const RightCont = styled.div`
display:flex;
flex:1;
`


export default function Login() {

  
  return (
  
    <MainCont>
        
        <LeftCont>
        <LogoCont src="/Mainlogo.svg"/>
             <Tutorial 
                chead="Pick" 
                bhead=" your color" 
                para="Pick your personal color for the schedule and start distributing your chores and record important events" 
                animation="/pick-a-color-animation.svg"/>
        </LeftCont>
        <RightCont>
            <PickColorForm></PickColorForm>
        </RightCont>

      
    </MainCont>
  
  )
}