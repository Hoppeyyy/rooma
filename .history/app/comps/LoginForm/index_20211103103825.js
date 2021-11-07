import react from 'react';
import * as React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';



const Main =styled.div`
display: flex;
flex-direction: column;
width: 100%;
height:100%;


`

const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 100px;


`

const Heading =styled.div`
font-size: 53px;
font-weight: 700;
margin-bottom: 30px;
color: #181135;

`

//Email & Password
const Label = styled.label`
display:flex;
flex-direction: column;
width: 50%;
font-size: 20px;
font-weight: 500;
color: #181135;

`
const Input = styled.input`

padding: 20px;
border: #C8C8C8 1px solid;
width: 100%;
font-size: 19px;
font-weight: 400;
border-radius: 10px;
margin-bottom: ${props=>props.marginbottom};
margin-top: 10px;

`

//Forgot password?
const Link = styled.button`
background-color: transparent;
border: none;
font-size: 16px;
font-weight: 700;
color:#724FE9;
display:flex;
justify-content: flex-end;
width: 50%;
margin-bottom: 30px;

`

//login button
const LoginButton = styled.button`
width: 50%;
padding:25px;
border-radius: 10px;
border:none;
background-color: #724FE9;
color: white;
font-size: 20px;
font-weight: 700;
`

// OR divider
const Divider = styled.div`
display:flex;
width: 50%;
justify-content:center;
align-items:center;
margin-top: 25px;
`
const Line = styled.div`
width: 41%;
border-top: 0.01em solid #AFAFAF;

`
const Or =styled.div`
margin-left: 20px;
margin-right: 20px;
color: #878787;
`

// Google Login
const GoogleButton = styled.button`
width: 50%;
padding:20px;
border-radius: 10px;
border: 1px solid  #878787;
background-color: white;
color:#3E3D3D;
font-size: 20px;
font-weight: 600;
margin-top: 25px;
display:flex;
justify-content:center;
align-items:center;

`

const Icon = styled.img`
margin-right: 20px;

`



const Signup = styled.div`
display:flex;
justify-content: center;
font-size: 20px;
width: 70%;
position: relative;
top: 150px;
`

const Text = styled.div`
color: #757272;
`
const Link2 = styled.button`
background-color: transparent;
border:none;
font-size: 20px;
color: #724FE9;
font-weight: 700;

`



const LoginForm = ({
marginbottom1="25px",
marginbottom2="10px",
routeToLogin="/home",
routeToSignup="/signup"



}) => {
   
    const router = useRouter();
    
    return <Main>
    <Cont>
        <Heading className="ubuntu">Login</Heading>
        {/* user input */}
        <Label className="opensans">
            Email
        <Input marginbottom={marginbottom1} className="opensans" type="text" placeholder="Email"  ></Input>
        </Label>
        <Label className="opensans">
            Password
        <Input marginbottom={marginbottom2} className="opensans" type="password" placeholder="Password"  ></Input>
        </Label>
        <Link className="opensans">Forgot Password?</Link>

        {/* Login Button */}
        <LoginButton onClick={()=>router.push(routeTo)} className="opensans">Login</LoginButton>

        <Divider>
            
            <Line/> <Or className="opensans">OR</Or> <Line/> 
        </Divider>

        {/* Google Login */}
        <GoogleButton className="opensans">
            <Icon src="/Google.svg"/>
            Login with Google</GoogleButton>
          
            <Signup onClick={()=>router.push(routeTo)} className="opensans">
       <Text> Not registered yet?</Text>
        <Link2>Create an Account</Link2>
        </Signup>

    
 </Cont>
       

 
    </Main>
}

export default LoginForm;