import Image from 'next/image'
import styled from 'styled-components';
import CommunityPost from '../CommunityPost';
import UserComment from '../UserComment';
import CommeentInput from '../CommentInput';
const CtrlCont = styled.div`
visibility:${props=>props.visibility};
display:flex;
flex-direction:column;
align-items:center;
height:100vh;
box-shadow: 0px 4.0133771896362305px 11.036787033081055px 0px #00000014;
`
const TopCont = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
height:50%;
border-bottom: 1px solid #EDEDED;
`
const BotCont = styled.div`
width:100%;
display:flex;
flex-direction:column;
padding:0 50px 0 50px;
justify-content:space-between;
height:50%;
`


const CommentArea = styled.div`

`
const InputArea = styled.div`

`
const Comments = ({
visibility="hidden",
title="Any recommendations on resturaunts in Vancouver?",
name="Floyd Miles",
src="/Avatar3.png",
button_title="restaurants",
time="6h ago",
text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
likeNum="100",
CommentNum="10",
})=>{
  return<CtrlCont visibility={visibility}>
    <TopCont>
    {/*needs to show the post clicked by user */}
    <CommunityPost
    width="70%"
    margin=""
    padding=""
    boxShadow=""
    title={title}
    name={name}
    src={src}
    button_title={button_title}
    time={time}
    text={text}
    likeNum={likeNum}
    CommentNum={CommentNum}
    />
  </TopCont>
  <BotCont>
    <CommentArea>
    <UserComment
      src="upload_pic.png"
      UserName="Jane Williams"
      MsgTime="1hr"
      Content="Thank you for the info! I’m interested!"
    />
     <UserComment
      src="upload_pic.png"
      UserName="Kristine"
      MsgTime="50min"
      Content="This is a private message"
    />
    </CommentArea>
    <InputArea>
    <CommeentInput/>
    </InputArea>
  </BotCont>
  </CtrlCont>
}
export default Comments;