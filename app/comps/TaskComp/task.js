import react from "react";
import styled from "styled-components";
import Button from "../Button";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../pages/api/axiosInstance";
import { TimePicker } from "antd";
import "antd/dist/antd.css";

const MainCont = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 700px;
  min-height: 650px;
  box-shadow: 0px 4.0061163902282715px 47.07186508178711px 0px #0000001c;
  border-radius: 20px;
`;
const InputCont = styled.div`
  display: flex;
  margin: 20px;
  justify-content: space-evenly;
`;
const Input1 = styled.input`
  padding: 15px;
  border: #c8c8c8 1px solid;
  width: 50%;
  font-size: 15px;
  font-weight: 400;
  border-radius: 10px;
  margin-bottom: ${(props) => props.marginbottom};
  border: none;
  background-color: #f6f6f6;
  margin-right: 10px;
`;
const Input2 = styled.input`
  padding: 20px 10px 10px 20px;
  border: #c8c8c8 1px solid;
  width: 400px;
  font-size: 19px;
  font-weight: 400;
  border-radius: 10px;
  margin-bottom: ${(props) => props.marginbottom};
  margin-top: 10px;
  border: none;
  background-color: #f6f6f6;
`;
const Day = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px 10px 20px;
`;
const Head = styled.div`
  font-size: 25px;
  font-weight: 700;
  // margin: 0px 0px 10px 25px;
  color: #181135;
`;
const ButtonCont = styled.div`
  display: flex;
  width: 85%;
  margin: 10px 0px 10px 15px;
  justify-content: space-evenly;
`;
const DayButton = styled.button`
  width: 65px;
  height: 50px;
  font-size: 16px;
  color: #181135;
  font-weight: 600;
  background: white;
  border-radius: 13px;
  border: 1px solid #dbdbdb;
`;

const PtsButton = styled.button`
  width: 65px;
  height: 50px;
  font-size: 16px;
  color: #181135;
  font-weight: 700;
  background: white;
  border-radius: 13px;
  border: 1px solid #dbdbdb;
`;
const Span = styled.div`
  font-size: 10px;
  font-weight: 400;
  color: #181135;
`;
const MemWrap = styled.div`
  display: flex;
  width: 85%;
  margin: 10px 0px 10px 15px;
`;
const MemCont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 30px 0px 15px;
`;
const Avatar = styled.img`
  width: 60px;
  height: 60px;
  // border: 4px solid #796fe8;
  border-radius: 50%;
`;

const Name = styled.div`
  font-weight: 600;
  color: #3e3d3d;
  margin-top: 10px;
