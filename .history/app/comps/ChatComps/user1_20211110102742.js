import React from 'react'
import styled from 'styled-components'
import Chat from '../../pages/chat'

const NavCont = styled.div`
display:flex;
background-color: red;
width: 50%;
height: 15%;

`
const ProfileCont = styled.div`
display:flex;
flex:1;
background: blue;
justify-content:center;
align-items:center;
`
const Avatar = styled.img`
width: 50px;
height: 50px;

`
const InfoCont = styled.div`
display:flex;
flex:3;
background: yellow;
`
const ChatBubble = styled.div`
display:flex;
order: 0;
align-self: center;
flex-grow: 0;
background: #F2F2F2;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16), 0px -1px 1px rgba(0, 0, 0, 0.08);
border-radius: 0px 24px 24px 24px;
color: #1A1A1A;
padding: 15px;
margin-top: 5px;
`


const User1 = ({
  
  
  
  }) => {

    return <NavCont>
                <ProfileCont>
                    <Avatar src="Avatar2.png"/>
                </ProfileCont>

                <InfoCont>
                    <ChatBubble className="opensans">Helloadlkfalkfdjalkds</ChatBubble>
                </InfoCont>
            </NavCont>   
}

export default User1;
