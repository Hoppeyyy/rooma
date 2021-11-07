import react from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Cont = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin-top: 60px;
`

const Head = styled.div`
font-size: 29px;
font-weight: 500;
color: #3E3D3D;
margin-bottom: 10px;
`

const Subhead = styled.div`
font-size: 25px;
font-weight: 400;
color: #7E7E7E;
margin-bottom: 20px;
`
/*
const Button = styled.button`
background-color: #714FE9;
border: none;
color: white;
padding: 15px 20px 15px 20px;
font-size: 16px;
font-weight: 600;
border-radius: 4px;
`
*/
const AddMembers = ({
heading="Add Members",
ps="Start by adding members",
title="Go to Community",
width="186px",
height="50px",
borderRadius="4.2px",
})=>{

return<Cont>
        <Head className="ubuntu">{heading}</Head>
        <Subhead className="opensans">{ps}</Subhead>
        <Button 
        title={title}
        width={width}
        height={height}
        margin="10px"
        borderRadius={borderRadius}
        border="none"
        bgcolor="#724FE9"
        fontcolor="white"
        fontSize="20px"
        fontWeight="700"
        onClick={()=>{

        }}
        />
       
      </Cont>
 
}
export default AddMembers