`;
const ButCont = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const TaskComp = ({ display = "none", onClick = () => {} }) => {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  //Day Button
  const weekends = [
    { id: "Monday", clicked: false, displayName: "Mon" },
    { id: "Tuesday", clicked: false, displayName: "Tue" },
    { id: "Wednesday", clicked: false, displayName: "Thur" },
    { id: "Thursday", clicked: false, displayName: "Wed" },
    { id: "Friday", clicked: false, displayName: "Fri" },
    { id: "Saturday", clicked: false, displayName: "Sat" },
    { id: "Sunday", clicked: false, displayName: "Sun" },
  ];
  const [weekButtons, setWeekButtons] = useState(weekends);
  const [originalRoom, setOriginalRoom] = useState([]);
  const [roommates, setRoommates] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        console.log("sending request");
        const user = axiosInstance.post("/auth/local", {
          email: "meow@gmail.com",
          password: "meow123",
        });
        console.log(user.data);
        const roommate = await axiosInstance.get("/user/roommates", {});
        console.log("hey", roommate.data);
        setOriginalRoom(roommate.data.roommates);
        setRoommates(roommate.data.roommates);
        console.log("real roomm", roommates);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  function handleButtonClick(buttonId) {
    const nextState = weekButtons.map((button) => {
      if (button.id !== buttonId) {
        return button;
      }
      console.log({ ...button, clicked: !button.clicked });
      return { ...button, clicked: !button.clicked };
    });
    setWeekButtons(nextState);
  }

  //Points Button
  const points = [
    { id: "10", span: "points", clicked: false },
    { id: "20", span: "points", clicked: false },
    { id: "30", span: "points", clicked: false },
    { id: "40", span: "points", clicked: false },
    { id: "50", span: "points", clicked: false },
    { id: "60", span: "points", clicked: false },
    { id: "70", span: "points", clicked: false },
  ];
  const [pointButtons, setPointButtons] = useState(points);

  function handlePointsClick(pointsId) {
    const pointState = pointButtons.map((points) => {
      if (points.id !== pointsId) {
        //user click only one point
        return { ...points, clicked: false };
      }
      return { ...points, clicked: !points.clicked };
    });
    setPointButtons(pointState);
  }

  function handleRoommatesClick(roommatesId) {
    const roommateState = roommates.map((roommate) => {
      if (roommate.id !== roommatesId) {
        return roommate;
      }
      console.log({ ...roommate, clicked: !roommate.clicked });
      return { ...roommate, clicked: !roommate.clicked };
    });
    setRoommates(roommateState);
  }

  //when user submit the form
  const submitForm = async (data, e) => {
    try {
      const days = weekButtons
        .filter((res) => res.clicked)
        .map((ele) => ele.id);
      const pts = pointButtons
        .filter((res) => res.clicked === true)
        .map((res) => res.id)[0];
      const assignedUsers = roommates
        .filter((res) => res.clicked === true)
        .map((ele) => ele.id);
      const date = new Date().toISOString();

      const addTodo = await axiosInstance.post("/task/create", {
        title: data.title,
        points: pts,
        assignedUsers: assignedUsers,
        days: days,
        startAt: date,
      });
      e.target.reset();
      setWeekButtons(weekends);
      setPointButtons(points);
      setRoommates(originalRoom);
      //clear fields after submit

      console.log(addTodo);
    } catch (err) {
      console.log(err.message);
    }
  };
  function onChange(time, timeString) {
    console.log(time, timeString);
  }

  return (
    <MainCont display={display}>
      <Cont>
        <form className="todoForm" onSubmit={handleSubmit(submitForm)}>
          <InputCont>
            <Input1
              type="text"
              name="title"
              placeholder="Add New Task"
              {...register("title")}
            />
            {/* <Input2
              className="opensans"
              type="time"
              name="date"
              placeholder="Time"
              {...register("data")}
            /> */}
            <TimePicker
              className="timePicker"
              use12Hours
              format="h:mm a"
              onChange={onChange}
            />
          </InputCont>
          <Day>
            <Head className="opensans">Day</Head>
            <ButtonCont>
              {weekButtons.map((button) => (
                <DayButton
                  type="button"
                  className="opensans"
                  key={button.id}
                  onClick={() => handleButtonClick(button.id)}
                  className={button.clicked ? "activeButton" : null}
                >
                  {button.displayName}
                </DayButton>
              ))}
            </ButtonCont>
          </Day>

          <Day>
            <Head className="opensans">Points</Head>
            <ButtonCont>
              {pointButtons.map((points) => (
                <PtsButton
                  type="button"
                  className="opensans"
                  key={points.id}
                  onClick={() => handlePointsClick(points.id)}
                  className={points.clicked ? "activeButton" : null}
                >
                  {points.id} <Span>Points</Span>
                </PtsButton>
              ))}
            </ButtonCont>
          </Day>

          <Day>
            <Head className="opensans">Members</Head>
            <MemWrap>
              {roommates.map((roommate) => (
                <MemCont key={roommate.id}>
                  <Avatar
                    key={roommate.id}
                    onClick={() => handleRoommatesClick(roommate.id)}
                    className={roommate.clicked ? "memberBorder" : null}
                    src="/Avatar2.png"
                  />
                  <Name className="opensans">{roommate.name}</Name>
                </MemCont>
              ))}
              {/* <MemCont>
                <Avatar src="/Avatar2.png" />
                <Name className="opensans">Victoria</Name>
              </MemCont> */}
            </MemWrap>
          </Day>
          <ButCont>
            <Button
              title="Add"
              width="122px"
              margin="0px 40px 40px 0px"
              onClick={onClick}
              type="submit"
            />
          </ButCont>
        </form>
      </Cont>
    </MainCont>
  );
};
export default TaskComp;
