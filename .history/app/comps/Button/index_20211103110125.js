import react from 'react';
import * as React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Buttonstyle = styled.button`
width:${props=>props.width};
height:${props=>props.height};
margin:${props=>props.margin};
border-radius:${props=>props.borderRadius};
border:${props=>props.border};
background-color:${props=>props.bgcolor};
color:${props=>props.fontcolor};
font-size:${props=>props.fontSize};
font-weight:${props=>props.fontWeight};
`
const Button = ({
title="Btn Title",
width="50px",
height="50px",
margin="10px",
borderRadius="10px",
border="none",
bgcolor="#724FE9",
fontcolor="white",
fontSize="20px",
fontWeight="700",
routeToColor="/pick_a_color",
}) => {

  const router = useRouter();
   return <Cont>
     
     <Buttonstyle 
     onClick={()=>router.push(routeToColor)}
     className="opensans"
     width={width}
     height={height}
     margin={margin}
     borderRadius={borderRadius}
    border={border}
    bgcolor={bgcolor}
    fontcolor={fontcolor}
    fontSize={fontSize}
    fontWeight={fontWeight}
     >{title}</Buttonstyle>
    </Cont>
    
}

export default Button;