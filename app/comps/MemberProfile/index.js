import react from "react";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  width: 500px;
  height: 200px;
  box-shadow: ${(props) => props.boxshadow};
  border-radius: 21.6276px;
  margin-left: 20px;
  margin-top: ${(props) => props.margintop};
`;

const CardCont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Avatar = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 40px;
  border-radius: 50%;
`;

const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: #181135;
  margin-bottom: 2px;
`;
const Phone = styled.div`
  font-size: 18px;
  color: #7e7e7e;
  margin-bottom: 15px;
`;
const Icon = styled.img`
  margin-right: 10px;
  width: 14px;
`;

const ButtonCont = styled.div`
  display: flex;
  margin-top: 5px;
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
`;

const Message = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 28.8985px;
  background-color: transparent;
  font-size: 16px;
  width: 100px;
  height: 40px;
  border: 1px solid #7751e8;
  color: #7751e8;
  font-weight: 600;
`;

const MembersProfile = ({
  avatar = "/Avatar2.png",
  name = "Esther Howard",
  phone = "(603) 555-0123",
  points = "0 pts",
  boxshadow = "0px 3.3273186683654785px 39.09598922729492px 0px #0000001C",
  margintop = "38px",
}) => {
  return (
    <Cont boxshadow={boxshadow} margintop={margintop}>
      <CardCont>
        <Avatar src={avatar} />

        <InfoCont>
          <Name className="opensans">{name}</Name>
          <Phone className="opensans">
            <Icon src="/phone.svg" />
            {phone}
          </Phone>

          <ButtonCont>
            <Point className="opensans">{points}</Point>
            <Message className="opensans">Message</Message>
          </ButtonCont>
        </InfoCont>
      </CardCont>
    </Cont>
  );
};
export default MembersProfile;
