import Image from 'next/image'
import styled from 'styled-components';



const CtrlCont = styled.div`
display:${props=>props.display};
flex-direction:column;
align-items:center;
width:411px;
height:100vh;
box-shadow: 0px 4.0133771896362305px 11.036787033081055px 0px #00000014;
`

const ArrowCont = styled.div`
margin-top: 20px;
width: 257px;
`

const ArrowImg = styled.img`

`
const MidCont = styled.div`
display:flex;
flex-direction: column;
justify-content: center; 
align-items: center; 
text-align: center
`

const Img = styled.img`
width: 101px;
height: 101px;
margin-top: 15px;

`
const Name = styled.p`
font-size: 32.5px;
font-weight: 700;
margin-top: 10px;

`
const Point = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 28.8985px;
  width: 109.69px;
  height: 39px;
  background: linear-gradient(90deg, #9351e8 0%, #6853e9 51.56%, #504edb 100%);
  font-size: 16px;
  color: white;
  font-weight: 600;
  font-size: 15.97px;
  margin-top: -10px;
`;



const BotCont = styled.div`
display:flex;
flex-direction: column;
width: 80%;
height: 100%;
align-items:left;
margin-top: 40px;

`
// duplicate
const ProfileText = styled.p`
font-size:18.07px;
font-weight: 700;

`
const Info = styled.p`
font-size:16px;
font-weight: 400;
margin-top: -5px;
margin-bottom: 50px;
width: 100%;
`

// duplicate
const RowCont = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between

`

const SquareInfo = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
aligh-items: center;
text-align: center;
width:63px;
height: 73px;
background-color:#F6F5FE;
border-radius:13.36px;
margin-bottom: 40px;

`
const BoldText = styled.p`
font-size:14px;
font-weight: 700;
color: #7751E8;
margin-bottom:10px;
`

const ThinText = styled.p`
font-size:9.54px;
font-weight: 400;
color: #8975C8;
margin-top:5px;

`
const BoldText2 = styled.p`
font-size:14px;
font-weight: 700;
color: #7751E8;
margin-bottom:10px;
margin-bottom:15px;
`

const ThinText2 = styled.p`
font-size:9.54px;
font-weight: 400;
color: #8975C8;
margin-top:-10px;

`
// const ThinCont = styled.div`
// display:flex;
// flex-direction:column;
// justify-content: center;
// aligh-items: center;
// text-align: center;
// background-color: pink;
// `

const ButInfo = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
aligh-items: center;
text-align: center;
width: 63.69px;
height: 21.98px;
border-radius:20.76px;
border-color: #7751E8;
border-width: 0.5px;
border-style:solid;
font-size: 7.89px;
color: #7751E8;
font-weight: 500;
margin-bottom: 40px;

`


const SideProfile = ({
    display="none",
    onBackArrowClick=()=>{},
})=>{
  return<CtrlCont display={display}>
      <ArrowCont>
          <ArrowImg src="/Back-Arrow.svg" onClick={onBackArrowClick} ></ArrowImg>
      </ArrowCont>
      <MidCont>
          <Img src="/Avatar2.png"></Img>
          <Name>Hailey Kim</Name>
          <Point> 500 pts</Point>
      </MidCont>
      <BotCont>
          <ProfileText> Profile</ProfileText>
          <Info>At vero eos et accusamus et iusto odio dignis ducimus qui blanditiis praesentium voluptatum turhem. </Info>
            <RowCont>
                <SquareInfo>
                    <BoldText>25</BoldText>
                    <ThinText>Age</ThinText>
                </SquareInfo>
                <SquareInfo>
                    <BoldText>She/Her</BoldText>
                    <ThinText>Pronouns</ThinText>
                </SquareInfo>
                <SquareInfo>
                    <BoldText>Student</BoldText>
                    <ThinText>Occupation</ThinText>
                </SquareInfo>
                <SquareInfo>
                    <BoldText2>BCIT</BoldText2>
                 
                        <ThinText2>School</ThinText2>
                        <ThinText2>Company</ThinText2>
                
                </SquareInfo>
            </RowCont>
            <ProfileText>Preference</ProfileText>
            <RowCont>
                <ButInfo>No Pets</ButInfo>
                <ButInfo>No smokers</ButInfo>
                <ButInfo>No loud noises</ButInfo>
                <ButInfo>Respect</ButInfo>
            </RowCont>
            <ProfileText>Hobbies</ProfileText>
            <RowCont>
                <ButInfo>Music</ButInfo>
                <ButInfo>Sports</ButInfo>
                <ButInfo>Art</ButInfo>
                <ButInfo>Reading</ButInfo>
            </RowCont>
      </BotCont>

   
      

  </CtrlCont>
}
export default SideProfile;