import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import {useState} from 'react';
import api from "../../config/axios";

import Button from '../../comps/Button'
import {useRouter} from 'next/router';
// import usePost from "./api/usePost";


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

}) => {
    // const [doPost] = usePost();
    const [Color, setColor] = useState("")
    const router = useRouter();

    const submitColor = async (params) => {
        console.log('color = ' + Color);
        const response = await api({
            method: 'patch',
            url: '/user/update',
            data: {
                color: Color,
              },
              withCredentials: true
          })

          if (response.status != 200) {
            console.log('submitColor err');
            console.log(response);
          }
          else {
              console.log('999999999999999999999');
              console.log(response);
            router.push("/create_profile")
          }
    }

    const onBtn1 = () => {
        setColor('#EA9B9B');
    }
    const onBtn2 = () => {
        setColor('#F0C789');
    }
    const onBtn3 = () => {
        setColor('#ADD9B7');   
    }
    const onBtn4 = () => {
        setColor('#ABCDED');
    }
    const onBtn5 = () => {
        setColor('#FFECA8');
    }
    const onBtn6 = () => {
        setColor('#C0B6FF');
    }

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
                        onClick={() => submitColor()}
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