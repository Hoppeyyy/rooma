
import Image from 'next/image'
import styled from 'styled-components';

const CtrlCont = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:130px;
height:100vh;
box-shadow: 0px 4.0133771896362305px 11.036787033081055px 0px #00000014;

`

const Logo = styled.img`
width:50px;
height:50px;
display:flex;
position:relative;
bottom: 120px;

`
const IconCont = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
width: 100%;
height: 100%;
position: relative;



`
const Icon = styled.img`
width: 30px;
height: 30px;
`

const SetIcon = styled.img`
width: 30px;
height: 30px;
display:flex;
position: relative;
top: 130px;


`
const MainIcons = styled.div`
display: flex;
flex-direction: column;
height: 50%;
justify-content: space-evenly;
position: relative;
bottom: 60px;
`
const NavBar = ({

}) => {
    return <CtrlCont>
    
                
                <IconCont>
                <Logo src="/Logo.png"/>
                    <MainIcons>
                    <Icon src="/Home_Icon.svg"/>
                    <Icon src="/Task_Icon.svg"/>
                    <Icon src="/Chat_Icon.svg"/>
                    <Icon src="/Members_Icon.svg"/>
                    <Icon src="/search.svg"/>
                    </MainIcons>
                    <SetIcon src="/Settings_Icon.svg"></SetIcon>
                </IconCont>
                
    
            </CtrlCont>   
}
export default NavBar;
