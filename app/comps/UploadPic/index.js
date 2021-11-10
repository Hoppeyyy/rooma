import { useContext, useState } from "react";
import * as React from "react";
import styled from "styled-components";
import Button from "../Button";
import { useRouter } from "next/router";
import api from "../../config/axios";
import { globalContext } from "../../store/context/globalContext";
import ImageUtil from "../../helper/ImageUtil";

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
`;
const Get_pic = styled.input`
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
const UploadPic = ({}) => {
  const { currentUser, setCurrentUser } = useContext(globalContext);
  const [Files, setFiles] = useState(null);

  let img_src = "";
  let file_arr = [];
  let src_arr = [];
  const createRoom = async () => {
    const response = await api({
      method: "get",
      url: "/room/create",
      withCredentials: true,
    });

    setCurrentUser({
      ...currentUser,
      roomId: response.data.roomKey,
    });

    // router.push("/room_created");
  };

  const uploadPfp = async () => {
    let profileImg = await ImageUtil.updatePhoto(Files.file_arr);
    setCurrentUser({
      ...currentUser,
      pfp: profileImg.pfp,
    });
  };

  function getImg(e) {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
    file_arr = Array.from(e.target.files);

    file_arr.map((img) => {
      let binaryData = [];
      binaryData.push(img);
      const blob = new Blob(binaryData);

      img_src = window.URL.createObjectURL(blob);

      src_arr.push(img_src);
    });

    console.log("000000000000000000000");
    console.log(src_arr[0]);
    // setFiles({ src_arr, file_arr });
    setFiles({ src_arr, file_arr: e.target.files[0] })
  }

  const router = useRouter();
  return (
    <Main>
      <Cont>
        <Heading className="ubuntu">Add picture</Heading>
        {/* <img src={Files && Files.src_arr[0]} alt="" /> */}
        <PicUpload
          src={Files ? Files.src_arr[0] : "/upload_pic.png"}
        ></PicUpload>
        <input
          className="opensans"
          type="file"
          id="myFile"
          name="filename"
          accept="image"
          multiple
          onChange={(e) => getImg(e)}
        ></input>
        {/* user input */}
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
            onClick={async () => {
              await createRoom();
              router.push("/room_created");
            }}
          />
          <Button
            title="Submit"
            width="123px"
            height="55px"
            borderRadius="4.5px"
            border="none"
            bgcolor="#724FE9"
            fontcolor="white"
            fontSize="20px"
            fontWeight="700"
            onClick={async () => {
              // await createRoom();
              await uploadPfp();
              router.push("/room_created");
            }}
          />
        </Btnarea>
      </Cont>
    </Main>
  );
};

export default UploadPic;
