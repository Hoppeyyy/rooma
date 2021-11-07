import react from 'react';
import styled from 'styled-components';
import RemindContent from '../RemindContent';
const Cont = styled.div`
display:flex;
margin-top:20px;
display:${props=>props.display};
`
const CardCont = styled.div`
width:${props=>props.width};
height:${props=>props.height};
border-radius:${props=>props.borderRadius};
background-color:white;
box-shadow: 0px 4.353448867797852px 51.15302276611328px 0px #0000001C;
`
const More = styled.div`
display:${props=>props.display};
text-align:center;
flex-direction:row;
color:#7751E8;
font-weight: 600;
justify-content:center;

`
const Ps = styled.p`
`
const Icon = styled.img`
width:13px;
height:8px;
margin-top:20px;
margin-left:15px;
`
/* After expanding completed button on the top*/
const ExpandedCont = styled.div`
display:${props=>props.display};
width:685px;
height:360px;
flex-direction:column;
`
const MoreAfterCont = styled.div`
width:685px;
height:45px;
text-align:center;
position:absolute;
top:805px;
`

const MoreAfter = styled.div`
width:685px;
text-align:center;
color:#7751E8;
`
const Divider = styled.hr`
border-top: 1px solid #E8E8E8;
`
const Icon2 = styled.img`
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
const Completed = ({
display="flex",
width="235px",
height="47px",
borderRadius="8px",
more_display="flex",
onCompleteClick=()=>{},

/* After expanding completed button on the top */

more_after_display="none",
onCompleteClick_After=()=>{},
})=>{
  return<Cont display={display} onClick={onCompleteClick}>
    <CardCont width={width} height={height} borderRadius={borderRadius}>
    <More display={more_display}>
      <Ps>Completed</Ps>
      <Icon src="/down_arrow.png"/>
    </More>
    
    {/* After expanding completed button on the top*/}
    <ExpandedCont display={more_after_display}>
      <Heading className="ubuntu">Completed</Heading>
      {/* Suppose to put completed tasks here */}
      <RemindContent
      bgcolor="rgba(240,199,137,30%)"
      visibility="visible"
      task_name="Task Name"
      vlcolor="#F0C789"
      name="Name"
      date="5:00-7:00PM"
      />
      <MoreAfterCont onClick={onCompleteClick_After}>
      <MoreAfter className="opensans"><Divider/>more <Icon2 src="/down_arrow.png"/></MoreAfter>
      </MoreAfterCont>
    </ExpandedCont>
    </CardCont>
  </Cont>
}
export default Completed