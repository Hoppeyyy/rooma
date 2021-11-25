import react from 'react';
import styled from 'styled-components';
import Button from '../Button';
import ToggleBtn from '../ToggleBtn';


const Cont = styled.div`
display:flex;
margin-top:20px;
`
const CardCont = styled.div`
width:720px;
height:${props=>props.height};
background-color:white;
box-shadow: 0 4px 17px 0 rgba(0, 0, 0, 0.2);
border-radius:22px;

`
const TopCont = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin-left:20px
`
const TabCont = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
position:relative;
left:50px;
width:87%;
justify-content:space-between;
`
const BtmCont = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`
const InsertOption = styled.div`
display:flex;
flex-direction:row;
margin-right:20px;
margin-top:8px;


`
const GroupOption = styled.div`
display:flex;
flex-direction:column;
margin-left:20px;
`
const GroupTop = styled.div`
display:flex;
flex-direction:row;
`

const ToggleBox = styled.div`
display:flex;
margin-top:15px;
margin-left:10px;
`
const AvatarBox = styled.div`
display:flex;
flex-direction:row;
// visibility:${props=>props.visibility};
visibility:visible;
`
const Heading = styled.h3`
font-size: 21px;
font-weight: 500;
color: #181135;
margin:0;
margin-top:20px;
margin-left:30px;
margin-bottom:20px;
`
const Icon = styled.img`
width:19px;
height:19px;
margin-top:20px;
margin-right:45px;
`
const Input = styled.input`
background-color:#F4F4F4;
border:none;
border-radius:10px;
margin-top:10px;
margin-left:50px;
width:630px;
height:100px;
text-indent:15px;
`
const Insert = styled.img`
width:83px;
height:25px;
margin-top:20px;
margin-left:10px;
margin-right:20px;
`
const RightCont = styled.div`
display:flex;
flex-direction:column;
`
const ButtonArea = styled.div`
margin-top:60px;
margin-right: -50px;
`
const Avatar = styled.img`
width:45px;
height:45px;
position:relative;
left:50px;
top:-10px;
margin-left:-20px;

`
const AddCont = styled.div`
display:${props=>props.display};
`
const AddPost = ({


  height="65px",
 visibility="visible",
 display="none",
 btn_bgcolor1="#ffffff",
 btn_bgcolor2="#ffffff",
 btn_bgcolor3="#ffffff",
 btn_bgcolor4="#ffffff",
 btn_bgcolor5="#ffffff",
 btn_bgcolor6="#ffffff",
 btn_bgcolor7="#ffffff",
 btn_bgcolor8="#ffffff",
 fontcolor1="#7751E8",
 fontcolor2="#7751E8",
 fontcolor3="#7751E8",
 fontcolor4="#7751E8",
 fontcolor5="#7751E8",
 fontcolor6="#7751E8",
 fontcolor7="#7751E8",
 fontcolor8="#7751E8",
  onAddClick=()=>{},
  onToggleClick=()=>{},
  onPostClick=()=>{},

  onBtnClick1=()=>{},
  onBtnClick2=()=>{},
  onBtnClick3=()=>{},
  onBtnClick4=()=>{},
  onBtnClick5=()=>{},
  onBtnClick6=()=>{},
  onBtnClick7=()=>{},
  onBtnClick8=()=>{},
})=>{

return<Cont>
  <CardCont height={height}>
  <TopCont>
  <Heading className="opensans">Add a New Post</Heading>
  <Icon src="/p_add.png" onClick={onAddClick}/>
  </TopCont>
  <AddCont display={display}>
  <TabCont>
    <Button
    title="Roommates"
    width="114.16px"
    height="27px"
    margin="10px"
    borderRadius="18px"
    border="solid 1.8px"
    bgcolor={btn_bgcolor1}
    fontcolor={fontcolor1}
    fontSize="10px"
    fontWeight="400"
    onClick={onBtnClick1}
    />
    <Button
    title="Event"
  width="114.16px"
    height="27px"
    margin="10px"
    borderRadius="18px"
    border="solid 1.8px"
    bgcolor={btn_bgcolor2}
    fontcolor={fontcolor2}
    fontSize="10px"
    fontWeight="400"
    onClick={onBtnClick2}
    />
    <Button
    title="School"
    width="114.16px"
    height="27px"
    margin="10px"
    borderRadius="18px"
    border="solid 1.8px"
    bgcolor={btn_bgcolor3}
    fontcolor={fontcolor3}
    fontSize="10px"
    fontWeight="400"
    onClick={onBtnClick3}
    />
    <Button
    title="Work"
    width="114.16px"
    height="27px"
    margin="10px"
    borderRadius="18px"
    border="solid 1.8px"
    bgcolor={btn_bgcolor4}
    fontcolor={fontcolor4}
    fontSize="10px"
    fontWeight="400"
    onClick={onBtnClick4}
    />
     <Button
    title="Information"
    width="114.16px"
    height="27px"
    margin="10px"
    borderRadius="18px"
    border="solid 1.8px"
    bgcolor={btn_bgcolor5}
    fontcolor={fontcolor5}
    fontSize="10px"
    fontWeight="400"
    onClick={onBtnClick5}
    />

     <Button
    title="Commute"
    width="114.16px"
    height="27px"
    margin="10px"
    borderRadius="18px"
    border="solid 1.8px"
    bgcolor={btn_bgcolor6}
    fontcolor={fontcolor6}
    fontSize="10px"
    fontWeight="400"
    onClick={onBtnClick6}
    />
     <Button
    title="Restaurants"
    width="114.16px"
    height="27px"
    margin="10px"
    borderRadius="18px"
    border="solid 1.8px"
    bgcolor={btn_bgcolor7}
    fontcolor={fontcolor7}
    fontSize="10px"
    fontWeight="400"
    onClick={onBtnClick7}
    />
     <Button
    title="Other"
    width="114.16px"
    height="27px"
    margin="10px"
    borderRadius="18px"
    border="solid 1.8px"
    bgcolor={btn_bgcolor8}
    fontcolor={fontcolor8}
    fontSize="10px"
    fontWeight="400"
    onClick={onBtnClick8}
    />
  </TabCont>  

  <Input type="text" name="text" placeholder="Add a new post here"/>
  <BtmCont>
    <GroupOption>
    <GroupTop>
    <Heading className="opensans">Post as group</Heading>
    <ToggleBox>
    <ToggleBtn
      onClick={onToggleClick}
    />
    </ToggleBox>
    </GroupTop>
    <AvatarBox visibility={visibility}>
      <Avatar
      src="/upload_pic.png"
      onClick={() =>{
        
      }} 
      />
      <Avatar
      src="/upload_pic.png"
      onClick={() =>{
        
      }} 
      />
      <Avatar
      src="/Avatar3.png"
      onClick={() =>{
        
      }} 
      />
    </AvatarBox>
    </GroupOption>
    <RightCont>
    <InsertOption>
    <Insert src="/Insert_Image.png"/>
    <Insert src="/Insert_Video.png"/>
    </InsertOption>
    <ButtonArea>
    <Button
      title="Post"
      width="110px"
      height="40px"
      margin="10px"
      borderRadius="5px"
      border="none"
      bgcolor="#714FE9"
      fontcolor="white"
      fontSize="20px"
      fontWeight="400"
      onClick={onPostClick}
      />
      </ButtonArea>
      </RightCont>
  </BtmCont>
  </AddCont>
  </CardCont>
</Cont>
}
export default AddPost