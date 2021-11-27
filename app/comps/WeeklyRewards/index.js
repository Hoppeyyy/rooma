import react, { useEffect, useState } from "react";
import styled from "styled-components";
import WeeklyUserCont from "../WeeklyUserCont";

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  display: ${(props) => props.display};
`;
const Heading = styled.h3`
  font-size: 25px;
  font-weight: 700;
  color: #181135;
  margin: 0;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const UserCont = styled.div`
  display: flex;
  flex-direction: row;
`;

const WeeklyRewards = ({
  src = "/upload_pic.png",
  user_name = "User Name",
  user_point = "0 pts",
  display = "block",
  roomates,
}) => {
  const grabRoomates = () => {
    let rm_list = [];
    for (let i = 0; i < roomates.length; i++) {
      if (i < 2) {
        rm_list.push(
          <WeeklyUserCont
            src={roomates[i].pfp ? roomates[i].pfp : "/upload_pic.png"}
            user_name={roomates[i].name}
            user_point={roomates[i].points +" pts"}
          />
        );
      }
    }

    return rm_list;
  };

  return (
    <Cont display={display}>
      <Heading className="opensans">Weekly Rewards</Heading>
      <UserCont>
        {grabRoomates()}
        {/* {roomates.length && (
          <>
            <WeeklyUserCont
              src={roomates[0].pfp}
              user_name={user_name}
              user_point={user_point}
            />
            <WeeklyUserCont
              src={src}
              user_name={user_name}
              user_point={user_point}
            />
          </>
        )} */}
      </UserCont>
    </Cont>
  );
};
export default WeeklyRewards;
