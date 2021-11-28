import react from "react";
import styled from "styled-components";
import RemindContent from "../RemindContent";
import Completed_RemindContent from "../RemindContent/completed";
//import Completed from '../Completed';
import WeeklyRewards from "../WeeklyRewards";
import { useEffect, useState } from "react";
import axiosInstance from "../../pages/api/axiosInstance";
import dayjs from "dayjs";

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 100vh;
`;
const CardCont = styled.div`
  width: 700px;
  min-height: ${(props) => props.height};
  background-color: white;
  box-shadow: 0px 4.014px 47.8px 0px #0000001c;
  border-radius: 22px;
  margin-top: 5px;
`;
const TopCont = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1.5;
`;
const HeadingCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const BotCont = styled.div`
  display: flex;
  flex-grow: 1;
`;
const Heading = styled.h3`
  font-size: 25px;
  font-weight: 700;
  color: #181135;
  margin: 0;
  margin-top: 32px;
  margin-left: 35px;
  margin-bottom: 20px;
`;
const DefMessage = styled.p`
  visibility: ${(props) => props.visibility};
  text-align: center;
  margin-top: 10px;
`;
const MoreCont = styled.div`
display:flex
width:685px;
height:45px;
text-align:center;
position:absolute;
top:${(props) => props.top};
`;
const CompleteCont = styled.div`
display:flex
height:45px;
margin-right:40px;
margin-top:40px;
`;
const Completed = styled.div`
  text-align: center;
  color: #7751e8;
  font-size: 16px;
  font-weight: 600;
`;
const More = styled.div`
  width: 685px;
  text-align: center;
  color: #7751e8;
`;
const Divider = styled.hr`
  border-top: 1px solid #e8e8e8;
  width: 700px;
`;
const Icon = styled.img`
  margin-bottom: 2px;
`;

const Reminder = ({
  def_visibility = "visible",
  reminder_display = "block",
  reminder_completed_display = "block",
  height = "400px",
  top = "435px",
  title_complete = "Completed ",
  title_more = "More ",
  rewards_display = "block",
  checked = "checked",
  onMoreClick = () => {},
  onCompleteClick = () => {},
  /* After expanding completed button on the top */
  //onCompleteClick_After=()=>{},
  roomates,
}) => {
  const [todos, setTodos] = useState([]);
  const [roommates, setRoommates] = useState([]);
  const [todotoday, setTodoToday] = useState([]);
  const [todotmw, setTodoTmw] = useState([]);

  const backgroundColor = (e) => {
    console.log(e);
    return e + "70";
  };

  useEffect(() => {
    (async () => {
      try {
        // console.log("if I have todo", todos);
        const roommate = await axiosInstance.get("/user/roommates", {});
        console.log(roommate.data);
        setRoommates(roommate.data.roommates);
        //roommates

        const date = new Date().toString();
        const today = dayjs(date).format("MM-DD-YY");
        const todaydate = new Date();
        let tomorrowdate = new Date();
        tomorrowdate.setDate(todaydate.getDate() + 1);
        const tomorrow = dayjs(tomorrowdate).format("MM-DD-YY");
        //days

        todos.forEach(function (e) {
          if (e.color == "") {
            const user = roommates.find((o) => o.id === e.userId);
            e.color = user.color;
            e.name = user.name;
          }
        });
        // console.log("heheheh", todos);

        const todayTodos = todos.filter(
          (o) => dayjs(o.date).format("MM-DD-YY") === today
        );

        const tomorrowTodos = todos.filter(
          (o) => dayjs(o.date).format("MM-DD-YY") === tomorrow
        );

        console.log("Todaydfasdf", todayTodos, tomorrowTodos);

        setTodoToday(todayTodos);
        setTodoTmw(tomorrowTodos);
      } catch (err) {}
    })();
  }, [todos]);

  useEffect(() => {
    (async () => {
      try {
        console.log("sending request");

        const todoRes = await axiosInstance.get("/task/list", {});

        const todoResTask = todoRes.data.tasks;
        const newTodoResTask = todoResTask.map((file) => {
          return { ...file, color: "", name: "" };
        });
        console.log("11111111", newTodoResTask);
        setTodos(newTodoResTask);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []);

  return (
    <Cont>
      <TopCont>
        {/*Main task cont within CardCont */}
        <CardCont height={height}>
          <scrollable-component>
            <HeadingCont>
              <Heading className="opensans">Today</Heading>
              <CompleteCont onClick={onCompleteClick}>
                <Completed className="opensans">
                  {title_complete}
                  <Icon src="/downarrow.svg" />
                </Completed>
              </CompleteCont>
            </HeadingCont>
            {todotoday.length == 0 ? (
              <DefMessage className="opensans">
                Nothing is scheduled for today.
              </DefMessage>
            ) : (
              todotoday.map((todo, index) => (
                <RemindContent
                  key={index}
                  bgcolor={backgroundColor(todo.color)}
                  display={reminder_display}
                  task_name={todo.title}
                  vlcolor={todo.color}
                  name={todo.name}
                  date="5:00-7:00PM"
                  margintop="0px;"
                />
              ))
            )}
            <Heading className="opensans">Tomorrow</Heading>
            {todotmw.length == 0 ? (
              <DefMessage className="opensans">
                Nothing is scheduled for tomorrow.
              </DefMessage>
            ) : (
              todotmw.map((todo, index) => (
                <RemindContent
                  key={index}
                  bgcolor={backgroundColor(todo.color)}
                  display={reminder_display}
                  task_name={todo.title}
                  vlcolor={todo.color}
                  name={todo.name}
                  date="5:00-7:00PM"
                  margintop="0px;"
                />
              ))
            )}
            {/* <RemindContent
              bgcolor="rgba(240,199,137,30%)"
              display={reminder_display}
              task_name="On going Task Name"
              vlcolor="#F0C789"
              name="Name"
              date="5:00-7:00PM"
              margintop="0px;"
            />

            <mpleted_RemindContent
              bgcolor="rgba(240,199,137,15%)"
              display={reminder_completed_display}
              task_name="Completed Task Name"
              vlcolor="rgba(241,178,82,25%)"
              name="Name"
              date="5:00-7:00PM"
              checked={checked}
            /> */}
            {/* <DefMessage className="opensans">
              Nothing is scheduled for today.
            </DefMessage> */}
            <MoreCont onClick={onMoreClick} top={top}>
              <More className="opensans">
                <Divider />
                {title_more}
                <Icon src="/down_arrow.png" />
              </More>
            </MoreCont>
          </scrollable-component>
        </CardCont>
        {/*completed cont */}
        {/* 
  <Completed 
  display={complete_display}
  onCompleteClick={onCompleteClick}
  width={complete_width}
  height={complete_height}
  borderRadius={complete_borderRadius}
  more_display={more_display}
  more_after_display={more_after_display}

  onClick={onCompleteClick_After}
  />
  */}
      </TopCont>
      {/*WeeklyRewards cont */}
      <BotCont>
        <WeeklyRewards display={rewards_display} roomates={roomates} />
      </BotCont>
    </Cont>
  );
};
export default Reminder;
