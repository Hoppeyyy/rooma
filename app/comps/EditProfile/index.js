import { useContext, useState, useEffect } from "react";
import * as React from "react";
import styled from "styled-components";
import Button from "../Button";
import { useRouter } from "next/router";
import { updateProfile, getRetrieveUrl } from "../../api/profile.api";
import { createRoom } from "../../api/room.api";
import { globalContext } from "../../store/globalContext";
import CurrentMsg from "../../UI/CurrentMsg";
// import ImageUtil from "./ImageUtil";
import ImageUtil from "../../api/ImageUtil";
import { requireAuthen } from "../../api/require.authen";
import ErrorMsg from "../../UI/ErrorMsg";

const Main = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content:center;
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

const Heading = styled.div`
  font-size: 27px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const PicUpload = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
`;
const Get_pic = styled.p`
  font-size: 15px;
  margin-bottom: 50px;
`;

const Input = styled.input`
  padding: 20px;
  border: #c8c8c8 1px none;
  border-right-style: none;
  border-left-style: none;
  border-bottom-style: ${(props) => props.borderbtm};
  width: 100%;
  font-size: 19px;
  font-weight: 400;
`;
const Btnarea = styled.div`
  width:100%;
  display:flex;
  justify-content:flex-end;
  margin-top: 20px;
  margin-right:50px;

`;

const AgeInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const Select = styled.select`
  height: 50px;
  width: 70px;
  margin-right: 0.5em;
  font-size: 18px;
  border:none;
  background:#F2EFFD;
  padding:10px;
  color:#724FE9;
  border-radius: 5px;
`;

const Profileinput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: #c8c8c8 1px solid;
  border-left:none;
  border-right:none;
  border-bottom:${(props) => props.borderbtm};
`;
const InputLabel = styled.div`
  width: 100px;
  margin-left: 20px;
  color:#747474;
