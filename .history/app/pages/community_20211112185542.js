import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import React from 'react';
import NavBar2 from '../comps/NavBar2';
import AddPost from '../comps/AddPost'
import {useState} from 'react';
import CommunityPost from '../comps/CommunityPost';
import Comments from '../comps/Comments';
import FilterOptionsButton from '../comps/FilterOptionsButton';
import AddFilter from '../comps/AddFilter';

const Cont = styled.div`
  display:flex;
  width:100%;
  height:100%;
  flex-direction:row;
`
const GlbNav = styled.div`
  display:flex;
  flex-direction:column;
  flex-grow:1;
  position:fixed;
`
const MainCont = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  flex-grow:3;
  margin-left: 300px;
`
const PostArea1 = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
  margin-top:50px;
`
const PostArea2 = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
  margin-top:20px;
`
const RightCont = styled.div`
  display:flex;
  flex-direction:column;
  flex-grow:1;

`


const FilterButtonDiv = styled.div`
  display:flex;
  margin-top:50px;
  width:720px;
  justify-content: flex-end;
`

const AddFilterDiv = styled.div`
  margin-top: 20px;
`

export default function Community() {
  
  const [checked, setChecked] = useState(0);
  const [buttonstate1, setButtonState1] = useState(0);
  const [buttonstate5, setButtonState5] = useState(0);
  const [buttonstate2, setButtonState2] = useState(0);
  const [onPostClick, setPostClick] =useState(0);
  // ADD POST: useState Function 
  const [buttonstate6, setButtonState6] = useState(0);
  const [buttonstate7, setButtonState7] = useState(0);
  const [buttonstate8, setButtonState8] = useState(0);
  const [buttonstate9, setButtonState9] = useState(0);
  const [buttonstate10, setButtonState10] = useState(0);
  const [buttonstate11, setButtonState11] = useState(0);
  const [buttonstate12, setButtonState12] = useState(0);
  const [buttonstate13, setButtonState13] = useState(0);


  // ADD FILTER: useState Function
  const [buttonstate14, setButtonState14] = useState(0);
  const [buttonstate15, setButtonState15] = useState(0);
  const [buttonstate16, setButtonState16] = useState(0);
  const [buttonstate17, setButtonState17] = useState(0);
  const [buttonstate18, setButtonState18] = useState(0);
  const [buttonstate19, setButtonState19] = useState(0);
  const [buttonstate20, setButtonState20] = useState(0);
  const [buttonstate21, setButtonState21] = useState(0);

  //Hide/Show Filter Comp 
  const [showFilterComp, setShowFilterComp] = useState(0);
  const ClickFilterButton = () =>{
    if (showFilterComp === 0){
      setShowFilterComp(1);
  }else{
      setShowFilterComp(0);
  }
}



  const HandleToggleClick = () =>{
    if (checked === 0){
    setChecked(1);
  }else{
    setChecked(0);
  }
  }
  const HandleAddClick = () =>{
    if (buttonstate1=== 0){
    setButtonState1(1);
  }else{
    setButtonState1(0);
  }
  }
  // posting new post by clicking post button
  const HandleAddPost = () =>{
    if (buttonstate2=== 0){
    setButtonState2(1);
  }else{
    setButtonState2(0);
  }
  }
  // global nav click
  const GlobalNavClick = () =>{
    if (buttonstate5===0){
    setButtonState5(1);
  }else{
    setButtonState5(0);
  }
  }

  // Post clikced 
  // needs to increase the number of useState depending on the post number.
  // post content in comment comp will change depending on the post the user's clicked
  // now is static since hard to imagine how many posts will be there...
  const PostClick=()=>{
    if(onPostClick ===0){
      setPostClick(1);

    }else{
      setPostClick(0);
    }
  }
  // ADD POST: Btn options handling from here
  const Btn1= () =>{
    if (buttonstate6===0){
    setButtonState6(1);
  }else{
    setButtonState6(0);
  }
  }
  const Btn2= () =>{
    if (buttonstate7===0){
    setButtonState7(1);
  }else{
    setButtonState7(0);
  }
  }
  const Btn3= () =>{
    if (buttonstate8==0){
    setButtonState8(1);
  }else{
    setButtonState8(0);
  }
  }
  const Btn4= () =>{
    if (buttonstate9===0){
    setButtonState9(1);
  }else{
    setButtonState9(0);
  }
  }
  const Btn5= () =>{
    if (buttonstate10===0){
    setButtonState10(1);
  }else{
    setButtonState10(0);
  }
  }
  const Btn6= () =>{
    if (buttonstate11===0){
    setButtonState11(1);
  }else{
    setButtonState11(0);
  }
  }
  const Btn7= () =>{
    if (buttonstate12===0){
    setButtonState12(1);
  }else{
    setButtonState12(0);
  }
  }
  const Btn8= () =>{
    if (buttonstate13===0){
    setButtonState13(1);
  }else{
    setButtonState13(0);
  }
  }  
  
  
  
  
  // ADD FILTER: Btn options handling from here
  const Btn9= () =>{
    if (buttonstate14===0){
    setButtonState14(1);
  }else{
    setButtonState14(0);
  }
  }
  const Btn10= () =>{
    if (buttonstate15===0){
    setButtonState15(1);
  }else{
    setButtonState15(0);
  }
  }
  const Btn11= () =>{
    if (buttonstate16==0){
    setButtonState16(1);
  }else{
    setButtonState16(0);
  }
  }
  const Btn12= () =>{
    if (buttonstate17===0){
    setButtonState17(1);
  }else{
    setButtonState17(0);
  }
  }
  const Btn13= () =>{
    if (buttonstate18===0){
    setButtonState18(1);
  }else{
    setButtonState18(0);
  }
  }
  const Btn14= () =>{
    if (buttonstate19===0){
    setButtonState19(1);
  }else{
    setButtonState19(0);
  }
  }
  const Btn15= () =>{
    if (buttonstate20===0){
    setButtonState20(1);
  }else{
    setButtonState20(0);
  }
  }
  const Btn16= () =>{
    if (buttonstate21===0){
    setButtonState21(1);
  }else{
    setButtonState21(0);
  }
  }




  return (
    <Cont>
      <GlbNav>
      <NavBar2
      // user pic src
      src="/Avatar.png"
      // user name
      name="Esther Howard"
      // user rooma point
      user_point="100 pts"
      // if there is new message in alert display:block else display:none
      Alertdisplay="block"
      // showing user is in community page right now
    color5="#8867EB"
    src5="/search_Color.svg"
    onContClick={()=>{
      GlobalNavClick();
    }}
    width={buttonstate5 === 1 ? '140px' : '288px'}
    display={buttonstate5 === 1 ? 'none' : 'flex'}
    displayLogo={buttonstate5 === 1 ? 'flex' : 'none'}
    displayHome={buttonstate5 === 1 ? 'none' : 'block'}
    displayTask={buttonstate5 === 1 ? 'none' : 'block'}
    displayChat={buttonstate5 === 1 ? 'none' : 'block'}
    displayMember={buttonstate5 === 1 ? 'none' : 'block'}
    displayCommunity={buttonstate5 === 1 ? 'none' : 'block'}
    displaySetting={buttonstate5 === 1 ? 'none' : 'block'}
    alignItems={buttonstate5 === 1 ? 'center':'unset'}
    justifyContent={buttonstate5 ===1 ? 'center':'space-even'}
    />
        </GlbNav>
        <MainCont>
       
        <AddPost
                src="/Avatar.png"
                onAddClick={()=>{
                  HandleAddClick();
                }}
                height={buttonstate1 === 1 ? '450px':'65px' }
                display={buttonstate1 === 1 ? 'block':'none'}
                onToggleClick={() =>{
                  HandleToggleClick();
                }}
                visibility={checked === 1 ? 'visible' : 'hidden'}
                onPostClick={()=>{
                  HandleAddPost();
                }}
              
                // ADD POST: button color changes from here
                onBtnClick1={()=>{
                  Btn1();
                }}
                btn_bgcolor1={buttonstate6 === 1?'#7751E8':'#ffffff'}
                fontcolor1={buttonstate6 === 1? '#ffffff':'#7751E8'}
                onBtnClick2={()=>{
                  Btn2();
                }}
                btn_bgcolor2={buttonstate7 === 1?'#7751E8':'#ffffff'}
                fontcolor2={buttonstate7 === 1? '#ffffff':'#7751E8'}
                onBtnClick3={()=>{
                  Btn3();
                }}
                btn_bgcolor3={buttonstate8 === 1?'#7751E8':'#ffffff'}
                fontcolor3={buttonstate8 === 1? '#ffffff':'#7751E8'}
                onBtnClick4={()=>{
                  Btn4();
                }}
                btn_bgcolor4={buttonstate9 === 1?'#7751E8':'#ffffff'}
                fontcolor4={buttonstate9 === 1? '#ffffff':'#7751E8'}
                onBtnClick5={()=>{
                  Btn5();
                }}
                btn_bgcolor5={buttonstate10 === 1?'#7751E8':'#ffffff'}
                fontcolor5={buttonstate10 === 1? '#ffffff':'#7751E8'}
                onBtnClick6={()=>{
                  Btn6();
                }}
                btn_bgcolor6={buttonstate11 === 1?'#7751E8':'#ffffff'}
                fontcolor6={buttonstate11 === 1? '#ffffff':'#7751E8'}
                onBtnClick7={()=>{
                  Btn7();
                }}
                btn_bgcolor7={buttonstate12 === 1?'#7751E8':'#ffffff'}
                fontcolor7={buttonstate12 === 1? '#ffffff':'#7751E8'}
                onBtnClick8={()=>{
                  Btn8();
                }}
                btn_bgcolor8={buttonstate13 === 1?'#7751E8':'#ffffff'}
                fontcolor8={buttonstate13 === 1? '#ffffff':'#7751E8'}

                // ADD POST: button color changes end
        />


        <FilterButtonDiv>
            <FilterOptionsButton
               onFilterButtonClick={()=>{
                 ClickFilterButton();

               }}
            
            ></FilterOptionsButton>
        </FilterButtonDiv>
        <AddFilterDiv>
            <AddFilter

                display={showFilterComp === 1 ? 'block' : 'none'}

                    // ADD FILTER BUTTON: button color changes from here
                onBtnClick1={()=>{
                  Btn9();
                }}
                btn_bgcolor1={buttonstate14 === 1?'#7751E8':'#ffffff'}
                fontcolor1={buttonstate14 === 1? '#ffffff':'#7751E8'}
                onBtnClick2={()=>{
                  Btn10();
                }}
                btn_bgcolor2={buttonstate15 === 1?'#7751E8':'#ffffff'}
                fontcolor2={buttonstate15 === 1? '#ffffff':'#7751E8'}
                onBtnClick3={()=>{
                  Btn11();
                }}
                btn_bgcolor3={buttonstate16 === 1?'#7751E8':'#ffffff'}
                fontcolor3={buttonstate16 === 1? '#ffffff':'#7751E8'}
                onBtnClick4={()=>{
                  Btn12();
                }}
                btn_bgcolor4={buttonstate17 === 1?'#7751E8':'#ffffff'}
                fontcolor4={buttonstate17 === 1? '#ffffff':'#7751E8'}
                onBtnClick5={()=>{
                  Btn13();
                }}
                btn_bgcolor5={buttonstate18 === 1?'#7751E8':'#ffffff'}
                fontcolor5={buttonstate18 === 1? '#ffffff':'#7751E8'}
                onBtnClick6={()=>{
                  Btn14();
                }}
                btn_bgcolor6={buttonstate19 === 1?'#7751E8':'#ffffff'}
                fontcolor6={buttonstate19 === 1? '#ffffff':'#7751E8'}
                onBtnClick7={()=>{
                  Btn15();
                }}
                btn_bgcolor7={buttonstate20 === 1?'#7751E8':'#ffffff'}
                fontcolor7={buttonstate20 === 1? '#ffffff':'#7751E8'}
                onBtnClick8={()=>{
                  Btn16();
                }}
                btn_bgcolor8={buttonstate21 === 1?'#7751E8':'#ffffff'}
                fontcolor8={buttonstate21 === 1? '#ffffff':'#7751E8'}

                // ADD FILTER BUTTON: button color changes end

            
            
            ></AddFilter>
        </AddFilterDiv>


        <PostArea1>

        <CommunityPost
        title="Any recommendations on resturaunts in Vancouver?"
        name="Floyd Miles"
        src="/Avatar3.png"
        button_title="restaurants"
        time="6h ago"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        likeNum="100"
        CommentNum="10"
        onPostClick={()=>{
          PostClick();
        }}
        
        />
        <CommunityPost
        title="Furniture Sale"
        name="Hannah M"
        src="/Avatar3.png"
        button_title="Event"
        time="6h ago"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        likeNum="230"
        CommentNum="20"
        onPostClick={()=>{
          PostClick();
        }}
        />
        
        </PostArea1>
        <PostArea2>
        <CommunityPost
        title="Need Roommates!"
        name="Jo K"
        src="/Avatar3.png"
        button_title="roommates"
        time="2h ago"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        likeNum="1100"
        CommentNum="15"
        onPostClick={()=>{
          PostClick();
        }}
        />
        <CommunityPost
        title="Music Festival on Queen Park!"
        name="Rachel K"
        src="/Avatar3.png"
        button_title="Event"
        time="12h ago"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        likeNum="800"
        CommentNum="30"
        onPostClick={()=>{
          PostClick();
        }}
        />
        </PostArea2>
        <PostArea2>
        <CommunityPost
        title="Need Roommates!"
        name="Jo K"
        src="/Avatar3.png"
        button_title="roommates"
        time="2h ago"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        likeNum="1100"
        CommentNum="15"
        onPostClick={()=>{
          PostClick();
        }}
        />
        <CommunityPost
        title="Music Festival on Queen Park!"
        name="Rachel K"
        src="/Avatar3.png"
        button_title="Event"
        time="12h ago"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        likeNum="800"
        CommentNum="30"
        onPostClick={()=>{
          PostClick();
        }}
        />
        </PostArea2>
        </MainCont>
        <RightCont>
                <Comments
                  visibility={onPostClick === 1 ? "visible":"hidden"}
                  title="Any recommendations on resturaunts in Vancouver?"
                  name="Floyd Miles"
                  src="/Avatar3.png"
                  button_title="restaurants"
                  time="6h ago"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                  likeNum="100"
                  CommentNum="10"
                />
        </RightCont>
    </Cont>
  )
}