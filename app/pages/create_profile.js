import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import Tutorial from '../comps/Tutorial';
import {useState} from 'react';
import NewProfile from '../comps/NewProfile';




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

export default function CreateProfile() {

  
  return (
    <MainCont>
        
        <LeftCont>
        <LogoCont src="/Mainlogo.svg"/>
             <Tutorial
             animation="/create_profile.png"
             chead="Create"
             bhead="Profile"
             para="Create your personal profile to share with your roommates!"
             aniwidth="550px"
             buttoncolor1="#724FE9"
             buttoncolor2="#DADADA"
             buttoncolor3="#DADADA"
             buttoncolor4="#DADADA"
             buttondisplay="none"
             />
        </LeftCont>
        <RightCont>
           <NewProfile/>
        </RightCont>

      
    </MainCont>
  
  )
}