`;

const EditProfile = ({
  user,
  display,
  onSetErrMessage,
  ErrMessage,
  onSetMessage,
  Message,
}) => {
  console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
  console.log(user.user.pfp);
  const router = useRouter();
  const [File, setFile] = useState(null);
  const [UserData, setUserData] = useState({
    name: "",
    age: null,
    phone: "",
    pronouns: "",
    interests: "",
  });
  const [PreferencesInput, setPreferencesInput] = useState(
    user.user.preference
  );
  // const [Message, setMessage] = useState("");
  // const [ErrMessage, setErrMessage] = useState("");
  const onHandleSetErrMessage = (msg) => {
    onSetErrMessage(msg);
  };

  const { currentUser, setCurrentUser, setCurrentError } =
    useContext(globalContext);
  useEffect(() => {
    // console.log(PreferencesInput);
  });
  const onPreferenceSelect = (title) => {
    if (PreferencesInput.includes(title)) {
      setPreferencesInput(PreferencesInput.filter((item) => item !== title));
    } else {
      setPreferencesInput([...PreferencesInput, title]);
    }
  };

  const onFormChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...UserData, [name]: value });
  };

  function getImg(e) {
    let binaryData = [];
    const imgFile = e.target.files[0];
    binaryData.push(imgFile);
    const blob = new Blob(binaryData);
    const img_src = window.URL.createObjectURL(blob);
    setFile({ src: img_src, file: imgFile });
  }

  const postSubmit = async (e, skip = false) => {
    e.preventDefault();
    let retrieveUrl;
    let user_obj = {};

    let isPhoneString = isNaN(UserData.phone);

    if (isPhoneString) {
      // setErrMessage("Phone needs to be a number");
      onHandleSetErrMessage("Phone needs to be a number");
    } else {
      onHandleSetErrMessage("");

      for (const [key, value] of Object.entries(UserData)) {
        console.log(`${key}: ${value}`);
        if (value) {
          user_obj[key] = value;
        }
      }

      if (!skip) {
        if (File) {
          retrieveUrl = await ImageUtil.getRetrievalUrl(File.file);
          user_obj = { ...user_obj, pfp: retrieveUrl };
        }

        for (const [key, value] of Object.entries(UserData)) {
          console.log(`${key}: ${value}`);
          if (value) {
            user_obj[key] = value;
          }
        }

        if (PreferencesInput.length) {
          user_obj = { ...user_obj, preference: PreferencesInput };
        }

        console.log("user_obj user_obj user_obj");

        console.log(user_obj);
        await updateProfile(user_obj, (err) => {
          if (err) {
            console.log(err);
            onSetErrMessage("issue with submission");
          } else {
            onSetMessage("update user success");
            setCurrentUser({ ...currentUser, pfp: retrieveUrl });
            // Need to call setCurrentUser here with the returned value.
          }
        });
      }
    }
  };

  const getYears = () => {
    let numdays = 100;
    let option_arr = [];

    for (let i = 18; i < numdays; i++) {
      option_arr.push(
        <option value={i} selected={i == user.user.age ? true : false}>
          {i}
        </option>
      );
    }

    return option_arr;
  };

  const getPicUpload = () => {
    let srcfile = "/upload_pic.png";

    if (File) {
      if (File.src) {
        srcfile = File.src;
      } else if (user.user.pfp) {
        srcfile = user.user.pfp;
      }
    } else {
      if (user.user.pfp) {
        srcfile = user.user.pfp;
      }
    }

    return srcfile;
  };

  return (
    <Main display={display}>
      <Cont>
        <Heading className="ubuntu">Edit Profile</Heading>

        <PicUpload src={getPicUpload()}></PicUpload>
        <Button
          title="Upload Picture"
          width="150px"
          height="50px"
          margin="20px 0px 30px 0px"
          borderRadius="10px"
          border="none"
          bgcolor="#F2F2F2"
          fontcolor="#747474"
          fontSize="16px"
          fontWeight="700"
          onClick={() => {
            document.getElementById("getFile").click();
          }}
        />
        <input
          type="file"
          id="getFile"
          name="filename"
          accept="image"
          style={{ display: "none" }}
          onChange={(e) => getImg(e)}
        ></input>
        {/* user input */}
        <Profileinput borderbtm="none">
          <InputLabel>Name</InputLabel>
          <Input
            borderbtm="none"
            className="opensans"
            type="text"
            maxLength="20"
            name="name"
            placeholder="Name"
            defaultValue={user.user.name}
            onChange={(e) => {
              onFormChange(e);
            }}
          ></Input>
        </Profileinput >
        {/* <Input
          borderbtm="none"
          className="opensans"
          type="password"
          placeholder="Age"
        ></Input> */}
        <Profileinput borderbtm="none">
          <InputLabel>Age</InputLabel>
          <AgeInput name="age">
            <Select
              name="age"
              id="day"
              onChange={(e) => {
                onFormChange(e);
              }}
            >
              <option value=""></option>
              {getYears()}
            </Select>
          </AgeInput>
        </Profileinput>
        <Profileinput borderbtm="none">
          <InputLabel>Phone</InputLabel>
          <Input
            name="phone"
            borderbtm="none"
            className="opensans"
            type="text"
            maxLength="10"
            placeholder="Phone"
            defaultValue={user.user.phone}
            onChange={(e) => {
              onFormChange(e);
            }}
          ></Input>
        </Profileinput>

        <Profileinput borderbtm="none">
          <InputLabel>Pronouns</InputLabel>
          <Input
            name="pronouns"
            borderbtm="none"
            className="opensans"
            type="text"
            maxLength="10"
            placeholder="Pronouns"
            defaultValue={user.user.pronouns}
            onChange={(e) => {
              onFormChange(e);
            }}
          ></Input>
        </Profileinput>

        <Profileinput borderbtm="none">
          <InputLabel>Occupation</InputLabel>
          <Input
            name="occupation"
            borderbtm="none"
            className="opensans"
            type="text"
            placeholder="Occupation"
            defaultValue={user.user.occupation}
            onChange={(e) => {
              onFormChange(e);
            }}
          ></Input>
        </Profileinput>

        <Profileinput borderbtm="none">
          <InputLabel>School</InputLabel>
          <Input
            name="school"
            borderbtm="none"
            className="opensans"
            type="text"
            placeholder="School/Company"
            defaultValue={user.user.school}
            onChange={(e) => {
              onFormChange(e);
            }}
          ></Input>
        </Profileinput>

        {/* <Input
          borderbtm="none"
          className="opensans"
          type="text"
          placeholder="Preference"
          onChange={(e) => {
            onFormChange(e);
          }}
        ></Input> */}
        <Profileinput borderbtm="none">
          <InputLabel>Preferences</InputLabel>

          <Button
            width="125px"
            height="40px"
            // bgcolor="#F2EFFD"
            bgcolor={
              PreferencesInput.includes("No Pets") ? "#7751E8" : "#F2EFFD"
            }
            title="No Pets"
            fontSize="14px"
            // fontcolor="#7751E8"
            fontcolor={
              !PreferencesInput.includes("No Pets") ? "#7751E8" : "#F2EFFD"
            }
            border=" 1px solid #7751E8"
            fontWeight="500"
            borderRadius="29px"
            onClick={() => {
              onPreferenceSelect("No Pets");
            }}
          />
          <Button
            width="125px"
            height="40px"
            bgcolor={
              PreferencesInput.includes("No smokers") ? "#7751E8" : "#F2EFFD"
            }
            title="No smokers"
            fontSize="14px"
            fontcolor={
              !PreferencesInput.includes("No smokers") ? "#7751E8" : "#F2EFFD"
            }
            border=" 1px solid #7751E8"
            fontWeight="500"
            borderRadius="29px"
            onClick={() => {
              onPreferenceSelect("No smokers");
            }}
          />
          <Button
            width="125px"
            height="40px"
            bgcolor={
              PreferencesInput.includes("No loud noises")
                ? "#7751E8"
                : "#F2EFFD"
            }
            title="No loud noises"
            fontSize="14px"
            fontcolor={
              !PreferencesInput.includes("No loud noises")
                ? "#7751E8"
                : "#F2EFFD"
            }
            border=" 1px solid #7751E8"
            fontWeight="500"
            borderRadius="29px"
            onClick={() => {
              onPreferenceSelect("No loud noises");
            }}
          />
          <Button
            width="125px"
            height="40px"
            bgcolor={
              PreferencesInput.includes("Respect") ? "#7751E8" : "#F2EFFD"
            }
            title="Respect"
            fontSize="14px"
            fontcolor={
              !PreferencesInput.includes("Respect") ? "#7751E8" : "#F2EFFD"
            }
            border=" 1px solid #7751E8"
            fontWeight="500"
            borderRadius="29px"
            onClick={() => {
              onPreferenceSelect("Respect");
            }}
          />
        </Profileinput>
        <Profileinput>
          <InputLabel>About&nbsp;Me</InputLabel>
          <Input
            borderbtm="none"
            className="opensans"
            type="text"
            maxLength="100"
            placeholder="About Me"
            name="interests"
            defaultValue={user.user.interests}
            onChange={(e) => {
              onFormChange(e);
            }}
          ></Input>
        </Profileinput>
        {Message && <CurrentMsg msg={Message} />}

        {ErrMessage && <ErrorMsg errmsg={ErrMessage} />}
        <Btnarea>
          <Button
            title="Done"
            width="123px"
            height="55px"
            borderRadius="4.5px"
            border="none"
            bgcolor="#724FE9"
            fontcolor="white"
            fontSize="20px"
            fontWeight="700"
            onClick={(e) => {
              if (!UserData && !File) {
                postSubmit(e, true);
              } else {
                postSubmit(e);
              }
              // router.push("/");
            }}
          />
        </Btnarea>
      </Cont>
    </Main>
  );
};

export default EditProfile;
