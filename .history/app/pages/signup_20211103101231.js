import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import Tutorial from '../comps/Tutorial';
import SignupForm from '../comps/SignupForm'
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
        <LogoCont src="/Mainlogo.png"/>
             <Tutorial animation="/signup-animation.svg" chead="Set Up" bhead="your account"
             para="Get started by signing up now and enjoy your stress-free living with roommates."
             parawidth="450px" buttondisplay="flex"
             />
        </LeftCont>
        <RightCont>
            <SignupForm/>
        </RightCont>

      
    </MainCont>
  
  )
}
