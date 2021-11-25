import React from 'react'
import styled from 'styled-components'

const NavCont = styled.div`
display:flex;
align-items:center;
margin-top: 20px;

`
const ProfileCont = styled.div`
display:flex;
justify-content:center;
align-items:center;

`
const Avatar = styled.img`
width: 36.28px;
height: 36.28px;
margin-right: 15px;

`
const InfoCont = styled.div`
display:flex;
flex-direction: column;


`
const ChatBubble = styled.div`
display:flex;
flex-direction:column;
background: #F2F2F2;
border-radius: 15px;
color: #1A1A1A;
padding:5px 20px 10px 20px;
font-size: 10px;
`
const Chattop = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`
const Name= styled.h5`
font-size: 11px;
margin:5px;
`
const Time = styled.p`
font-size: 8px;
margin:7px;
`

const UserComment = ({
  src="upload_pic.png",
  UserName="Chisaki",
  MsgTime="11:20",
  Content="Hello World",

  
  }) => {

    return <NavCont>
                <ProfileCont>
                    <Avatar src={src}/>
                </ProfileCont>
                <InfoCont>
                    <ChatBubble className="opensans">
                      <Chattop>
                        <Name>{UserName}</Name>
                        <Time>{MsgTime}</Time>
                      </Chattop>
                      {Content}
                      </ChatBubble>
                </InfoCont>
            </NavCont>   
}

export default UserComment;
