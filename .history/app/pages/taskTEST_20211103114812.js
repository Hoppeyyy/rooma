import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import Tutorial from '../comps/Tutorial';
import MemberProfile from'../comps/MemberProfile';
import NavBar from '../comps/NavBar'
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


export default function Members() {
  
  return (
  
    <MainCont>
        <NavBar/>
        <LeftCont>
        <Heading className="ubuntu">Members</Heading>

        <CardCont>
        <MemberProfile/>
        <AddMembers/>
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


        {/* Preference */}
        <Profile className="opensans">Preference</Profile>

        <DetailHolder>
        <Button width="125px" height="40px" bgcolor="#F2EFFD" title="No Pets" fontSize="14px"
        fontcolor="#7751E8" border=" 1px solid #7751E8" fontWeight="500" borderRadius="29px"/>
        <Button width="125px" height="40px" bgcolor="#F2EFFD" title="No smokers" fontSize="14px"
        fontcolor="#7751E8" border=" 1px solid #7751E8" fontWeight="500" borderRadius="29px"/>
        <Button width="125px" height="40px" bgcolor="#F2EFFD" title="No loud noises" fontSize="14px"
        fontcolor="#7751E8" border=" 1px solid #7751E8" fontWeight="500" borderRadius="29px"/>
        <Button width="125px" height="40px" bgcolor="#F2EFFD" title="Respect" fontSize="14px"
        fontcolor="#7751E8" border=" 1px solid #7751E8" fontWeight="500" borderRadius="29px"/>
        </DetailHolder>


        {/* Interest */}
        <Profile className="opensans">Interest</Profile>

        <DetailHolder>
        <Button width="125px" height="40px" bgcolor="#F2EFFD" title="Hiking" fontSize="14px"
        fontcolor="#7751E8" border=" 1px solid #7751E8" fontWeight="500" borderRadius="29px"/>
        <Button width="125px" height="40px" bgcolor="#F2EFFD" title="Game" fontSize="14px"
        fontcolor="#7751E8" border=" 1px solid #7751E8" fontWeight="500" borderRadius="29px"/>
        <Button width="125px" height="40px" bgcolor="#F2EFFD" title="Shopping" fontSize="14px"
        fontcolor="#7751E8" border=" 1px solid #7751E8" fontWeight="500" borderRadius="29px"/>
        <Button width="125px" height="40px" bgcolor="#F2EFFD" title="Skiing" fontSize="14px"
        fontcolor="#7751E8" border=" 1px solid #7751E8" fontWeight="500" borderRadius="29px"/>
        </DetailHolder>
        </InfoHolder>


        </RightCont>
        

      
    </MainCont>
  
  )
}
