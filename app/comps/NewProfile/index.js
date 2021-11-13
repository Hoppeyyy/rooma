import { useState } from "react";
import * as React from "react";
import styled from "styled-components";
import Button from "../Button";
import { useRouter } from "next/router";
import { updateProfile, getRetrieveUrl } from "../../api/profile.api";

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
const NewProfile = ({}) => {
  const router = useRouter();
  const [File, setFile] = useState(null);

  function getImg(e) {
    let binaryData = [];
    const imgFile = e.target.files[0];
    binaryData.push(imgFile);
    const blob = new Blob(binaryData);
    const img_src = window.URL.createObjectURL(blob);
    setFile({ src: img_src, file: imgFile });
  }

  const postSubmit = async (e) => {
    e.preventDefault();
    let retrieveUrl;

    if (File) {
      retrieveUrl = await getRetrieveUrl(File.file);
    }

    console.log("cccccccccccccccccccc");
    console.log(retrieveUrl);
    // const user_obj = {
    //   pfp: retrieveUrl,
    // };
    // updateProfile(user_obj, (err) => {
    //   if (err) {
    //     console.log(err);
    //     setCurrentError(err);
    //   } else {
    //     // Need to nest a join room api before going to "/" here
    //     // router.push(routeToLogin);
    //     console.log('success');
    //   }
    // });
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
            console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
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
          placeholder="Name"
        ></Input>
        <Input
          borderbtm="none"
          className="opensans"
          type="password"
          placeholder="Age"
        ></Input>
        <Input
          borderbtm="none"
          className="opensans"
          type="password"
          placeholder="Phone"
        ></Input>
        <Input
          borderbtm="none"
          className="opensans"
          type="password"
          placeholder="Status"
        ></Input>
        <Input
          borderbtm="none"
          className="opensans"
          type="password"
          placeholder="Pronouns"
        ></Input>
        <Input
          borderbtm="none"
          className="opensans"
          type="password"
          placeholder="Preference"
        ></Input>
        <Input
          borderbtm="solid"
          className="opensans"
          type="password"
          placeholder="Interests"
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
            onClick={() => {
              router.push("/");
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
              postSubmit(e);
              // router.push("/");
            }}
          />
        </Btnarea>
      </Cont>
    </Main>
  );
};

export default NewProfile;
