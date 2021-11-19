import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import Button from "../Button";
import PointCont from "../PointCont";
import Notification from "../Notification";

const CtrlCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-shadow: 0px 4.0133771896362305px 11.036787033081055px 0px #00000014;
`;

const ProfileCont = styled.div`
  width: 75%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin-left: 13px;
  top: -70px;
`;

const IconCont = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  justify-content: center;
  width: ${(props) => props.width};
  height: 100%;
`;
const TopCont = styled.div`
  display: ${(props) => props.display};
`;
const TopCont2 = styled.div`
  display: ${(props) => props.display};
`;
const TabCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`;
const Hover = styled.div`
  justify-content: ${(props) => props.justifyContent};
  color: ${(props) => props.color};
  :hover {
    width: 100%;
    display: flex;
    align-items: center;
    background: #f4f4f4;
  }
`;

const SetIconCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`;
/*oepn nav:
justify-content:space-even;

close nav:
justify-content:center;
*/

const SetHover = styled.div`
  display: flex;
  position: relative;
  top: 100px;
  color: ${(props) => props.color};
  :hover {
    width: 100%;
    align-items: center;
    background: #f4f4f4;
  }
`;
const MainIcons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 40%;
  justify-content: space-between;
  align-items: ${(props) => props.alignItems};
  position: relative;
  bottom: 30px;
`;
/*
open nav bar:
align-items:" "
close nav bar:
align-items:center; 

*/
//items in the div's

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const Title = styled.p`
  font-size: 21px;
  font-weight: 400;
  margin-left: 30px;
  display: ${(props) => props.display};
`;

const Pic = styled.img`
  width: 115px;
  height: 115px;
  border-radius: 50%;
`;

const Name = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const BellIconArea = styled.div`
  position: relative;
  left: 245px;
  top: -130px;
`;
const BellIcon = styled.img`
  width: 25px;
  height: 30px;
`;
const Alert = styled.div`
  display: ${(props) => props.display};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #5950e0;
  position: relative;
  top: -45px;
  left: 10px;
`;
const Num = styled.p`
  position: relative;
  color: #ffffff;
  font-size: 9px;
  top: 3px;
`;
const RoomaLogo = styled.img`
  width: 50px;
  height: 50px;
  position: relative;
  bottom: 145px;
  margin-left: 48px;
  align-items: center;
`;
const NavBar2 = ({
  src = "/Avatar.png",
  name = "Esther Howard",
  user_point = "100 pts",
  Alertdisplay = "block",
  AltNum = "1",
  // making nav width change
  onContClick = () => {},
  Navwidth = "288px",
  display = "flex",
  displayLogo = "none",
  displayHome = "block",
  displayTask = "block",
  displayChat = "block",
  displayMember = "block",
  displayCommunity = "block",
  displaySetting = "block",
  alignItems = "unset",
  justifyContent = "space-even",
  // changing the color by detecting the page location
  color1 = "#4E4E4E",
  src1 = "/Home_Icon.svg",
  color2 = "#4E4E4E",
  src2 = "/Task_Icon.svg",
  color3 = "#4E4E4E",
  src3 = "/Chat_Icon.svg",
  color4 = "#4E4E4E",
  src4 = "/Members_Icon.svg",
  color5 = "#4E4E4E",
  src5 = "/search.svg",
  color6 = "#4E4E4E",
  src6 = "/Settings_Icon.svg",
  // notification clicked, change the interface
  onNotificationClick = () => {},
  Contdisplay = "flex",
  Contdisplay2 = "none",
  // notification clicked and back to navbar view
  onBackClick = () => {},
  NotificationWidth = "288px",
}) => {
  const router = useRouter();
  return (
    <CtrlCont>
      <IconCont display={Contdisplay2}>
        <Notification
          onBackClick={onBackClick}
          NotificationWidth={NotificationWidth}
        />
      </IconCont>
      <IconCont display={Contdisplay} onClick={onContClick} width={Navwidth}>
        {/*Wide global nav top cont from here*/}
        <TopCont display={display}>
          <BellIconArea onClick={onNotificationClick}>
            <BellIcon src="/Bell_Icon.svg" />
            <Alert display={Alertdisplay}>
              <Num>{AltNum}</Num>
            </Alert>
          </BellIconArea>
          <ProfileCont>
            <Pic src={src}></Pic>
            <Name className="opensans">{name}</Name>
            <PointCont width="90px" height="40px" user_point={user_point} />
          </ProfileCont>
        </TopCont>
        {/*after closing show Rooma icon here*/}
        <TopCont2 display={displayLogo}>
          <RoomaLogo src="/Logo.png" />
        </TopCont2>

        <MainIcons alignItems={alignItems}>
          <Hover justifyContent={justifyContent} color={color1}>
            <TabCont
              onClick={() => {
                router.push("/");
              }}
            >
              <Icon src={src1} />
              <Title className="opensans" display={displayHome}>
                Home
              </Title>
            </TabCont>
          </Hover>
          <Hover justifyContent={justifyContent} color={color2}>
            <TabCont
              onClick={() => {
                router.push("/add_task");
              }}
            >
              <Icon src={src2} />
              <Title className="opensans" display={displayTask}>
                Tasks
              </Title>
            </TabCont>
          </Hover>
          <Hover justifyContent={justifyContent} color={color3}>
            <TabCont
              onClick={() => {
                router.push("/chat");
              }}
            >
              <Icon src={src3} />
              <Title className="opensans" display={displayChat}>
                Chat
              </Title>
            </TabCont>
          </Hover>
          <Hover justifyContent={justifyContent} color={color4}>
            <TabCont
              onClick={() => {
                router.push("/members");
              }}
            >
              <Icon src={src4} />
              <Title className="opensans" display={displayMember}>
                Memebers
              </Title>
            </TabCont>
          </Hover>
          <Hover justifyContent={justifyContent} color={color5}>
            <TabCont
              onClick={() => {
                router.push("/community");
              }}
            >
              <Icon src={src5} />
              <Title className="opensans" display={displayCommunity}>
                Community
              </Title>
            </TabCont>
          </Hover>
        </MainIcons>
        <SetHover color={color6}>
          <SetIconCont
            justifyContent={justifyContent}
            onClick={() => {
              router.push("/setting");
            }}
          >
            <Icon src={src6} />
            <Title className="opensans" display={displaySetting}>
              Settings
            </Title>
          </SetIconCont>
        </SetHover>
      </IconCont>
    </CtrlCont>
  );
};
export default NavBar2;
