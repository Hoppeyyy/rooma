import Head from 'next/head';
import styled from 'styled-components';
import * as React from 'react';

import AddButton from '../AddButton';
import Button from '../Button';
import ProfileInfo from '../ProfileInfo';
import {useRouter} from 'next/router';


const MainCont = styled.div`
display: ${props=>props.display};
flex-direction: column;
// margin-top:10px;
width:100%;
align-items:center;
position:relative;

`


const ButtonDiv = styled.div`
margin-left:75%;
margin-top:50px;
`

// Right Container 

const RightCont = styled.div`
// display:flex;
// flex:1;
// flex-direction: column;
`
const ProfileHolder = styled.div`
display:flex;
justify-content:center;
align-items: center;
margin-top:30px;
`

const SmallDiv = styled.div`
`

const InfoHolder = styled.div`
width: 700px;
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
const Avatar = styled.img`
width: 100px;
height: 100px;
margin-right: 40px;
`

const Name = styled.div`
font-size: 25px;
font-weight: 700;
color: #181135;
margin-bottom: 2px;
`
const Phone=styled.div`
font-size: 18px;
color:#7E7E7E;
margin-bottom: 15px;

`
const Icon = styled.img`
margin-right: 10px;
width: 14px;
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
align-items:center;
`

const ManageProfile = ({
    display="none"
    
}) => {
    const router = useRouter();
    return <MainCont display={display}>

                <RightCont>
                    <ProfileHolder>
                        <Avatar src="/upload_pic.png"></Avatar>
                        <SmallDiv>
                            <Name className="opensans">Esther Howard</Name>
                            <Phone className="opensans">
                                <Icon src="/phone.svg"/>
                                604-234-2931
                            </Phone>
                        </SmallDiv>
                    </ProfileHolder>

                    <InfoHolder>
                    <Profile className="opensans">Profile</Profile>
                    <Details className="opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus velit consequat suspendisse sed semper mattis sed aliquet vulputate. Nisl ut commodo, aliquam mattis.</Details>

                    <DetailHolder>
                    <ProfileInfo/>
                    <ProfileInfo head="She/Her" subhead="pronouns"headsize="23px"/>
                    <ProfileInfo head="Student" subhead="Occupation" headsize="23px"/>
                    <ProfileInfo head="BCIT" subhead="School" headsize="23px"/>
                    <AddButton></AddButton>
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
                    <AddButton></AddButton>
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
                    <AddButton></AddButton>
                    </DetailHolder>
                    </InfoHolder>
                </RightCont>
       
                <ButtonDiv>
                    <Button
                          title="Submit"
                          width="122px"
                          height="49px"
                          borderRadius="4px"
                          margin="2px"
                          fontSize="19px"
                    
                    ></Button>
                </ButtonDiv>
        </MainCont>
}

export default ManageProfile;