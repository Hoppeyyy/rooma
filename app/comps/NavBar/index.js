
import Image from 'next/image'
import styled from 'styled-components';
import {useRouter} from 'next/router';

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
bottom: 90px;
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
width: 20px;
height: 20px;
`

const SetIcon = styled.img`
width: 20px;
height: 20px;
display:flex;
position: relative;
top: 115px;
`

const MainIcons = styled.div`
display: flex;
flex-direction: column;
height: 55%;
justify-content: space-evenly;
position: relative;
bottom: -10px;
`

const NavBar = ({
    routeToHome="/home",
    routeToTask="",
    routeToChat="",
    routeToMembers="/members",
    routeToCommunity="/community",
    routeToSettings="/setting",

    // onNavClick=()=>{},
    // NavBar useState function
    // show=false

}) => {
    
  
    // if(show === false){
    //     return<></>
    // }

    // return <CtrlCont onClick={()=>{
    //     onNavClick();
    // }}> 

    const router = useRouter();
    return <CtrlCont>

          
              <IconCont>
                <Logo src="/Logo.png"/>
                    <MainIcons>
                    <Icon  onClick={()=>router.push(routeToHome)} src="/Home_Icon.svg"/>
                    <Icon onClick={()=>router.push(routeToTask)} src="/Task_Icon.svg"/>
                    <Icon onClick={()=>router.push(routeToChat)} src="/Chat_Icon.svg"/>
                    <Icon onClick={()=>router.push(routeToMembers)} src="/Members_Icon.svg"/>
                    <Icon onClick={()=>router.push(routeToCommunity)} src="/search.svg"/>

                    </MainIcons>
                    <SetIcon onClick={()=>router.push(routeToSettings)} src="/Settings_Icon.svg"></SetIcon>
                </IconCont>
                
            </CtrlCont>   
}
export default NavBar;
