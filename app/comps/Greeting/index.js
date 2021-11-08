import react from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display:flex;
flex-direction:column;
width:${props=>props.width};
height:${props=>props.height};
`
const Heading = styled.h3`
font-size: 34px;
font-weight: 700;
color: #181135;
margin:0;
margin-top:20px;
`
const Ps = styled.p`
visibility:${props=>props.visibility};
margin:0;
margin-top:5px;
`
const Greeting = ({
width="200px",
height="100px",
heading="User",
ps="Welcome",
visibility="visible"
})=>{
  return<Cont width={width} height={height}>
    <Heading className="ubuntu">
      Hello {heading}
    </Heading>
    <Ps visibility={visibility} className="opensans">
      {ps}
    </Ps>
  </Cont>
}
export default Greeting;