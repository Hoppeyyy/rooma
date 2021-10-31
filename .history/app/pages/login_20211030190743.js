import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import React from 'react';
import Tutorial from '../comps/Tutorial'
import {useState} from 'react';

const MainCont = styled.div`
  display:flex;
  width:100vw;
  height:100vh;

`



const LeftCont = styled.div`
display: flex;
flex:1;
background-color: #F6F6FE;
justify-content:center;
`
const LogoCont = styled.img`
width: 100px;
margin: 20px;

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
           <Tutorial/>
        </LeftCont>
        <RightCont></RightCont>

      
    </MainCont>
  )
}
