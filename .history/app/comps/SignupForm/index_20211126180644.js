import { useState, useContext } from "react";
import * as React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { register } from "../../api/auth.api";
import { globalContext } from "../../store/globalContext";
import ErrorMsg from "../../UI/ErrorMsg";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Error = styled.div`
display:flex;
justify-content:center;
width: 100%;
`
const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const Heading = styled.div`
  font-size: 53px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #181135;
`;

//Email & Password
const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 50%;
  font-size: 20px;
  font-weight: 500;
  color: #181135;
`;
const Input = styled.input`
  padding: 20px;
  border: #c8c8c8 1px solid;
  width: 100%;
  font-size: 19px;
  font-weight: 400;
  border-radius: 10px;
  margin-bottom: ${(props) => props.marginbottom};
  margin-top: 10px;
`;

//Forgot password?
const Link = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  font-weight: 700;
  color: #724fe9;
  display: flex;
  justify-content: flex-end;
  width: 50%;
  margin-bottom: 30px;
`;

//login button
const LoginButton = styled.button`
  width: 50%;
  padding: 25px;
  border-radius: 10px;
  border: none;
  background-color: #724fe9;
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
`;

// OR divider
const Divider = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;
const Line = styled.div`
  width: 41%;
  border-top: 0.01em solid #afafaf;
`;
const Or = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  color: #878787;
`;

// Google Login
const GoogleButton = styled.button`
  width: 50%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #878787;
  background-color: white;
  color: #3e3d3d;
  font-size: 20px;
  font-weight: 600;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  margin-right: 20px;
`;

const Signup = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  width: 70%;
  margin-top: 20px;
`;

const Text = styled.div`
  color: #757272;
`;
const Link2 = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: #724fe9;
  font-weight: 700;
`;

const LoginForm = ({
  marginbottom1 = "25px",
  marginbottom2 = "25px",
  marginbottom3 = "10px",
  routeToJoin = "/join",
  routeToLogin = "/login",
}) => {
  const {
    currentUser,
    setCurrentUser,
    currentError,
    setCurrentError,
    setCurrentMsg,
  } = useContext(globalContext);

  const router = useRouter();

  const [RegData, setRegData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegData({ ...RegData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const user_obj = {
      name: RegData.name,
      email: RegData.email,
      password: RegData.password,
    };

    register(user_obj, (err, result) => {
      if (err) {
        console.log(err);
        setCurrentError(err);
      } else {
        setCurrentMsg(`Registration successful. Please login now.`);

        router.push(routeToLogin);
      }
    });
  };

  return (
    <Main>
      <Cont>
        {currentError && <ErrorMsg errmsg={currentError}></ErrorMsg>}
        {/* <form> */}
        <Heading className="ubuntu">Sign Up</Heading>
        {/* user input */}
        <Label className="opensans">
          Name*
          <Input
            marginbottom={marginbottom1}
            className="opensans"
            type="text"
            placeholder="Name"
            name="name"
            maxLength="20"
            onChange={onFormChange}
            required
          ></Input>
        </Label>
        <Label className="opensans">
          Email*
          <Input
            marginbottom={marginbottom2}
            className="opensans"
            type="text"
            placeholder="Email"
            name="email"
            maxLength="20"
            onChange={onFormChange}
            required
          ></Input>
        </Label>

        <Label className="opensans">
          Password*
          <Input
            marginbottom={marginbottom3}
            className="opensans"
            type="password"
            placeholder="Password"
            name="password"
            maxLength="30"
            onChange={onFormChange}
            required
          ></Input>
        </Label>

        {/* Login Button */}
        <LoginButton
          //   onClick={() => router.push(routeToJoin)}
          onClick={handleRegister}
          className="opensans"
        >
          Sign up
        </LoginButton>
        {/* </form> */}

        <Signup className="opensans">
          <Text> Already have an account?</Text>
          <Link2 onClick={() => router.push(routeToLogin)}>Sign In</Link2>
        </Signup>

        <Divider>
          <Line /> <Or className="opensans">OR</Or> <Line />
        </Divider>

        {/* Google Login */}
        <GoogleButton className="opensans">
          <Icon src="/Google.svg" />
          Login with Google
        </GoogleButton>
      </Cont>
    </Main>
  );
};

export default LoginForm;
