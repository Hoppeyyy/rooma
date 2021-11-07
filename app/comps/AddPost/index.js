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
height:345px;
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
margin-left:40px
`
const BtmCont = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`
const InsertOption = styled.div`
display:flex;
flex-direction:row;
margin-left:40px

`
const GroupOption = styled.div`
display:flex;
flex-direction:column;
margin-right:50px;

`
const GroupTop = styled.div`
display:flex;
flex-direction:row;
`

const ToggleBox = styled.div`
display:flex;
margin-top:10px;
margin-left:10px;
`
const AvatarBox = styled.div`
display:flex;
flex-direction:row;
visibility:${props=>props.visibility};
`
const Heading = styled.h3`
font-size: 21px;
font-weight: 500;
color: #181135;
margin:0;
margin-top:20px;
margin-left:20px;
margin-bottom:20px;
`
const Icon = styled.img`
width:19px;
height:19px;
margin-top:20px;
margin-right:30px;
`
const AddBtn = styled.div`
width:30px;
height:30px;
margin:10px;
background-color:#7751E8;
border-radius:20px;

`
const PlusIcon = styled.img`
width:13px;
height:13px;
margin-top:8px;
margin-left:8px;
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
const Avatar = styled.img`
width:45px;
height:45px;
position:relative;
left:140px;
top:-10px;
margin-left:-20px;
`
const AddPost = ({
 visibility="hidden",
  onAddClick=()=>{},
  onToggleClick=()=>{},
})=>{

return<Cont>
  <CardCont>
  <TopCont>
  <Heading className="opensans">Add a New Post</Heading>
  <Icon src="/p_add.png" onClick={onAddClick}/>
  </TopCont>
  <TabCont>
    <Button
    title="Roommates"
    width="87px"
    height="27px"
    margin="10px"
    borderRadius="18px"
    border="solid 1.8px"
    bgcolor="#ffffff"
    fontcolor="#7751E8"
    fontSize="10px"
    fontWeight="400"
    />
    <Button
    title="Event"
    width="87px"
    height="27px"
    margin="10px"
    borderRadius="18px"
    border="solid 1.8px"
    bgcolor="#ffffff"
    fontcolor="#7751E8"
    fontSize="10px"
    fontWeight="400"
    />
    <Button
    title="School"
    width="87px"
    height="27px"
    margin="10px"
    borderRadius="18px"
    border="solid 1.8px"
    bgcolor="#ffffff"
    fontcolor="#7751E8"
    fontSize="10px"
    fontWeight="400"
    />
    <Button
    title="Resturants"
    width="87px"
    height="27px"
    margin="10px"
    borderRadius="18px"
    border="solid 1.8px"
    bgcolor="#ffffff"
    fontcolor="#7751E8"
    fontSize="10px"
    fontWeight="400"
    />
    <AddBtn>
    <PlusIcon src="/w_add.png"/>
    </AddBtn>
  </TabCont>
  <Input type="text" name="text" placeholder="Add a new post here"/>
  <BtmCont>
    <InsertOption>
    <Insert src="/Insert_Image.png"/>
    <Insert src="/Insert_Video.png"/>
    </InsertOption>
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
      src="/Avatar.png"
      onClick={() =>{
        
      }} 
      />
      <Avatar
      src="/Avatar.png"
      onClick={() =>{
        
      }} 
      />
      <Avatar
      src="/Avatar.png"
      onClick={() =>{
        
      }} 
      />
    </AvatarBox>
    </GroupOption>
  </BtmCont>
  </CardCont>
</Cont>
}
export default AddPost