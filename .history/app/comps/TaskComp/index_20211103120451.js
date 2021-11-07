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

`
const Input = styled.input`
width: 230px;
height: 45px;
`


const TaskComp = ({

})=>{
  return<Cont>
 <InputCont>
 <Input type="text" placeholder="Add New Task"/>
 </InputCont>
  </Cont>
}
export default TaskComp