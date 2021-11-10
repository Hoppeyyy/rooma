import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import Tutorial from '../comps/Tutorial';
import MemberProfile from'../comps/MemberProfile';
import NavBar2 from '../comps/NavBar2'
import AddMembers from '../comps/AddMembers';
import ProfileInfo from '../comps/ProfileInfo';
import Button from '../comps/Button';

import {useState} from 'react';



const MainCont = styled.div`
  display:flex;
  width:100vw;
  height:100vh;

`
const Heading = styled.div`
font-size: 34px;
font-weight: 700;
margin-left: 180px;
margin-top: 50px;


`

const LeftCont = styled.div`
display: flex;
flex-direction: column;
flex:1;
border-right: 1px #D6D6D6 solid;

`
const CardCont = styled.div`
display:flex;
flex-direction: column;
align-items:center;
`

// Right Container 

const RightCont = styled.div`
display:flex;
flex:1;
flex-direction: column;
`
const ProfileHolder = styled.div`
display:flex;
justify-content:center;
`

const InfoHolder = styled.div`
width: 70%;
margin-left: auto;
margin-right: auto;
margin-top: 50px;
`

const Profile = styled.div`
font-size: 22px;
font-weight: 700;
color: #181135;
margin-bottom: 15px;


`

const Details = styled.div`
max-width: 100%;
color: #7E7E7E;
`

const DetailHolder = styled.div`
width: 100%;
display:flex;
justify-content: space-between;
margin-bottom: 70px;
`

export default function Members() {
  const [buttonstate5, setButtonState5] = useState(0);
  const GlobalNavClick = () =>{
    if (buttonstate5===0){
    setButtonState5(1);
  }else{
    setButtonState5(0);
  }
  }
  
  return (
  
    <MainCont>
           <NavBar2
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
        <LeftCont>
        <Heading className="ubuntu">Members</Heading>

        <CardCont>
       
        
        </CardCont>
        </LeftCont>

        {/* Right Container */}
        <RightCont>
        <ProfileHolder>
        <MemberProfile boxshadow="none"/>
        </ProfileHolder>

        <InfoHolder>
        <Profile className="opensans">Profile</Profile>
        <Details className="opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus velit consequat suspendisse sed semper mattis sed aliquet vulputate. Nisl ut commodo, aliquam mattis.</Details>

        <DetailHolder>
        <ProfileInfo/>
        <ProfileInfo head="She/Her" subhead="pronouns"headsize="23px"/>
        <ProfileInfo head="Student" subhead="Occupation" headsize="23px"/>
        <ProfileInfo head="BCIT" subhead="School" headsize="23px"/>
        </DetailHolder>


    

        


        </RightCont>
        

      
    </MainCont>
  
  )
}
