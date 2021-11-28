import React from 'react'
import styled from 'styled-components'

const NavCont = styled.div`
display:flex;
background-color: white;
width:${props=>props.width};
height:100%;
box-shadow: 0px 4.427648067474365px 47.59721755981445px 0px #00000017;
flex-direction: column;

`

const TopCont = styled.div`
display:flex;
align-items:center;
margin-top: 15px;

`
const Icon = styled.img`
width: 30px;
height: 30px;
margin-left: 30px;

`
const Title = styled.div`
font-size: 20px;
font-weight: 700;
color: #383838;
margin-left: 60px;
`

const Cont = styled.div`
display:flex;
flex-direction:column;
border-bottom: 1px solid #D3D3D3;

`

const Now = styled.div`
font-size: 18px;
font-weight: 700;
color: #3E3D3D;
margin-left: 30px;
margin-top: 30px;
`

const NotiCont = styled.div`
display:flex;
margin: 30px 30px 40px 30px;

`

const RightCont = styled.div`
display:flex;
flex-direction: column;
margin-left: 10px;
`

const Avatar = styled.img`
width: 50px;
height: 50px;
`
const Message = styled.div`
font-size: 15px;
margin-left: 20px;
color: #3E3D3D;

`

const Span = styled.span`
font-weight: 700;
`

const ButtonCont = styled.div`
display:flex;
margin-left: 20px;
margin-top: 10px;
`

const Button1=styled.button`
border:none;
background-color: #9CD778;
padding: 5px 10px 5px 10px ;
border-radius: 5px;
color: white;
font-weight: 600;
`
const Button2=styled.button`
border:none;
background-color: #D77878;
padding: 5px 10px 5px 10px ;
border-radius: 5px;
color: white;
font-weight: 600;
margin-left: 10px;
`
const Time = styled.div`
font-size: 12px;
color: #838383;
margin-left: 10px;
margin-top: 10px;
`

const Span2 = styled.span`
font-size: 12px;
color: #838383;

`

const NotiCont2 = styled.div`
display:flex;
margin: 20px 30px 20px 30px;


`
const Notification= ({
  bgcolor="#FAFAFA",
  display="flex",
  NotificationWidth="288px",
  marginleft="25px",
  margintop="40px",
  info="All Roommates (5)",
  msg="Hello Everyone!",
  
  onBackClick=()=>{},
  
  }) => {

    return <NavCont display={display} width={NotificationWidth}>

        <TopCont>
            <Icon src="/arrow.svg" onClick={onBackClick}/>
            <Title className="opensans">Notification</Title>
        </TopCont>

        <Cont>
            <Now className="opensans">Now</Now>
            <NotiCont>
                <Avatar src="upload_pic.png"/>
                <RightCont>
                <Message><Span>Hailey Kim</Span> finished her Garbage task!</Message>
                <ButtonCont>
                <Button1 className="opensans">Accept</Button1>
                <Button2 className="opensans">Decline</Button2>
                <Time className="opensans">7 min</Time>
                </ButtonCont>
                </RightCont>
            </NotiCont>
        </Cont>

        <Cont>
            <Now className="opensans">This Week</Now>
            <NotiCont2>
                <Avatar src="Avatar3.png"/>
                <RightCont>
                <Message><Span>Maria Monay</Span> commented on your post. <Span2 className="opensans">3 Days</Span2></Message>
                </RightCont>
            </NotiCont2>
            <NotiCont2>
                <Avatar src="Avatar3.png"/>
                <RightCont>
                <Message><Span>Maria Monay</Span> commented on your post. <Span2 className="opensans">3 Days</Span2></Message>
                </RightCont>
            </NotiCont2>
            <NotiCont2>
                <Avatar src="Avatar3.png"/>
                <RightCont>
                <Message><Span>Maria Monay</Span> commented on your post. <Span2 className="opensans">3 Days</Span2></Message>
                </RightCont>
            </NotiCont2>
        </Cont>

        <Cont>
            <Now className="opensans">Last Week</Now>
            <NotiCont2>
                <Avatar src="Avatar3.png"/>
                <RightCont>
                <Message><Span>Maria Monay</Span> commented on your post. <Span2 className="opensans">3 Days</Span2></Message>
                </RightCont>
            </NotiCont2>
            <NotiCont2>
                <Avatar src="Avatar3.png"/>
                <RightCont>
                <Message><Span>Maria Monay</Span> commented on your post. <Span2 className="opensans">3 Days</Span2></Message>
                </RightCont>
            </NotiCont2>
            <NotiCont2>
                <Avatar src="Avatar3.png"/>
                <RightCont>
                <Message><Span>Maria Monay</Span> commented on your post. <Span2 className="opensans">3 Days</Span2></Message>
                </RightCont>
            </NotiCont2>
            <NotiCont2>
                <Avatar src="Avatar3.png"/>
                <RightCont>
                <Message><Span>Maria Monay</Span> commented on your post. <Span2 className="opensans">3 Days</Span2></Message>
                </RightCont>
            </NotiCont2>
        </Cont>
              
              
            </NavCont>   
}

export default Notification;
