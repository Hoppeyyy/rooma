import { useContext, useState, useEffect } from "react";
import * as React from "react";
import styled from "styled-components";
import Button from "../Button";

import { useRouter } from "next/router";
import { updateProfile, getRetrieveUrl } from "../../api/profile.api";
import { createRoom } from "../../api/room.api";
import { globalContext } from "../../store/globalContext";

// import ImageUtil from "./ImageUtil";
import ImageUtil from "../../api/ImageUtil";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Heading = styled.div`
  font-size: 27px;
  font-weight: 700;
  margin-bottom: 25px;
`;
const PicUpload = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
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
  border: #c8c8c8 1px solid;
  border-right-style: none;
  border-left-style: none;
  border-bottom-style: ${(props) => props.borderbtm};
  width: 100%;
  font-size: 19px;
  font-weight: 400;
`;
const Btnarea = styled.div`
  display: flex;
  position: absolute;
  right: 10px;
  top: 800px;
`;

const AgeInput = styled.div`
  display: flex;
  align-items: center;
  border-top: #c8c8c8 1px solid;

  width: 100%;
`;

const PreferencesDiv = styled.div`
  display: flex;
  align-items: center;
  border-top: #c8c8c8 1px solid;
  border-bottom: #c8c8c8 1px solid;
`;

const Select = styled.select`
  height: 20px;
  margin-right: 0.5em;
`;

const NewProfile = ({ user }) => {
  const router = useRouter();
  const [File, setFile] = useState(null);
  const [UserData, setUserData] = useState({
    name: "",
    age: null,
    phone: "",
    pronouns: "",
    interests: "",
  });
  const [PreferencesInput, setPreferencesInput] = useState([]);

  const onPreferenceSelect = (title) => {
    if (PreferencesInput.includes(title)) {
      setPreferencesInput(PreferencesInput.filter((item) => item !== title));
    } else {
      setPreferencesInput([...PreferencesInput, title]);
    }
  };

  const onFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...UserData, [name]: value });
  };
  // const { currentUser, setCurrentUser } = useContext(globalContext);

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

      await updateProfile(user_obj, (err) => {
        if (err) {
          console.log(err);
          setCurrentError(err);
        } else {
          // Need to nest a join room api before going to "/" here
          // router.push(routeToLogin);
          console.log("success");
        }
      });
    }

    const room_obj = {
      name: `${user.name}'s house`,
    };

    if (!user.roomId) {
      createRoom(room_obj, (err, response) => {
        if (err) {
          console.log(err);
        } else {
          console.log(response);
          router.push("/");
        }
      });
    } else {
      router.push("/");
    }
  };

  const getYears = () => {
    let numdays = 100;
    let option_arr = [];

    for (let i = 18; i < numdays; i++) {
      option_arr.push(<option value={i}>{i}</option>);
    }

    return option_arr;
  };

  return (
    <Main>
      <Cont>
        <Heading className="ubuntu">Create Profile</Heading>
        <PicUpload src={File ? File.src : "/upload_pic.png"}></PicUpload>
        <Button
          title="Upload Picture"
          width="200px"
          height="50px"
          margin="10px"
          borderRadius="10px"
          border="none"
          bgcolor="#714FE9"
          fontcolor="white"
          fontSize="20px"
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
        <Input
          borderbtm="none"
          className="opensans"
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={user.name}
          onChange={(e) => {
            onFormChange(e);
          }}
        ></Input>
        {/* <Input
          borderbtm="none"
          className="opensans"
          type="password"
          placeholder="Age"
        ></Input> */}

        <AgeInput name="age">
          <p>Age</p>
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

        <Input
          name="phone"
          borderbtm="none"
          className="opensans"
          type="text"
          placeholder="Phone"
          onChange={(e) => {
            onFormChange(e);
          }}
        ></Input>
        {/* <Input
          borderbtm="none"
          className="opensans"
          type="text"
          placeholder="Status"
        ></Input> */}
        <Input
          name="pronouns"
          borderbtm="none"
          className="opensans"
          type="text"
          placeholder="Pronouns"
          onChange={(e) => {
            onFormChange(e);
          }}
        ></Input>
        <Input
          name="occupation"
          borderbtm="none"
          className="opensans"
          type="text"
          placeholder="Occupation"
          onChange={(e) => {
            onFormChange(e);
          }}
        ></Input>
        <Input
          name="school"
          borderbtm="none"
          className="opensans"
          type="text"
          placeholder="School/Company"
          onChange={(e) => {
            onFormChange(e);
          }}
        ></Input>

        {/* <Input
          borderbtm="none"
          className="opensans"
          type="text"
          placeholder="Preference"
          onChange={(e) => {
            onFormChange(e);
          }}
        ></Input> */}

        <PreferencesDiv>
          <span>Preferences</span>
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
        </PreferencesDiv>
        <Input
          borderbtm="solid"
          className="opensans"
          type="text"
          placeholder="About Me"
          name="interests"
          onChange={(e) => {
            onFormChange(e);
          }}
        ></Input>
        {/* btn to skip or done */}
        <Btnarea>
          <Button
            title="Skip"
            width="123px"
            height="55px"
            borderRadius="4.5px"
            border="solid"
            bgcolor="white"
            fontcolor="#724FE9"
            fontSize="20px"
            fontWeight="700"
            onClick={(e) => {
              postSubmit(e, true);
            }}
          />
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

export default NewProfile;
