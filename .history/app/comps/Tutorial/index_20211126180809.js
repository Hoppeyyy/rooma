import react from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const Cont = styled.div`
display: flex;
flex-direction: column;
`
const Wrap = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
justify-content: center;
align-items:center;

`
const Animation = styled.img`
width: ${props=>props.aniwidth};

`

const Heading = styled.div`
font-size: 50px;
margin-top: 70px;
font-weight: 700;
color: #181135;
`
const Span = styled.span`
color: #724FE9;

`
const Para = styled.div`
font-size: 22px;
max-width: ${props=>props.parawidth};
color: #7E7E7E;
margin-top: 20px;
text-align: center;
`

const ButtonCont = styled.div`
display:${props=>props.buttondisplay};
width: 120px;
justify-content: space-evenly;
position:relative;
top: 150px;

`

const Button = styled.button`
width: 12px;
height: 12px;
border-radius:50%;
border: none;
background-color: ${props=>props.buttoncolor};

`
const Tutorial = ({
animation="/login-animation.svg",
chead="Welcome",
bhead="Back",
para="Start distributing chores with your roommates and have fun!",
aniwidth="550px",
buttoncolor1="#724FE9",
buttoncolor2="#DADADA",
buttoncolor3="#DADADA",
buttoncolor4="#DADADA",
buttondisplay="none",
parawidth="350px"


}) => {
    return <Cont>
        <Wrap>
        <Animation aniwidth={aniwidth} src={animation}/>
        <Heading className="ubuntu"><Span>{chead}</Span> {bhead}</Heading>
        <Para className="opensans" parawidth={parawidth}>{para}</Para>

        {/* <ButtonCont buttondisplay={buttondisplay}>
            <Button buttoncolor={buttoncolor1}/>
            <Button buttoncolor={buttoncolor2}/>
            <Button buttoncolor={buttoncolor3}/>
            <Button buttoncolor={buttoncolor4}/> 

        </ButtonCont> */}
        </Wrap>
    </Cont>
}

export default Tutorial;