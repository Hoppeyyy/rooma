import Head from 'next/head'
import styled from 'styled-components';
import * as React from 'react';
import Button from '../../comps/Button'
import {useRouter} from 'next/router';


const MainCont = styled.div`
display: flex;
flex-direction: column;
// margin: 20px;
margin-top: 20px;
width: 100%;

`
const Cont = styled.div`
display: flex;
flex-direction: column;
margin: 60px;
margin-top:10px;
max-width:550px;
margin-bottom:50px;

`
const Heading = styled.p`
font-size: 23px;
font-weight: 700;
margin-bottom:-2px;
`
const Para = styled.p`
font-size: 17px;
`

const Bot = styled.div`
marign-left:-200px;
width:178px;
height:48px;

`

const Textbox = styled.input`
width: 178px;
height: 48px;
border-radius: 4px;
margin: 2px;
background-color: #F2F2F2;
border-color: transparent;
`

const Line = styled.hr`
border-color: #CCCCCC;
border-width: 0.5px;
border-style: solid;
width: 100%;


`



const JoinFrom = ({
    routeToColor="/pick_a_color",
    
}) => {
    const router = useRouter();
    return <MainCont>
            <Cont>
                <Heading className="opensans">Let's Get Started</Heading>
                <Para className="opensans">Get started by creating a new team and invite your roommates.</Para>
                <Bot>
                    <Button 
                        title="Get Started"
                        width="178px"
                        height="48px"
                        borderRadius="4px"
                        margin="2px"
                        fontSize="17px"
                    ></Button>
                </Bot>
            </Cont>
            <Line/>
            <Cont>
                <Heading className="opensans">Join with a Code</Heading>
                <Para className="opensans">Join by getting an invite code from your room members</Para>
                <Bot>
                   <Textbox></Textbox>
                </Bot>
            </Cont> 
            <Line/>
            <Cont>
                <Heading className="opensans">Join with a Link</Heading>
                <Para className="opensans">Join by getting an invite link from your room members. Click on the link and join automatically.</Para>
                
            </Cont>
        </MainCont>
}

export default JoinFrom;