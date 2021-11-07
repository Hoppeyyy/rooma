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

`
const Head = styled.div`

`

const TaskComp = ({

})=>{
  return<Cont>
 <InputCont>
 <Input1 type="text" placeholder="Add New Task"/> <Input2 type="text" placeholder="Description"/>
 </InputCont>
  </Cont>
}
export default TaskComp