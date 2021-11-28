import react from "react";
import styled from "styled-components";
import PointCont from "../PointCont";

const Cont = styled.div`
  display: flex;
  flex-direction: row;
  width: 310px;
  height: 125px;
  background-color: white;
  box-shadow: 0px 4.353448867797852px 27.20905303955078px 0px #0000001f;

  border-radius: 11px;
  margin-right: 10px;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 50%;
`;
const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const Heading = styled.h3`
  font-size: 21px;
  font-weight: 700;
  color: #181135;
  margin: 0;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const WeeklyUserCont = ({
  src = "/upload_pic.png",
  user_name = "User Name",
  user_point = "0 pts",
}) => {
  return (
    <Cont>
      <Avatar src={src} />
      <UserInfoBox>
        <Heading className="opensans">{user_name}</Heading>
        <PointCont width="100px" height="35px" user_point={user_point} />
      </UserInfoBox>
    </Cont>
  );
};
export default WeeklyUserCont;
