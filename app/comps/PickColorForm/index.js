import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import Button from '../../comps/Button'
import {useRouter} from 'next/router';


const MainCont = styled.div`
display: flex;
flex-direction: column;
margin: 20px;
width: 100%;
margin-left: auto;
margin-right: auto;

`
const Wrap = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
// justify-content: center;
align-items:center;

`

const Heading = styled.h3`
font-size: 47px;
margin:0;
margin-top: 150px;
font-weight: 700;
color: #181135;
text-align: center;



`

const Para = styled.p`
font-size: 24px;
max-width: 343px;
color: #777777;
margin:0;
margin-top: 20px;
text-align: center;

`

const Btnarea = styled.div`
display:flex;
position:absolute;
right:10px;
top:800px;
`

const ColorCont = styled.div`
width: 340px;
height: 187px;
display: flex;
flex-direction:column;
margin-top: 45px;

`
const SmallCont1 = styled.div`
width: 340px;
height:76px;
display: flex;
flex-direction:row;
justify-content:space-between;
margin-top:60px;
`
const SmallCont2 = styled.div`
width: 340px;
height:76px;
display: flex;
flex-direction:row;
justify-content:space-between;
margin-top:30px;

`

const ColorButton = styled.div`
width: 75px;
height: 75px;
border-radius:100px;
border:${props=>props.border};
background-color: ${props=>props.backgroundColor};

`

/* button colors
1. background-color: #EA9B9B;
2. background-color: #F0C789;
3. background-color: #ADD9B7;
4. background-color: #ABCDED;
5. background-color: #FFECA8;
6. background-color: #C0B6FF;
*/


const PickColorForm = ({
    border1="none",
    border2="none",
    border3="none",
    border4="none",
    border5="none",
    border6="none",
    onBtn1=()=>{},
    onBtn2=()=>{},
    onBtn3=()=>{},
    onBtn4=()=>{},
    onBtn5=()=>{},
    onBtn6=()=>{},
}) => {
    const router = useRouter();
    return <MainCont>
            <Wrap>
                <Heading className="ubuntu">Welcome to Rooma</Heading>
                <Para className="opensans">Pick a color to get started with your roommates!</Para>
                <ColorCont>
                    <SmallCont1>
                        <ColorButton
                        border={border1}
                        backgroundColor="#EA9B9B"
                        onClick={onBtn1}
                        />
                        <ColorButton
                        border={border2}
                        backgroundColor="#F0C789"
                        onClick={onBtn2}
                        />
                        <ColorButton
                        border={border3}
                        backgroundColor="#ADD9B7"
                        onClick={onBtn3}
                        />
                    </SmallCont1>
                    <SmallCont2>
                        <ColorButton
                        border={border4}
                        backgroundColor="#ABCDED"
                        onClick={onBtn4}
                        />
                        <ColorButton
                        border={border5}
                        backgroundColor="#FFECA8"
                        onClick={onBtn5}
                        />
                        <ColorButton
                        border={border6}
                        backgroundColor="#C0B6FF"
                        onClick={onBtn6}
                        />
                    </SmallCont2>
                    
                </ColorCont>
                <Btnarea>
                    <Button 
                        onClick={()=>{
                            router.push("/create_profile")
                        }}
                        title="Next"
                        width="158px"
                        height="70px"
                        borderRadius="8px"
                        margin="1px"
                        fontSize="28px"
                    ></Button>
                </Btnarea>
            </Wrap>
                
     
        </MainCont>
}

export default PickColorForm;