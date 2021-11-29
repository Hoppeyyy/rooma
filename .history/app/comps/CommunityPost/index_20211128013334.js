import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import Button from '../Button';
import {useState} from "react";
import SideProfile from '../SideProfile';

const MainCont = styled.div`
display: flex;
flex-direction: column;
width:${props=>props.width};
height: 326px;
padding:${props=>props.padding};
border-radius:24px;
box-shadow:${props=>props.boxShadow};
margin:${props=>props.margin};

`

const TitleCont =styled.div`
margin-left:15px;
width: 100%;

`

const ProfileFilterCont = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items:center;
padding-right:15px;
padding-left:15px;

`

const ProfileCont = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

`
const SmallProfileCont = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding:6px;
margin-left:7px;
`


const TextCont = styled.div`
width: 277px;
height: 100%;
margin-left:15px;



`

const BotCont = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items:center;

margin-left:15px;
padding-bottom:15px;
`
const LikeCommentCont = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

padding-bottom:15px;

`
const LikeCont = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width:50px;
height:19px;
align-items:center;

`
const CommentCont = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width:45px;
height:19px;
align-items:center;
margin-left: 35px;

`



//items in the div's

const Title = styled.p`
font-size:22px;
font-weight: 700;
color: #181135;
`

const Name = styled.p`
font-size:12px;
font-weight: 500;
margin:-2px;
`
const Time = styled.p`
font-size:9px;
font-weight: 400;
color:#7E7E7E; 
margin:-2px;
`
const Image = styled.img`
width: 38px;
height:38px;

`

const Text = styled.p`
font-size:12px;
font-weight: 600;
color:#7E7E7E; 
line-height:32px;
// background-color:orange;

`

const Icon = styled.img`
width: 18px;
height:18px;

` 
const LikeCount = styled.p`
font-size:15px;
font-weight: 700;


`
const CommentCount = styled.p`
font-size:15px;
font-weight: 700;
`






const CommunityPost = ({
    boxShadow="0px 4.0133771896362305px 11.036787033081055px 0px #00000014",
    margin="20px",
    padding="15px",
    width="340px",
    title="Any recommendations on resturaunts in Vancouver?",
    name="Floyd Miles",
    src="/Avatar3.png",
    button_title="restaurants",
    time="6h ago",
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    likeNum="100",
    CommentNum="10",
    onPostClick=()=>{},
    onProfileClick=()=>{},

}) => {
   
    return <MainCont boxShadow={boxShadow} margin={margin} padding={padding} width={width} onClick={onPostClick}>
                <TitleCont>
                    <Title className="ubuntu">{title}</Title>
                </TitleCont>
                <ProfileFilterCont>
                    <ProfileCont 
                    onClick={onProfileClick}>
                        <Image src={src}></Image>
                        <SmallProfileCont>
                            <Name className="opensans">{name}</Name>
                            <Time>{time}</Time>
                        </SmallProfileCont>
                    </ProfileCont>
                    <Button
                        title={button_title}
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
                </ProfileFilterCont>
                <TextCont>
                    <Text className="opensans">{text}</Text>
                </TextCont>
                <BotCont>
                    <LikeCommentCont>
                        <LikeCont>
                            <Icon src="/ThumbsUp_icon.svg"></Icon>
                            <LikeCount className="opensans">{likeNum}</LikeCount>
                        </LikeCont>
                        <CommentCont>
                            <Icon src="/Chat_icon.svg"></Icon>
                            <CommentCount className="opensans">{CommentNum}</CommentCount>
                        </CommentCont>
                    </LikeCommentCont>
                </BotCont>
        </MainCont>
}

export default CommunityPost;