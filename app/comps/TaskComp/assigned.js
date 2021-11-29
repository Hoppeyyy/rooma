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
  margin-top: 25px;
`;

const TopCont = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #181135;
  margin: 0;
  margin-left: 20px;
  margin-right: 30px;
  text-align: center;
`;

const TitleCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Week = styled.p`
  font-size: 15px;
  color: #3e3d3d;
  font-weight: 700;
  margin: 0;
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
  margin-top: 20px;
  margin-left: 280px;
  margin-right: 10px;
`;

const BottomCont = styled.div`
  display: flex;
  flex-direction: column;
`;

const Assigned = () => {
  const [todos, setTodos] = useState([]);
  const [roommates, setRoommates] = useState([]);
  const [todoCards, setTodoCards] = useState([]);
  const [returnUser, setReturnUsers] = useState([]);

  function titleCase(string) {
    return string.toString().toUpperCase();
  }
  useEffect(() => {
    (async (data) => {
      try {
        console.log("sending request");
        const roommate = await axiosInstance.get("/user/roommates ", {});
        console.log("hey", roommate.data);
        setRoommates(roommate.data.roommates);

        // todos.forEach(function (e) {
        //   if (e.color == "") {
        //     const user = roommates.find((o) => o.id === e.userId);
        //     e.color = user.color;
        //     e.name = user.name;
        //   }
        // });

        const assignedUsers = roommates
          .filter((res) => res.clicked === true)
          .map((ele) => ele.id);

        const newcards = await (
          await axiosInstance.get("/task/schedule", {})
        ).data.schedules;
        // console.log(newcards);

        setTodoCards(newcards);

        // todoCards.forEach(function (e) {
        //   const users = e.assignedUsers;

        //   users.forEach(function (e) {
        //     const user = roommates.find((o) => o.id === e);
        //     console.log("hi", user.name);
        //     user.name;
        //   });
        // });

        console.log("card", todoCards);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []);

  function namefind(name) {
    const nameArray = [];
    name.forEach(function (e) {
      const user = roommates.find((o) => o.id === e);
      nameArray.push(user);
    });
    // console.log(nameArray);
    const returnValue = nameArray.map((o) => ({ name: o.name, image: o.pfp }));
    // console.log(returnValue);
    return returnValue;
  }

  return (
    <div>
      {todoCards.map((todo, index) => (
        <MainCont key={index}>
          <Cont>
            <TopCont>
              <TitleCont>
                <Title className="opensans">{todo.title}</Title>
                <Week key={todo.id} className="opensans">
                  {titleCase(todo.days)}
                  {/* <Time className="opensans">11:00 AM</Time> */}
                </Week>
              </TitleCont>
              <Point className="opensans">{todo.points} pts</Point>
            </TopCont>
            <BottomCont>
              {namefind(todo.assignedUsers).map((object, i) => (
                <Assigned_User
                  name={object.name}
                  key={i}
                  order={i + 1}
                  src={object.image}
                />
              ))}
            </BottomCont>
          </Cont>
        </MainCont>
      ))}
    </div>
  );
};
export default Assigned;
