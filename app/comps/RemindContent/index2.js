import react from "react";
import styled from "styled-components";
import { deleteEvent } from "../../api/event.api";

const Cont = styled.div`
  display: flex;
  margin-left: 30px;
  margin-top: 20px;
  visibility: ${(props) => props.visibility};
`;
const CardCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 65px;
  background-color: ${(props) => props.bgcolor};
  border-radius: 15px;
`;
const LeftCont = styled.div`
  display: flex;
  flex-grow: 1;
`;
const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 8;
`;
const VerLine = styled.div`
  border-left: 3px solid;
  border-left-color: ${(props) => props.vlcolor};
  border-radius: 10px;
  height: 32px;
  margin-left: 20px;
  margin-top: 18px;
`;
const Heading = styled.div`
  font-size: 13px;
  color: #3e3d3d;
  margin: 0;
  margin-top: 15px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
`;

const Details = styled.p`
  font-size: 10px;
  margin-top: 5px;
  color: #555555;
`;
const Span = styled.span`
  font-weight: 700;
  color: #555555;
`;

const RemindContent = ({
  bgcolor = "rgba(240,199,137,30%)",
  // visibility="visible",
  task_name = "Task Name",
  vlcolor = "#F0C789",
  name = "Name",
  date = "5:00-7:00PM",
  eventId,
  onSetRefresh,
  onSetcalTrigger
}) => {

  const onHandleDelete = (eventId) => {
    deleteEvent(eventId, (err, response) => {
      if (err) {
        console.log("deleteEvent error");
        console.log(err);
      } else {
        console.log('delete success');
        console.log(response);
        onSetRefresh();
        onSetcalTrigger();
      }
    });
  };
  
  return (
    // <Cont visibility={visibility}>
    <Cont>
      <CardCont bgcolor={bgcolor}>
        <LeftCont>
          <VerLine vlcolor={vlcolor} />
        </LeftCont>
        <MainCont>
          <Heading className="opensans">
          <span>{task_name}</span>
          <img src="/delete.png" alt="" width="20px" style={{    marginRight:"10px"
          }} onClick={() => {
            onHandleDelete(eventId);
          }}/>
          </Heading>
          <Details className="opensans">
            <Span>{name} </Span>
            {date}
          </Details>
        </MainCont>
      </CardCont>
    </Cont>
  );
};
export default RemindContent;
