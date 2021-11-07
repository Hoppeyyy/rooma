import react from 'react';
import styled from 'styled-components';
import RemindContent from '../RemindContent';
import Completed from '../Completed';
import WeeklyRewards from '../WeeklyRewards';

const Cont = styled.div`
display:flex;
flex-direction:column;
margin-top:20px;
height:100vh;

`
const CardCont = styled.div`
width:685px;
height:${props=>props.height};
background-color:white;
box-shadow: 0px 4.014px 47.8px 0px #0000001C;
border-radius:22px;
`
const TopCont = styled.div`
display:flex;
flex-direction:column;
flex-grow:1.5;
`
const BotCont = styled.div`
display:flex;
flex-grow:1;
`
const Heading = styled.h3`
font-size: 25px;
font-weight: 700;
color: #181135;
margin:0;
margin-top:20px;
margin-left:20px;
margin-bottom:20px;
`
const DefMessage = styled.p`
visibility:${props=>props.visibility};
text-align:center;
margin-top:10px;
`
const MoreCont = styled.div`
display:flex
width:685px;
height:45px;
text-align:center;
position:absolute;
top:${props=>props.top};

`
const More = styled.div`
width:685px;
text-align:center;
color:#7751E8;
`
const Divider = styled.hr`
border-top: 1px solid #E8E8E8;

`
const Icon = styled.img`
`

const Reminder = ({
  heading="Today",
  visibility="visible",
  height="340px",
  top="435px",
  title="more ",
  complete_display="block",
  more_display="flex",
  complete_width="235px",
  complete_height="47px",
  complete_borderRadius="8px",
  rewards_display="block",
  more_after_display="none",
  onMoreClick=()=>{},
  onCompleteClick=()=>{},
  /* After expanding completed button on the top */
  onCompleteClick_After=()=>{},
})=>{
return<Cont>
  <TopCont>
  {/*Main task cont within CardCont */}
  <CardCont height={height}>
  <Heading className="ubuntu">{heading}</Heading>
    <RemindContent
     bgcolor="rgba(240,199,137,30%)"
     visibility="visible"
     task_name="Task Name"
     vlcolor="#F0C789"
     name="Name"
     date="5:00-7:00PM"
    />
    <DefMessage className="opensans" visibility={visibility}>Nothing is scheduled for today.</DefMessage>
    <MoreCont onClick={onMoreClick} top={top}>
    <More className="opensans"><Divider/>{title}<Icon src="/down_arrow.png"/></More>
    </MoreCont>
  </CardCont>
  {/*completed cont */}
  <Completed 
  display={complete_display}
  onCompleteClick={onCompleteClick}
  width={complete_width}
  height={complete_height}
  borderRadius={complete_borderRadius}
  more_display={more_display}
  more_after_display={more_after_display}

  /* After expanding completed button on the top */
  
  onClick={onCompleteClick_After}
  />
  </TopCont>
  {/*WeeklyRewards cont */}
  <BotCont>
  <WeeklyRewards display={rewards_display}/>
  </BotCont>
</Cont>
}
export default Reminder