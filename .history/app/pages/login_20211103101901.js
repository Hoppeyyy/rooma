import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import Tutorial from '../comps/Tutorial';
import LoginForm from '../comps/LoginForm'
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
height: 100%;
`
const LogoCont = styled.img`
width: 100px;
position:absolute;
margin: 20px 20px 0px 30px;
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
             <Tutorial/>
        </LeftCont>
        <RightCont>
            <LoginForm/>
        </RightCont>

      
    </MainCont>
  
  )
}
