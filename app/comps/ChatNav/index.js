import React from "react";
import styled from "styled-components";

const NavCont = styled.div`
  display: flex;
  background-color: ${(props) => props.bgcolor};
  width: 85%;
  height: 13%;
  border-radius: 16px;
  margin-top: ${(props) => props.margintop};
`;

//Profile
const ProfileCont = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
const Img1 = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 2px solid white;
  margin-left: 20px;
  margin-right: -50px;
`;
const Img2 = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 2px solid white;
  position: relative;
  right: 25px;

  display: ${(props) => props.display};
`;

//Info
const InfoCont = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: ${(props) => props.marginleft};
`;
const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #3e3d3d;
  margin-bottom: 5px;
`;
const Msg = styled.div`
  font-size: 15px;
  color: #979797;
  margin-left: 30px;
`;

//Time
const TimeCont = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
const Time = styled.div`
  font-size: 13px;
  color: #7e7e7e;
`;
const ChatNav = ({
  bgcolor = "#FAFAFA",
  display = "flex",
  marginleft = "25px",
  margintop = "40px",
  chatterInfo = [],
  msg = "Hello Everyone!",
  user,
  onClick = () => {},
}) => {
  const getProfileCont = () => {
    // const chat_list = chatterInfo.map((chatter) => {
    //   let srcImg = chatter.pfp ? chatter.pfp : "/upload_pic.png";

    //   return <Img1 src={srcImg} />;
    // });

    let chat_list = [];
    for (let i = 0; i < chatterInfo.length; i++) {
      if (i < 3) {
        let srcImg = chatterInfo[i].pfp ? chatterInfo[i].pfp : "/upload_pic.png";
        chat_list.push(<Img1 src={srcImg} />);
      }
    }
    return chat_list;
  };

  return (
    <NavCont onClick={onClick} bgcolor={bgcolor} margintop={margintop}>
      <ProfileCont>
        {/* <Img1 src="/upload_pic.png" />
        <Img2 display={display} src="/upload_pic.png" /> */}
        {getProfileCont()}
      </ProfileCont>
      {/* <p>{chatterInfo.length > 3 && "..."}</p> */}

      <InfoCont marginleft={marginleft}>
        <Name className="opensans">{chatterInfo.name}</Name>
        <Msg className="opensans">Hello {user.name}</Msg>
      </InfoCont>
      <TimeCont>
        <Time className="opensans">5 min</Time>
      </TimeCont>
    </NavCont>
  );
};

export default ChatNav;
