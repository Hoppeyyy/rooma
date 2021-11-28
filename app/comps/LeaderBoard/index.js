import Image from 'next/image'
import styled from 'styled-components';
import SmallMembersProfile from '../SmallMembersProfile';


const CtrlCont = styled.div`
display:${props=>props.display};
// display:flex;
flex-direction:column;
align-items:center;
width:411px;
height:100vh;
box-shadow: 0px 4.0133771896362305px 11.036787033081055px 0px #00000014;
`

const TopCont = styled.div`
display:flex;
flex-direction: column;
width: 250px;
left:10px;
margin-bottom: -40px;
margin-top:20px;
`

const InnerCont = styled.div`
display:flex;
flex-direction: row:
`

const Title = styled.p`
font-size: 26.88px;
font-weight: 700;
`
const Star = styled.img`
margin-top:-33px;

`
const Header2 = styled.p`
font-size: 17.69px;
font-weight: 700;
color:#554FDE;
margin-left:10px;
margin-top:-15px;
`

const ProfileCont = styled.div`
margin-top: 25px;

`

const LeaderBoard = ({
    display="flex",
    onProfileClick=()=>{},
    onBackArrowClick=()=>{},
})=>{
  return<CtrlCont display={display}>

      <TopCont>
          <Title className="ubuntu">LeaderBoard</Title>
          <InnerCont>
              <Star src="/Purple_Star.svg" onClick={onBackArrowClick}></Star>
              <Header2 className="opensans"> Weekly Top 5 Users</Header2>
          </InnerCont>
      </TopCont>
      
      <ProfileCont onClick={onProfileClick}>
          <SmallMembersProfile/>
      </ProfileCont >
      <ProfileCont onClick={onProfileClick}>
          <SmallMembersProfile/>
      </ProfileCont>
      <ProfileCont onClick={onProfileClick}>
          <SmallMembersProfile/>
      </ProfileCont>
      <ProfileCont onClick={onProfileClick}>
          <SmallMembersProfile/>
      </ProfileCont >
      <ProfileCont onClick={onProfileClick}>
          <SmallMembersProfile/>
      </ProfileCont>
      

  </CtrlCont>
}
export default LeaderBoard;