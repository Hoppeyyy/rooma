import react from "react";
import styled from "styled-components";
import RemindContent from "../RemindContent";
import Completed_RemindContent from "../RemindContent/completed";
//import Completed from '../Completed';
import WeeklyRewards from "../WeeklyRewards";
import { useEffect, useState } from "react";
import api from "../../api/axios";
import dayjs from "dayjs";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 100vh;
`;
const CardCont = styled.div`
  width: 700px;
  min-height: ${(props) => props.height};
  max-height: 100px;
  background-color: white;
  box-shadow: 0px 4.014px 47.8px 0px #0000001c;
  border-radius: 22px;
  margin-top: 5px;
  overflow-y: auto;
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
  visibility: ${(props) => props.reminder_display};
`;

const DefMessage = styled.p`
  visibility: ${(props) => props.visibility};
  text-align: center;
  margin-top: 10px;
`;
const MoreCont = styled.div`
display:flex
width:685px;
height:30px;
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
  const [completeWork, SetCompleteWork] = useState([]);
  const [clicked, setClicked] = useState(false);

  const backgroundColor = (e) => {
    // console.log(e);
    return e + "70";
  };
  useEffect(() => {
    (async () => {
      try {
        console.log("sending request");

        const todoRes = await api.get("/task/list", {});

        const todoResTask = todoRes.data.tasks;
        const newTodoResTask = todoResTask.map((file) => {
          return { ...file, color: "", name: "" };
        });
        // console.log("11111111", newTodoResTask);
        setTodos(newTodoResTask);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        // console.log("if I have todo", todos);
        const roommate = await api.get("/user/roommates", {});
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
        console.log("heheheh", todos);

        const todayTodos = todos
          .filter((o) => dayjs(o.date).format("MM-DD-YY") === today)
          .filter((o) => o.status == "incomplete");

        const tomorrowTodos = todos
          .filter((o) => dayjs(o.date).format("MM-DD-YY") === tomorrow)
          .filter((o) => o.status == "incomplete");

        console.log("Todaydfasdf", todayTodos, tomorrowTodos);

        const completeTodos = todos.filter((o) => o.status == "incomplete");
        // const completeTodostmw = todos
        //   .filter((o) => o.status == "complete");
        SetCompleteWork(completeTodos);

        setTodoToday(todayTodos);
        setTodoTmw(tomorrowTodos);
      } catch (err) {}
    })();
  }, [todos]);

  // function handleButtonClick(todoId) {
  //   alert("hey");
  //   todos.forEach(function (e) {
  //     if (e.date == todoId) {
  //       if (e.status == "complete") {
  //         e.status = "incomplete";
  //       } else {
  //         e.status = "complete";
  //       }
  //     }
  //   });
  //   console.log(todos)
  // }

  const handleButtonClick = (todoId) => {
    confirmAlert({
      title: "Confirm to get point",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: (e) => {
            setClicked(true);
            todos.forEach(function (e) {
              if (e.date == todoId) {
                if (e.status == "incomplete") {
                  e.status = "complete";
                  // console.log(e);
                  api
                    .post("/task/complete", {
                      id: e.id,
                      userId: e.userId,
                      date: e.date,
                    })
                    .then((response) => {
                      console.log("task complete");
                      console.log(response);

                      // Below added by Sean to force refresh the page so that the updated points can be seen.
                      location.reload();
                    });
                }
              }
            });
          },
        },
        {
          label: "No",
          onClick: (e) => {
            setClicked(false);
          },
        },
      ],
    });
    console.log(todos);
  };
  return (
    <Cont>
      <TopCont>
        {/*Main task cont within CardCont */}
        <CardCont height={height}>
          <scrollable-component>
            {reminder_display == "block" ? (
              <div>
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
                      checked={clicked}
                      key={index}
                      bgcolor={backgroundColor(todo.color)}
                      display={reminder_display}
                      task_name={todo.title}
                      vlcolor={todo.color}
                      name={todo.name}
                      date="5:00-7:00PM"
                      margintop="0px;"
                      onclickfunction={(event) => handleButtonClick(todo.date)}
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
                      checked={clicked}
                      key={index}
                      bgcolor={backgroundColor(todo.color)}
                      display={reminder_display}
                      task_name={todo.title}
                      vlcolor={todo.color}
                      name={todo.name}
                      date="5:00-7:00PM"
                      margintop="0px;"
                      onclickfunction={(event) => handleButtonClick(todo.date)}
                    />
                  ))
                )}
              </div>
            ) : (
              <div>
                <HeadingCont>
                  <Heading className="opensans">Completed</Heading>
                  <CompleteCont onClick={onCompleteClick}>
                    <Completed className="opensans">
                      {title_complete}
                      <Icon src="/downarrow.svg" />
                    </Completed>
                  </CompleteCont>
                </HeadingCont>
                {completeWork.length == 0 ? (
                  <DefMessage className="opensans">
                    Nothing is completed yet.
                  </DefMessage>
                ) : (
                  completeWork.map((todo, index) => (
                    <Completed_RemindContent
                      key={index}
                      bgcolor={backgroundColor(todo.color)}
                      display={reminder_completed_display}
                      task_name={todo.title}
                      vlcolor={todo.color}
                      name={todo.name}
                      date="5:00-7:00PM"
                      margintop="0px;"
                      onclickfunction={(event) => handleButtonClick(todo.date)}
                    />
                  ))
                )}
              </div>
            )}

            {/* {completeWorkTmw.length == 0 ? (
              <DefMessage className="opensans">
                Nothing is completed for tomorrow.
              </DefMessage>
            ) : (
              completeWorkTmw.map((todo, index) => (
                <Completed_RemindContent
                  key={index}
                  bgcolor={backgroundColor(todo.color)}
                  display={reminder_completed_display}
                  task_name={todo.title}
                  vlcolor={todo.color}
                  name={todo.name}
                  date="5:00-7:00PM"
                  margintop="0px;"
                  onclickfunction={(event) => handleButtonClick(todo.date)}
                />
              ))
            )} */}
          </scrollable-component>
        </CardCont>
        {/*completed cont */}
      </TopCont>
      {/*WeeklyRewards cont */}
      <BotCont>
        <WeeklyRewards display={rewards_display} roomates={roomates} />
      </BotCont>
    </Cont>
  );
};
export default Reminder;
