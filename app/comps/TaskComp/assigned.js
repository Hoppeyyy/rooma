import react from "react";
import styled from "styled-components";
import Button from "../Button";
import Assigned_User from "./assigned_user";
import { useEffect, useState } from "react";
import axiosInstance from "../../pages/api/axiosInstance";
import dayjs from "dayjs";

const MainCont = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Cont = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  max-width: 700px;
  min-height: 300px;
  box-shadow: 0px 4.0061163902282715px 47.07186508178711px 0px #0000001c;
  border-radius: 20px;
  margin-top:25px;
  
`;

const TopCont = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content:space-between;
`;
const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #181135;
  margin:0;
  margin-left:20px;
  margin-right: 30px;
  text-align:center;
`;

const TitleCont = styled.div`
 display:flex;
 flex-direction:row;
 align-items:center;
 justify-content:center;
 margin-top:10px;
`;

const Week = styled.p`
  font-size: 15px;
  color: #3e3d3d;
  font-weight: 700;
  margin:0;
`;

const Time = styled.span`
  font-weight: 400;
  color: #3e3d3d;
`;
const Point = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 28.8985px;
  flex-grow: 0;
  padding: 20px;
  height: 40px;
  background: linear-gradient(90deg, #9351e8 0%, #6853e9 51.56%, #504edb 100%);
  font-size: 16px;
  color: white;
  font-weight: 700;
  margin-top:20px;
  margin-left: 280px;
  margin-right:10px;
`;

const BottomCont = styled.div`
  display: flex;
  flex-direction: column;
`;

const Assigned = () => {
  const [todos, setTodos] = useState([]);

  const initialState = {
    title: "yes",
    users: [],
    days: [],
    taskId: "",
  };

  const [displayTodos, setDisplayTodos] = useState([initialState]);
  const [roommates, setRoommates] = useState([
    {
      title: "",
      users: [],
      days: [],
    },
  ]);

  useEffect(() => {
    (async () => {
      try {
        console.log("sending request");
        const todoRes = await axiosInstance.get("/task/list", {});
        setTodos(todoRes.data.tasks);
        // Your arrayconst

        const roommate = await axiosInstance.get("/user/roommates ", {});
        console.log("hey", roommate.data);
        setRoommates(roommate.data.roommates);

        const dates = todos.map((o) => ({
          title: o.title,
          id: o.id,
          day: dayjs(o.date).format("dddd"),
          user: o.id,
        }));
        console.log("hereis", dates);
        // const empty = [
        //   {
        //     title: "",
        //     users: [],
        //     days: [""],
        //     taskId: "",
        //   },
        // ];
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <MainCont>
          <Cont>
            <TopCont>
              <TitleCont>
              <Title className="opensans">{todo.title}</Title>
              <Week key={todo.id} className="opensans">
                {todo.days} <Time className="opensans">11:00 AM</Time>
              </Week>
              </TitleCont>
              <Point className="opensans">{todo.points} pts</Point>
            </TopCont>
            <BottomCont>
              <Assigned_User />
              <Assigned_User src="upload_pic.png" name="Leah" order="Order 2" />
              <Assigned_User src="Avatar3.png" name="Hailey" order="Order 3" />
              <Assigned_User order="Order 4" marginbottom="30px;" />
            </BottomCont>
          </Cont>
        </MainCont>
      ))}
    </div>
  );
};
export default Assigned;
