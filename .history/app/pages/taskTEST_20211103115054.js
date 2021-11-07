import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import Tutorial from '../comps/Tutorial';
import MemberProfile from'../comps/MemberProfile';
import NavBar from '../comps/NavBar'
import AddMembers from '../comps/AddMembers';
import ProfileInfo from '../comps/ProfileInfo';
import Button from '../comps/Button';
import TaskComp from '../comps/TaskComp';

import {useState} from 'react';



const MainCont = styled.div`
  display:flex;
  width:100vw;
  height:100vh;

`
const Heading = styled.div`
font-size: 34px;
font-weight: 700;
margin-left: 180px;
margin-top: 50px;


`

const LeftCont = styled.div`
display: flex;
flex-direction: column;
flex:1;
border-right: 1px #D6D6D6 solid;

`
const CardCont = styled.div`
display:flex;
flex-direction: column;
align-items:center;
`

// Right Container 

const RightCont = styled.div`
display:flex;
flex:1;
flex-direction: column;
`


export default function Members() {
  
  return (
  
    <MainCont>
        <NavBar/>
        <LeftCont>
       
        </LeftCont>

        {/* Right Container */}
        <RightCont>
       

       
        </RightCont>
        

      
    </MainCont>
  
  )
}
