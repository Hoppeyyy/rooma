import Image from 'next/image'
import styled from 'styled-components';

const CtrlCont = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:288px;
height:100vh;
box-shadow: 0px 4.0133771896362305px 11.036787033081055px 0px #00000014;
`

const ProfileCont = styled.div`
width:75%;
height:25%;
display:flex;
position:relative;
display:flex;
flex-direction: column;
align-items:center;
margin-left:13px;
top:-70px;
`

const IconCont = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
// align-items:center;
margin-left:50px;
width: 100%;
height: 100%;
position: relative;
`

const TabCont = styled.div`
display:flex;
flex-direction:row;
align-items:center;
margin-left:35px;
margin-right:30px;
`

const SetIconCont = styled.div`
display:flex;
position: relative;
top: 85px;
display:flex;
flex-direction:row;
align-items:center;
margin-left:35px;
margin-right:30px;
`


const MainIcons = styled.div`
display: flex;
flex-direction: column;
height: 40%;
justify-content: space-evenly;
position: relative;
bottom: 30px;
`

//items in the div's

const Icon = styled.img`
width: 20px;
height: 20px;
`

const Title = styled.p`
font-size:21px;
font-weight:400;
margin-left:30px;
`

const Pic = styled.img`
width:115px;
height:115px;
`


const Name = styled.p`
font-size:25px;
font-weight:700;
margin-top:15px;
margin-bottom:15px;
`
const Point = styled.div`
display:flex;
justify-content: center;
align-items:center;
border-radius: 28.8985px;
width: 125px;
height:41px;
background: linear-gradient(90deg, #9351E8 0%, #6853E9 51.56%, #504EDB 100%);
font-size: 16px;
color:white;
font-weight: 600;
margin-right: 5px;
`

const BellIcon = styled.img`
width:20px;
height:25px;
position:relative;
left:225px;
top:-100px;
`

const NavBar2 = ({
    src="/Avatar.png",
    name="Esther Howard",
    points="100 pts",

    onNav2Click=()=>{},
    // NavBar useState function
    show=false

}) => {

    if(show === false){
        return<></>
    }

    return <CtrlCont onClick={()=>{
        onNav2Click();
    }}>
          
              <IconCont>
                  <BellIcon src="/Bell_Icon.svg"/>
                <ProfileCont>
                    <Pic src={src}></Pic>
                    <Name className="opensans">{name}</Name>
                    <Point className="opensans">{points}</Point>

                </ProfileCont>
                    <MainIcons>
                        <TabCont>
                            <Icon src="/Home_Icon.svg"/>
                            <Title className="opensans">Home</Title>
                        </TabCont>
                        <TabCont>
                            <Icon src="/Task_Icon.svg"/>
                            <Title className="opensans">Tasks</Title>
                        </TabCont>
                        <TabCont>
                            <Icon src="/Chat_Icon.svg"/>
                            <Title className="opensans">Chat</Title>
                        </TabCont>          
                        <TabCont>
                            <Icon src="/Members_Icon.svg"/>
                            <Title className="opensans">Memebers</Title>
                        </TabCont>
                        <TabCont>
                            <Icon src="/search.svg"/>
                            <Title className="opensans">Community</Title>
                        </TabCont>
                    </MainIcons>
                 
                        <SetIconCont>
                                <Icon src="/Settings_Icon.svg"/>
                                <Title className="opensans">Settings</Title>
                        </SetIconCont>
                
                </IconCont>
                
            </CtrlCont>   
}
export default NavBar2;