import { useContext, useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import Button from "../Button";
import PointCont from "../PointCont";
import Notification from "../Notification";
import { globalContext } from "../../store/globalContext";
import { requireAuthenCompo } from "../../api/require.authen";

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
`;

const IconCont = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  justify-content: center;
  width: ${(props) => props.width};
  height: 100%;
`;

const TopContContainer = styled.div`
  margin-bottom: 130px;
`;
const TopCont = styled.div`
  margin-top: 40px;
  display: ${(props) => props.display};
`;
const TopCont2 = styled.div`
  display: ${(props) => props.display};
  margin-top: 100px;
  margin-bottom: 200px;
`;
const TabCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
  &:hover {
    cursor: pointer;
  }
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
  &:hover {
    cursor: pointer;
  }
`;
/*oepn nav:
justify-content:space-even;

close nav:
justify-content:center;
*/

const SetHover = styled.div`
  display: flex;
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
  bottom: 60px;
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
  margin-top: auto;
  margin-bottom: auto;
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
  text-align: center;
`;
const BellIconArea = styled.div`
  position: relative;
  left: 245px;
  height: 30px;
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
  top: -45px;
  left: 10px;
  position: absolute;
  top: -5px;
  left: 15px;
`;
const Num = styled.p`
  position: relative;
  color: #ffffff;
  font-size: 9px;
  top: 1px;
  margin-top: 0;
`;
const RoomaLogo = styled.img`
  width: 50px;
  height: 50px;
  position: relative;
  align-items: center;
  margin: auto;
`;
const NavBar3 = ({
  src = "/upload_pic.png",
  name = "Esther Howard",
  user_point = "0 pts",
  Alertdisplay = "block",
  AltNum = "1",
  alignItems = "unset",
  justifyContent = "space-even",
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
  onLinkClick,
}) => {
  const {
    setCurrentUser,
    currentUser,
    currentExpandNav,
    setCurrentExpandNav,
    setLoadingSpinner,
  } = useContext(globalContext);
  const [NoticeView, setNoticeView] = useState(false);

  const router = useRouter();

  useEffect(async () => {
    await requireAuthenCompo((err, res) => {
      if (err) {
        console.log(err);
      } else {
        setCurrentUser(res);
      }
    });
  }, []);

  const onContClick = () => {
    setCurrentExpandNav(!currentExpandNav);
  };

  const onNotificationClick = () => {
    setNoticeView(!NoticeView);
  };

  let flexExpand = currentExpandNav ? "flex" : "none";
  let flexClose = currentExpandNav ? "none" : "flex";
  let barWidth = currentExpandNav ? "288px" : "auto";

  return (
    <CtrlCont>
      {/* Use the ternary statement here with backtrack click event to display IconCont */}
      {NoticeView ? (
        <IconCont onClick={onNotificationClick}>
          <Notification NotificationWidth={barWidth} />
        </IconCont>
      ) : (
        <IconCont onClick={onContClick} width={barWidth}>
          {/*Wide global nav top cont from here*/}
          <TopContContainer>
            <TopCont display={flexExpand}>
              <BellIconArea
                onClick={(e) => {
                  e.stopPropagation();
                  onNotificationClick();
                }}
              >
                <BellIcon src="/Bell_Icon.svg" />
                <Alert display={Alertdisplay}>
                  <Num>{AltNum}</Num>
                </Alert>
              </BellIconArea>
              <ProfileCont>
                {currentUser && (
                  <>
                    <Pic
                      src={
                        currentUser.pfp ? currentUser.pfp : "/upload_pic.png"
                      }
                    ></Pic>

                    <Name className="opensans">
                      {currentUser.name ? currentUser.name : ""}
                    </Name>
                    <PointCont
                      width="90px"
                      height="40px"
                      user_point={currentUser.points}
                    />
                  </>
                )}
              </ProfileCont>
            </TopCont>
            {/*after closing show Rooma icon here*/}
            <TopCont2 display={flexClose}>
              <RoomaLogo src="/Logo.png" />
            </TopCont2>
          </TopContContainer>
          <MainIcons alignItems={alignItems}>
            <Hover
              justifyContent={justifyContent}
              color={color1}
              onClick={(e) => {
                e.stopPropagation();

                if (window.location.pathname !== "/") {
                  onLinkClick();
                  router.push("/");
                }
              }}
            >
              <TabCont>
                <Icon src={src1} />
                <Title className="opensans" display={flexExpand}>
                  Home
                </Title>
              </TabCont>
            </Hover>
            <Hover
              justifyContent={justifyContent}
              color={color2}
              onClick={(e) => {
                e.stopPropagation();
                if (window.location.pathname !== "/add_task") {
                  onLinkClick();
                  router.push("/add_task");
                }
              }}
            >
              <TabCont>
                <Icon src={src2} />
                <Title className="opensans" display={flexExpand}>
                  Tasks
                </Title>
              </TabCont>
            </Hover>
            <Hover
              justifyContent={justifyContent}
              color={color3}
              onClick={(e) => {
                e.stopPropagation();
                if (window.location.pathname !== "/chat") {
                  onLinkClick();
                  router.push("/chat");
                }
              }}
            >
              <TabCont>
                <Icon src={src3} />
                <Title className="opensans" display={flexExpand}>
                  Chat
                </Title>
              </TabCont>
            </Hover>
            <Hover
              justifyContent={justifyContent}
              color={color4}
              onClick={(e) => {
                e.stopPropagation();
                if (window.location.pathname !== "/members") {
                  onLinkClick();
                  router.push("/members");
                }
              }}
            >
              <TabCont>
                <Icon src={src4} />
                <Title className="opensans" display={flexExpand}>
                  Members
                </Title>
              </TabCont>
            </Hover>
            <Hover
              justifyContent={justifyContent}
              color={color5}
              onClick={(e) => {
                e.stopPropagation();
                if (window.location.pathname !== "/community") {
                  onLinkClick();
                  router.push("/community");
                }
              }}
            >
              <TabCont>
                <Icon src={src5} />
                <Title className="opensans" display={flexExpand}>
                  Community
                </Title>
              </TabCont>
            </Hover>
          </MainIcons>
          <SetHover
            color={color6}
            onClick={(e) => {
              e.stopPropagation();
              // setLoadingSpinner(true);
              if (window.location.pathname !== "/setting") {
                onLinkClick();
                router.push("/setting");
              }
            }}
          >
            <SetIconCont justifyContent={justifyContent}>
              <Icon src={src6} />
              <Title className="opensans" display={flexExpand}>
                Settings
              </Title>
            </SetIconCont>
          </SetHover>
        </IconCont>
      )}
    </CtrlCont>
  );
};
export default NavBar3;
