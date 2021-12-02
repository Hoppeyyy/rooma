import react from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Cont = styled.div`
display:flex;
margin-left:30px;
margin-bottom:10px;
display:${props=>props.display};
`
const CardCont = styled.div`
display:flex;
flex-direction:row;
width:630px;
height:92px;
background-color:${props=>props.bgcolor};
border-radius:15px;
`
const LeftCont = styled.div`
display:flex;
flex-grow:1;
`
const MainCont = styled.div`
display:flex;
flex-direction:column;
flex-grow:8;
`
const RightCont = styled.div`
display:flex;
flex-grow:1.5;
`
const VerLine = styled.div`
border-left: 3px solid;
border-left-color:${props=>props.vlcolor};
border-radius:10px;
height: 60px;
margin-left:20px;
margin-top:15px;
`
const Heading = styled.h3`
font-size: 19px;
color: #3E3D3D;
margin:0;
margin-top:20px;

`
const Details = styled.p`
font-size:14.5px;
margin-top:5px;
color: #5C5C5C;
`
const Span = styled.span`
font-weight:700;
color: #5C5C5C;
`

const CheckBtn = styled.input`
margin-top:35px;
margin-left:200px;
width:26px;
height:26px;

`
/*
const Radios = document.getElementsByTagName('input');
for(i=0; i<Radios.length; i++ ) {
    Radios[i].onclick = function(e) {
        if(e.ctrlKey || e.metaKey) {
            this.checked = false;
        }
    }
}*/
const Completed_RemindContent = ({
  bgcolor="rgba(240,199,137,30%)",
  display="none",
  task_name="Task Name",
  vlcolor="#F0C789",
  name="Name",
  date="5:00-7:00PM",
  checked="defaultChecked"
  })=>{
  return<Cont display={display}>
    <CardCont bgcolor={bgcolor}>
      <LeftCont>
      <VerLine vlcolor={vlcolor}/>
      </LeftCont>
      <MainCont>
      <Heading className="opensans">{task_name}</Heading>
      <Details className="opensans"><Span>{name} </Span>{date}</Details>
      </MainCont>
      <RightCont>
      {/* <CheckBtn 
      type="radio" 
      checked={checked}
      /> */}
      </RightCont>
    </CardCont>
  </Cont>
  }
  export default Completed_RemindContent