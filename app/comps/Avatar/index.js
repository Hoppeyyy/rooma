import react from 'react';
import styled from 'styled-components';

const AvatarBox = styled.div`
display:flex;
flex-direction:row;
`
const Avatar = styled.img`
width:45px;
height:45px;
position:relative;
left:90px;
top:-10px;
margin-left:-20px;
`
const Avatar = ({
  /*
  handleChange=()=>{},
  checked="checked",
  */
  src="/upload_pic.png",
  onClick=()=>{},

})=>{

return<AvatarBox>
        <Avatar 
        src={src}
        onClick={onClick}
        />
       
      </AvatarBox>
 
}
export default Avatar