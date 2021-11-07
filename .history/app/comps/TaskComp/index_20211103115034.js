import react from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display:flex;
flex-direction:row;
width:${props=>props.width};
height:${props=>props.height};
background:linear-gradient(to top right,rgba(147,81,232,100%),rgba(104,83,233,100%),rgba(80,78,219,100%));
border-radius:30px;
align-items:center;
justify-content:center;
`

const Point = styled.p`
font-size: 14px;
font-weight:700;
color: #ffffff;
margin:0;

`


const PointCont = ({
width="100px",
height="35px",
user_point="100 pts",
})=>{
  return<Cont width={width} height={height}>
   <Point>{user_point}</Point>
  </Cont>
}
export default PointCont