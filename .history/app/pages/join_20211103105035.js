import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import Tutorial from '../comps/Tutorial';
import JoinFrom from '../comps/JoinForm';


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



export default function Login() {

  
  return (
  
    <MainCont>
        
        <LeftCont>
        <LogoCont src="/Mainlogo.svg"/>
             <Tutorial 
                chead="Join" 
                bhead=" with your Roommates" 
                para="Create a new room for your roommates or join automatically by getting a code" 
                animation="/Join-animation.svg"/>
        </LeftCont>
        <RightCont>
            <JoinFrom></JoinFrom>
        </RightCont>

      
    </MainCont>
  
  )
}