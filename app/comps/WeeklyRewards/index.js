import react from 'react';
import styled from 'styled-components';
import WeeklyUserCont from '../WeeklyUserCont';

const Cont = styled.div`
display:flex;
flex-direction:column;
display:${props=>props.display};

`
const Heading = styled.h3`
font-size: 25px;
font-weight: 700;
color: #181135;
margin:0;
margin-top:20px;
margin-bottom:20px;
`
const UserCont = styled.div`
display:flex;
flex-direction:row;
`

const WeeklyRewards = ({
  src="/Avatar.png",
  user_name="User Name",
  user_point="0 pts",
  display="block",
})=>{
  return<Cont display={display}>
    <Heading className="opensans">Weekly Rewards</Heading>
    <UserCont>
    <WeeklyUserCont
    src={src}
    user_name={user_name}
    user_point={user_point}
    />
    </UserCont>
  </Cont>
}
export default WeeklyRewards