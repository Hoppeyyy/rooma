import Head from "next/head";
import styled from "styled-components";
import * as React from "react";
import Tutorial from "../comps/Tutorial";
import MemberProfile from "../comps/MemberProfile";
import NavBar2 from "../comps/NavBar2";
import AddMembers from "../comps/AddMembers";
import ProfileInfo from "../comps/ProfileInfo";
import Button from "../comps/Button";
import { useState } from "react";
import { useRouter } from "next/router";
import { getRoomates } from "../api/room.api";

const MainCont = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const NavCont = styled.div`
  display: flex;
`;
const Heading = styled.div`
  font-size: 34px;
  font-weight: 700;
  margin-left: 180px;
  margin-top: 50px;
`;

const LeftCont = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: 1px #d6d6d6 solid;
`;
const CardCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Right Container

const RightCont = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const ProfileHolder = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoHolder = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`;

const Profile = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #181135;
  margin-bottom: 15px;
`;

const Details = styled.div`
  max-width: 100%;
  color: #7e7e7e;
`;

const DetailHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
`;

export default function Members(props) {
  const [buttonstate5, setButtonState5] = useState(0);

  console.log("777777777777777777777");
  console.log("777777777777777777777");

  console.log(props.users);
  const GlobalNavClick = () => {
    if (buttonstate5 === 0) {
      setButtonState5(1);
    } else {
      setButtonState5(0);
    }
  };
  const [buttonstate6, setButtonState6] = useState(0);
  const NotificationClick = () => {
    if (buttonstate6 === 0) {
      setButtonState6(1);
      setButtonState7(0);
    } else {
      setButtonState6(0);
      setButtonState7(1);
    }
  };

  const displayMembers = () => {
    const user_list = props.users.map((user) => {
      return (
        <CardCont key={user.id}>
          <MemberProfile name={user.name} avatar={user.pfp} />
        </CardCont>
      );
    });
    return user_list;
  };

  const [buttonstate7, setButtonState7] = useState(0);
  const BackClick = () => {
    if (buttonstate7 === 0) {
      setButtonState7(1);
      setButtonState6(0);
    } else {
      setButtonState7(0);
      setButtonState6(1);
    }
  };
  const router = useRouter();
  return (
    <MainCont>
      <NavCont>
        <NavBar2
          // user pic src
          src="/Avatar.png"
          // user name
          name="Esther Howard"
          // user rooma point
          user_point="100 pts"
          // if there is new message in alert display:block else display:none
          Alertdisplay="block"
          // showing user is in members page right now
          color4="#8867EB"
          src4="/Members_Icon_Color.svg"
          onContClick={() => {
            GlobalNavClick();
          }}
          Navwidth={
            buttonstate5 === 1
              ? "140px"
              : "288px" || buttonstate6 === 1
              ? "288px"
              : ""
          }
          display={buttonstate5 === 1 ? "none" : "flex"}
          displayLogo={buttonstate5 === 1 ? "flex" : "none"}
          displayHome={buttonstate5 === 1 ? "none" : "block"}
          displayTask={buttonstate5 === 1 ? "none" : "block"}
          displayChat={buttonstate5 === 1 ? "none" : "block"}
          displayMember={buttonstate5 === 1 ? "none" : "block"}
          displayCommunity={buttonstate5 === 1 ? "none" : "block"}
          displaySetting={buttonstate5 === 1 ? "none" : "block"}
          alignItems={buttonstate5 === 1 ? "center" : "unset"}
          justifyContent={buttonstate5 === 1 ? "center" : "space-even"}
          onNotificationClick={() => {
            NotificationClick();
          }}
          onBackClick={() => {
            BackClick();
          }}
          Contdisplay={
            buttonstate6 === 1
              ? "none"
              : "flex" || buttonstate7 === 1
              ? "flex"
              : "none"
          }
          Contdisplay2={
            buttonstate6 === 1
              ? "flex"
              : "none" || buttonstate7 === 1
              ? "none"
              : "flex"
          }
        />
      </NavCont>
      <LeftCont>
        <Heading className="ubuntu">Members</Heading>

        {displayMembers()}
        {/* <CardCont>
          <MemberProfile /> */}
        {/* <AddMembers
        heading="Add Members"
        ps="Start by adding members"
        title="Go to Community"
        width="200px"
        height="50px"
        borderRadius="4.2px"
        onClick={()=>{
          router.push("/community")
        }}
        /> */}
        {/* </CardCont> */}
      </LeftCont>

      {/* Right Container */}
      <RightCont>
        <ProfileHolder>
          <MemberProfile boxshadow="none" />
        </ProfileHolder>

        <InfoHolder>
          <Profile className="opensans">Profile</Profile>
          <Details className="opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus velit
            consequat suspendisse sed semper mattis sed aliquet vulputate. Nisl
            ut commodo, aliquam mattis.
          </Details>

          <DetailHolder>
            <ProfileInfo />
            <ProfileInfo head="She/Her" subhead="pronouns" headsize="23px" />
            <ProfileInfo head="Student" subhead="Occupation" headsize="23px" />
            <ProfileInfo head="BCIT" subhead="School" headsize="23px" />
          </DetailHolder>

          {/* Preference */}
          <Profile className="opensans">Preference</Profile>

          <DetailHolder>
            <Button
              width="125px"
              height="40px"
              bgcolor="#F2EFFD"
              title="No Pets"
              fontSize="14px"
              fontcolor="#7751E8"
              border=" 1px solid #7751E8"
              fontWeight="500"
              borderRadius="29px"
            />
            <Button
              width="125px"
              height="40px"
              bgcolor="#F2EFFD"
              title="No smokers"
              fontSize="14px"
              fontcolor="#7751E8"
              border=" 1px solid #7751E8"
              fontWeight="500"
              borderRadius="29px"
            />
            <Button
              width="125px"
              height="40px"
              bgcolor="#F2EFFD"
              title="No loud noises"
              fontSize="14px"
              fontcolor="#7751E8"
              border=" 1px solid #7751E8"
              fontWeight="500"
              borderRadius="29px"
            />
            <Button
              width="125px"
              height="40px"
              bgcolor="#F2EFFD"
              title="Respect"
              fontSize="14px"
              fontcolor="#7751E8"
              border=" 1px solid #7751E8"
              fontWeight="500"
              borderRadius="29px"
            />
          </DetailHolder>

          {/* Interest */}
          <Profile className="opensans">Interest</Profile>

          <DetailHolder>
            <Button
              width="125px"
              height="40px"
              bgcolor="#F2EFFD"
              title="Hiking"
              fontSize="14px"
              fontcolor="#7751E8"
              border=" 1px solid #7751E8"
              fontWeight="500"
              borderRadius="29px"
            />
            <Button
              width="125px"
              height="40px"
              bgcolor="#F2EFFD"
              title="Game"
              fontSize="14px"
              fontcolor="#7751E8"
              border=" 1px solid #7751E8"
              fontWeight="500"
              borderRadius="29px"
            />
            <Button
              width="125px"
              height="40px"
              bgcolor="#F2EFFD"
              title="Shopping"
              fontSize="14px"
              fontcolor="#7751E8"
              border=" 1px solid #7751E8"
              fontWeight="500"
              borderRadius="29px"
            />
            <Button
              width="125px"
              height="40px"
              bgcolor="#F2EFFD"
              title="Skiing"
              fontSize="14px"
              fontcolor="#7751E8"
              border=" 1px solid #7751E8"
              fontWeight="500"
              borderRadius="29px"
            />
          </DetailHolder>
        </InfoHolder>
      </RightCont>
    </MainCont>
  );
}

// export const getServerSideProps = async () => {
//   let response =  getRoomates((err, result) => {
//     if (err) {
//       return {
//         props: {
//           users: null,
//         },
//       };
//     } else {
//       return {
//         props: {
//           users: result,
//         },
//       };
//     }
//   });

//   return response;
// };

export const getServerSideProps = (ctx) => {
  // return requireAuthen(context);
  return getRoomates(ctx);
};
