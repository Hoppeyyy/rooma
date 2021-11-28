import react from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display:flex;
width: 120px;
height: 150px;
background: #6C4CE90F;
border-radius: 13px;
flex-direction: column;
justify-content: center;
align-items:center;
margin-top: 30px;
margin-right:10px;

`
const Head = styled.div`
font-size: ${props=>props.headsize};
color: #7751E8;
font-weight: 700;
margin-bottom: 10px;
`

const Subhead = styled.div`
font-size:15px;
color: #8975C8;

`


const ProfileInfo= ({
headsize="25px",
head="25",
subhead="Age"

})=>{
  return<Cont>
    <Head headsize={headsize} className="opensans">{head}</Head>
    <Subhead className="opensans">{subhead}</Subhead>
  </Cont>
}
export default ProfileInfo