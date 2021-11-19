import react, { useState } from "react";
import styled from "styled-components";
import { getCode } from "../../api/room.api";

const MainCont = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
  align-items: left;
  position: relative;
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  margin: 50px;
`;
const Head = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: #1e1e1e;
  margin-bottom: 12px;
`;
const Text = styled.div`
  font-size: 20px;
  color: #666666;
  font-weight: 400;
`;
const Copy = styled.button`
  display: flex;
  max-width: 160px;
  height: 65px;
  justify-content: center;
  align-items: center;
  background-color: #f6f6fe;
  border: none;
  // padding: 20px;
  border-radius: 6px;
  margin-top: 25px;
  position: relative;
  // left: ${(props) => props.position};
  // left:500px;
  margin-left: 65%;
  margin-top: 30px;
`;
const Img = styled.img`
  margin-right: 10px;
  width: 30px;
  height: 30px;
`;
const ButtonTxt = styled.div`
  font-size: 18px;
  color: #7751e8;
  font-weight: 600;
`;

const Line = styled.hr`
  border: 0.5px solid #d6d6d6;
  width: 100%;
`;

const Point = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 28.8985px;
  width: 100px;
  height: 40px;
  background: linear-gradient(90deg, #9351e8 0%, #6853e9 51.56%, #504edb 100%);
  font-size: 16px;
  color: white;
  font-weight: 600;
  margin-right: 10px;
  margin: auto;
`;

const Success = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 5px solid #7751e8;
`;
const Invite = ({
  // show=false
  display = "none",
}) => {
  const [InvCode, setInvCode] = useState("");
  // if(show == false){
  //     return<></>
  // }
  const onGetCode = () => {
    getCode((err, result) => {
      if (err) {
        console.log("onGetCode onGetCode err");
        console.log(err);
        // setCurrentError(err.err);
      } else {
        console.log("vvvvvvvvvvvvvvvvvvv");
        console.log(result.data.invcode);
        setInvCode(result.data.invcode);
      }
    });
  };

  return (
    <MainCont display={display}>
      <Cont>
        <Head className="opensans">Invite a member with a link</Head>
        <Text className="opensans">
          Invite a member to join your team from another device.
        </Text>
        <Copy>
          <Img src="/link.svg"></Img>
          <ButtonTxt className="opensans">Copy Link</ButtonTxt>
        </Copy>
      </Cont>
      <Line />
      <Cont>
        <Head className="opensans">Invite a member with a code</Head>
        <Text className="opensans">
          Invite a member to join your team by sending a code.
        </Text>
        <Copy>
          <Img src="/Code.svg"></Img>
          <ButtonTxt className="opensans" onClick={() => onGetCode()}>
            Get Code
          </ButtonTxt>
        </Copy>
        {InvCode && (
          <Success>
            <Head className="opensans">Success!</Head>
            <Text className="opensans">
              Share the code below with your member. They will be asked for it
              when they join.
            </Text>
            <Point className="opensans">{InvCode}</Point>
          </Success>
        )}
      </Cont>
    </MainCont>
  );
};

export default Invite;
