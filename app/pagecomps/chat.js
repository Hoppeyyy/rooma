import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import NavBar2 from '../comps/NavBar2'
import ChatNav from '../comps/ChatNav';
import {useState} from 'react';
import User1 from '../comps/ChatComps/user1'
import User2 from '../comps/ChatComps/user2';
import Input from '../comps/ChatComps/input';



const MainCont = styled.div`
  display:flex;
  width:100vw;
  height:100vh;

`


//left cont
const LeftCont = styled.div`
display: flex;
flex-direction: column;
flex:2;
border-right: 1px #D6D6D6 solid;
di
`
const TopCont = styled.div`
display:flex;
justify-content: space-between;
margin: 40px 75px 0px 75px;
align-items:center;
`
const Heading = styled.div`
font-size: 34px;
font-weight: 700;

`
const Icon = styled.img`

`

//Chat Nav cont
const NavCont = styled.div`
display:flex;
width: 100%;
height: 100%;
flex-direction: column;
align-items:center;

`


// Right Container 

const RightCont = styled.div`
display:flex;
flex:3;
width: 100%;
height: 100%;
flex-direction: column;
justify-content: flex-end;
`
const ChatCont1 = styled.div`
display:flex;
width: 100%;
`
const ChatCont2 = styled.div`
display:flex;
width: 100%;
justify-content: flex-end;
`



export default function Chat() {
  const [buttonstate5, setButtonState5] = useState(0);
  const GlobalNavClick = () =>{
    if (buttonstate5===0){
    setButtonState5(1);
  }else{
    setButtonState5(0);
  }
  }
  const [buttonstate6, setButtonState6] = useState(0);
  const NotificationClick = () =>{
      if (buttonstate6===0){
      setButtonState6(1);
      setButtonState7(0);
    }else{
      setButtonState6(0);
      setButtonState7(1);
    }
    }
  
    const [buttonstate7, setButtonState7] = useState(0);
    const BackClick = () =>{
        if (buttonstate7===0){
        setButtonState7(1);
        setButtonState6(0);
      }else{
        setButtonState7(0);
        setButtonState6(1);
      }
      }
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
  
    <MainCont>
           <NavBar2
     // user pic src
     src="/Avatar.png"
     // user name
     name="Esther Howard"
     // user rooma point
     user_point="100 pts"
     // if there is new message in alert display:block else display:none
     Alertdisplay="block"
     // showing user is in chat page right now
    color3="#8867EB"
    src3="/Chat_Icon_Color.svg"

    // click navigation make it small or big
    onContClick={()=>{
      GlobalNavClick();
    }}
    Navwidth={buttonstate5 === 1 ? '140px' : '288px' || buttonstate6 ===1 ? '288px':''}
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

    onNotificationClick={()=>{
      NotificationClick();
    }}
    onBackClick={()=>{
      BackClick();
    }}
    Contdisplay={buttonstate6 === 1 ? 'none':'flex' || buttonstate7 === 1 ? 'flex':'none'}
    Contdisplay2={buttonstate6 === 1 ? 'flex':'none'|| buttonstate7 === 1 ? 'none':'flex'}
      />
        <LeftCont>
        <TopCont>
        <Heading className="ubuntu">Chat</Heading>
        <Icon src="/chat.svg"/>
        </TopCont>

        <NavCont>
        <ChatNav onClick={() =>{
            HandleClickButtonColor1();
          }} 
          bgcolor={
            buttonstate1 === 1 ? '#FAFAFA' : '#FFFFFF'}/>

        <ChatNav bgcolor="white" info="Darleen, Deavon"  onClick={() =>{
        HandleClickButtonColor2();
      }} 
      bgcolor={buttonstate1 === 2 ? '#FAFAFA' : '#FFFFFF'}/>

        <ChatNav bgcolor="white" info="Floyd Miles" display="none" marginleft="40px"onClick={() =>{
        HandleClickButtonColor3();
      }} 
      bgcolor={
        buttonstate1 === 3 ? '#FAFAFA' : '#FFFFFF'}
        />
        <ChatNav bgcolor="white" info="Devon Lane" display="none" marginleft="40px"
        onClick={() =>{
            HandleClickButtonColor4();
          }} 
          bgcolor={
            buttonstate1 === 4 ? '#FAFAFA' : '#FFFFFF'}/>
        
        </NavCont>
        </LeftCont>

        {/* Right Container */}
        <RightCont>
    
          <ChatCont1>
          <User1></User1>
          </ChatCont1>
    
          <ChatCont2>
            <User2></User2>
          </ChatCont2>
        
    
        <Input></Input>
      


        </RightCont>
        

      
    </MainCont>
  
  )
}
