import react from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display:flex;
flex-direction:column;
width: 700px;
height: 600px;
box-shadow: 0px 4.0061163902282715px 47.07186508178711px 0px #0000001C;
border-radius: 20px;
`
const InputCont = styled.div`
display:flex;
margin: 20px;
justify-content: space-evenly;

`
const Input1 = styled.input`
padding: 20px 10px 10px 20px;
border: #C8C8C8 1px solid;
width: 200px;
font-size: 19px;
font-weight: 400;
border-radius: 10px;
margin-bottom: ${props=>props.marginbottom};
margin-top: 10px;
border:none;
background-color:#F6F6F6;
`
const Input2 = styled.input`
padding: 20px 10px 10px 20px;
border: #C8C8C8 1px solid;
width:400px;
font-size: 19px;
font-weight: 400;
border-radius: 10px;
margin-bottom: ${props=>props.marginbottom};
margin-top: 10px;
border:none;
background-color:#F6F6F6;

`
const Day = styled.div`
display:flex;
flex-direction: column;
margin: 20px 20px 10px 20px;

`
const Head = styled.div`
font-size: 25px;
font-weight: 700;
margin: 0px 0px 10px 25px;
color: #181135;
`
const ButtonCont =styled.div`
display:flex;
width: 90%;
margin: 10px 0px 10px 15px;
justify-content: space-evenly;

`
const DayButton = styled.button`
width: 65px;
height:50px;
font-size: 16px;
color: #181135;
font-weight: 600;
background: white;
border-radius: 13px;
border: 1px solid #DBDBDB;
`

const PtsButton = styled.button`
width: 65px;
height:50px;
font-size: 16px;
color: #181135;
font-weight: 700;
background: white;
border-radius: 13px;
border: 1px solid #DBDBDB;
`
const Span = styled.div`
font-size: 10px;
font-weight: 400;
color: #181135;
`

const TaskComp = ({

})=>{
  return<Cont>
 <InputCont>
 <Input1 type="text" placeholder="Add New Task"/> <Input2 type="text" placeholder="Description"/>
 </InputCont>

 <Day>
     <Head className="opensans">Day</Head>
     <ButtonCont>
     <DayButton className="opensans">Mon</DayButton>
     <DayButton className="opensans">Tues</DayButton>
     <DayButton className="opensans">Wed</DayButton>
     <DayButton className="opensans">Thurs</DayButton>
     <DayButton className="opensans">Fri</DayButton>
     <DayButton className="opensans">Sat</DayButton>
     <DayButton className="opensans">Sun</DayButton>
     </ButtonCont>
 </Day>

 <Day>
     <Head className="opensans">Points</Head>
     <ButtonCont>
     <PtsButton className="opensans">10 <Span>Points</Span></PtsButton>
     <PtsButton className="opensans">20 <Span>Points</Span></PtsButton>
     <PtsButton className="opensans">30 <Span>Points</Span></PtsButton>
     <PtsButton className="opensans">40 <Span>Points</Span></PtsButton>
     <PtsButton className="opensans">50 <Span>Points</Span></PtsButton>
     <PtsButton className="opensans">60 <Span>Points</Span></PtsButton>
     <PtsButton className="opensans">70 <Span>Points</Span></PtsButton>
    
    
     </ButtonCont>
 </Day>

 <Day>
     <Head className="opensans">Points</Head>
     <ButtonCont>
     <PtsButton className="opensans">10 <Span>Points</Span></PtsButton>
     <PtsButton className="opensans">20 <Span>Points</Span></PtsButton>
     <PtsButton className="opensans">30 <Span>Points</Span></PtsButton>
     <PtsButton className="opensans">40 <Span>Points</Span></PtsButton>
     <PtsButton className="opensans">50 <Span>Points</Span></PtsButton>
     <PtsButton className="opensans">60 <Span>Points</Span></PtsButton>
     <PtsButton className="opensans">70 <Span>Points</Span></PtsButton>
    
    
     </ButtonCont>
 </Day>


  </Cont>
}
export default TaskComp