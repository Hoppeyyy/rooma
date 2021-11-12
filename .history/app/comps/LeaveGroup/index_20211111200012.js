import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import Button from '../../comps/Button'
import {useRouter} from 'next/router';


const MainCont = styled.div`
display: ${props=>props.display};
flex-direction: column;
margin-top:600px;
width:100%;
align-items:center;
position:relative;
`

const Cont = styled.div`
width:700px;
height:100px;

`

const Title = styled.p`
font-size: 29px;
font-weight:400;
`
const Para = styled.p`
font-size: 23px;
font-weight:400;
color:#666666;
margin-top: -12px;
`

const Line = styled.hr`
border-color: #CCCCCC;
border-width: 0.5px;
border-style: solid;
width: 100%;
`
const ButtonDiv = styled.div`
margin-left:65%;
margin-top:30px;
`

const LeaveGroup = ({
    display="none"
    
}) => {
    const router = useRouter();
    return <MainCont display={display}>
               
                <Line/> 
            
                <Cont>
                    <Title>Leave Group</Title>
                    <Para>By leaving the group, you will no longer have access.</Para>
                </Cont>
               
                <ButtonDiv>
                    <Button
                          title="Leave Group"
                          width="183px"
                          height="59px"
                          borderRadius="4px"
                          margin="2px"
                          fontSize="19px"
                          bgcolor="#E9614F"
                    
                    ></Button>
                </ButtonDiv>


  
        </MainCont>
}

export default LeaveGroup;