import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import React from 'react';
import NavBar from '../comps/NavBar';
import Invite from '../comps/Invite';
import SettingNavCont from '../comps/SettingNavCont';
import {useState} from 'react';

const Cont = styled.div`
  padding:5px;
  display:flex;
  width:100%;
  height:100%;
  flex-direction:row;
`
const GlbNav = styled.div`
  display:flex;
  flex-direction:column;
  flex-grow:1;
`
const SetNav = styled.div`
  display:flex;
  flex-direction:column;
  flex-grow:3;
`
const Holder = styled.div `
  display:flex;
  flex-direction:column;
  margin-top:30px;
  flex-grow:4;
`

export default function Home() {

  const [buttonstate1, setButtonState1] = useState(0);

  const HandleClickButtonColor1 = () =>{
    setButtonState1(1);
  } 
  const HandleClickButtonColor2 = () =>{
    setButtonState1(2);
  } 
  const HandleClickButtonColor3 = () =>{
    setButtonState1(3);
  } 
  const HandleClickButtonColor4 = () =>{
    setButtonState1(4);
  } 
  const HandleClickButtonColor5 = () =>{
    setButtonState1(5);
  } 
  return (
    <Cont>
      <GlbNav>
        <NavBar></NavBar>
        </GlbNav>
    <SetNav>
      <h2>Settings</h2>
      <SettingNavCont
          heading="Add a member"
          ps="Invite a new member"
          src="/Member.png"
          onClick={() =>{
            HandleClickButtonColor1();
          }} 
          bgcolor={
            buttonstate1 === 1 ? '#888888' : '#FFFFFF'}
         
      />
      <SettingNavCont
        heading="House Rules"
        ps="Learn about house rules"
        src="/House.png"
       onClick={() =>{
        HandleClickButtonColor2();
      }} 
      bgcolor={buttonstate1 === 2 ? '#888888' : '#FFFFFF'}
      /> 
      <SettingNavCont
      heading="Manage Profile"
      ps="Manage profile settings"
      src="/Test Account.png"
       onClick={() =>{
        HandleClickButtonColor3();
      }} 
      bgcolor={
        buttonstate1 === 3 ? '#888888' : '#FFFFFF'}
      /> 
      <SettingNavCont
      heading="Leave group"
      ps="Leave and join a new group"
      src="/Export.png"
       onClick={() =>{
        HandleClickButtonColor4();
      }} 
      bgcolor={
        buttonstate1 === 4 ? '#888888' : '#FFFFFF'}
      /> 
      <SettingNavCont
      heading="Log Out"
      ps="Log out from the account"
      src="/Exit.png"
       onClick={() =>{
        HandleClickButtonColor5();
      }} 
      bgcolor={
        buttonstate1 === 5 ? '#888888' : '#FFFFFF'}
      /> 
    </SetNav> 
    <Holder>
      <Invite></Invite>
    </Holder> 
    </Cont>
  )
}
