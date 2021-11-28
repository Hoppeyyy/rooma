import react from 'react';
import styled from 'styled-components';
import Button from '../Button';

const MainCont = styled.div`
display:${props=>props.display};
flex-direction: column;
justify-content:center;
align-items:center;

`
const TabCont = styled.div`
display:flex;
flex-direction:row;
min-width: 700px;
align-items:center;
justify-content: flex-end;
margin-bottom: 25px;

`
const AddBtn = styled.div`
width:35px;
height:35px;
background-color:#7751E8;
border-radius:20px;
display:flex;
justify-content:center;
align-items:center;

`
const PlusIcon = styled.img`
width:20px;
height:20px;

`

const Tabs = ({
display="none",
onTabClick=()=>{},
})=>{
  return<MainCont display={display}>
<TabCont>
    <Button
    title="Garbage"
    width="120px"
    height="40px"
    borderRadius="18px"
    border="solid 1.8px"
    bgcolor="#ffffff"
    fontcolor="#7751E8"
    fontSize="16px"
    fontWeight="400"
    margin="15px"
    />
     <Button
    title="Garbage"
    width="120px"
    height="40px"
    borderRadius="18px"
    border="solid 1.8px"
    bgcolor="#ffffff"
    fontcolor="#7751E8"
    fontSize="16px"
    fontWeight="400"
    margin="15px"
    />
    <AddBtn>
    <PlusIcon src="/add.svg" onClick={onTabClick}/>
    </AddBtn>
  </TabCont>

  </MainCont>
}
export default Tabs