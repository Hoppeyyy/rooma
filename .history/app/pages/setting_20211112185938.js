import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import React from 'react';
import NavBar2 from '../comps/NavBar2';
import Invite from '../comps/Invite';
import HouseRules from '../comps/HouseRules';
import ManageProfile from '../comps/ManageProfile';
import LeaveGroup from '../comps/LeaveGroup';
import LogOut from '../comps/LogOut';
import SettingNavCont from '../comps/SettingNavCont';
import {useState} from 'react';

const Cont = styled.div`
display:flex;
width:100vw;
height:100vh;
`

const LeftCont = styled.div`
display: flex;
flex-direction: column;
flex:2;
border-right: 1px #D6D6D6 solid;
margin-left: 20px;

padding-right: 20px;

`
const SetNav = styled.div`
display:flex;
width: 100%;
height: 100%;
flex-direction: column;
align-items:center;

  
`
const Holder = styled.div `
  display:flex;
 flex: 4;

  // justify-content: center;
  // align-items: center;
  // flex-direction:column;
  // margin-top:30px;

`

const Title = styled.p`
font-size:35px;
margin-left: -200px;
font-weight:700;
color: #181135;

`

const NavCont = styled.div`
display:flex;


`

export default function Home() {


//setting navigation buttons: Right Cont change
  const [showRightCont, setShowRightCont] = useState(0);

  const HandleClickRightCont1 = () =>{
    setShowRightCont(1);
  }
  const HandleClickRightCont2 = () =>{
    setShowRightCont(2);
  } 
  const HandleClickRightCont3 = () =>{
    setShowRightCont(3);
  }  
  const HandleClickRightCont4 = () =>{
    setShowRightCont(4);
  } 
  const HandleClickRightCont5 = () =>{
    setShowRightCont(5);
  }
  
 


// setting navigation button: Color change
  const [buttonstate1, setButtonState1] = useState(0);
  const [buttonstate5, setButtonState5] = useState(0);
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
  const GlobalNavClick = () =>{
    if (buttonstate5===0){
    setButtonState5(1);
  }else{
    setButtonState5(0);
  }
  }
  
  return (
    <Cont>
      
      <NavCont>
      <NavBar2
    
      // user pic src
      src="/Avatar.png"
      // user name
      name="Esther Howard"
      // user rooma point
      user_point="100 pts"
      // if there is new message in alert display:block else display:none
      Alertdisplay="block"
      // showing user is in setting page right now
    color6="#8867EB"
    src6="/Settings_Icon_Color.svg"
    onContClick={()=>{
      GlobalNavClick();
    }}
    width={buttonstate5 === 1 ? '140px' : '288px'}
    display={buttonstate5 === 1 ? 'none' : 'flex'}
    displayLogo={buttonstate5 === 1 ? 'flex' : 'none'}
    displayHome={buttonstate5 === 1 ? 'none' : 'block'}
    displayTask={buttonstate5 === 1 ? 'none' : 'block'}
    displayChat={buttonstate5 === 1 ? 'none' : 'block'}
    displayMember={buttonstate5 === 1 ? 'none' : 'block'}
    displayCommunity={buttonstate5 === 1 ? 'none' : 'block'}
    displaySetting={buttonstate5 === 1 ? 'none' : 'block'}
    alignItems={buttonstate5 === 1 ? 'center':'unset'}
    justifyContent={buttonstate5 ===1 ? 'center':'space-even'}
    />
    </NavCont>
    <LeftCont>
    <SetNav>
      <Title className="ubuntu">Settings</Title>
      <SettingNavCont
          heading="Add a member"
          ps="Invite a new member"
          src="/Member.png"
          onClick={() =>{
            HandleClickButtonColor1();
            HandleClickRightCont1();
          }} 
          bgcolor={
            buttonstate1 === 1 ? '#FAFAFA' : '#FFFFFF'}
         
      />
      <SettingNavCont
        heading="House Rules"
        ps="Learn about house rules"
        src="/House.png"
       onClick={() =>{
        HandleClickButtonColor2();
        HandleClickRightCont2();
      }} 
      bgcolor={buttonstate1 === 2 ? '#FAFAFA' : '#FFFFFF'}
      /> 
      <SettingNavCont
      heading="Manage Profile"
      ps="Manage profile settings"
      src="/Test Account.png"
       onClick={() =>{
        HandleClickButtonColor3();
        HandleClickRightCont3();
      }} 
      bgcolor={
        buttonstate1 === 3 ? '#FAFAFA' : '#FFFFFF'}
      /> 
      <SettingNavCont
      heading="Leave group"
      ps="Leave and join a new group"
      src="/Export.png"
       onClick={() =>{
        HandleClickButtonColor4();
        HandleClickRightCont4();
      }} 
      bgcolor={
        buttonstate1 === 4 ? '#FAFAFA' : '#FFFFFF'}
      /> 
      <SettingNavCont
      heading="Log Out"
      ps="Log out from the account"
      src="/Exit.png"
       onClick={() =>{
        HandleClickButtonColor5();
        HandleClickRightCont5();
      }} 
      bgcolor={
        buttonstate1 === 5 ? '#FAFAFA' : '#FFFFFF'}
      /> 
    </SetNav> 
    </LeftCont>
    <Holder>
      <Invite display={showRightCont === 1 ? 'flex' : 'none'}></Invite>
      <HouseRules display={showRightCont === 2 ? 'flex' : 'none'}></HouseRules>
      <ManageProfile display={showRightCont === 3 ? 'flex' : 'none'}></ManageProfile>
      <LeaveGroup display={showRightCont === 4 ? 'flex' : 'none'}></LeaveGroup>
      <LogOut display={showRightCont === 5 ? 'flex' : 'none'}></LogOut>
      
    </Holder> 
    </Cont>
  )
}
