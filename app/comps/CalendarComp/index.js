import react, { useState, useEffect } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import { getEvents } from "../../api/event.api";
import CustomUtil from "../../helpers/CustomUtil";

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 290px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: white;
  box-shadow: 0px 4.353448867797852px 51.15302276611328px 0px #0000001c;
  font-family: "Open Sans", sans-serif;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const CalendarComp = ({}) => {
  const [date, setDate] = useState(new Date());
  const [Events, setEvents] = useState(null);
  const [DateArr, setDateArr] = useState([]);

  // let dates_arr = [];

  useEffect(() => {
    // let dates_arr = [];
    // document.querySelectorAll(
    //   ".react-calendar .react-calendar__month-view__days button abbr"
    // )
    // .forEach((each) => {
    //   dates_arr.push(each.getAttribute("aria-label"));
    // });
    console.log("cccccccccccccccccccc");
    // console.log(dates_arr);
    console.log(Events);
  });

  useEffect(() => {
    console.log("ddddddddddddddddddddddd");
    console.log(date);
    getMonthEvents();
  }, [date]);

  const getMonthEvents = () => {
    console.log("000000000000000000000????");

    // document.querySelectorAll(
    //   ".react-calendar .react-calendar__month-view__days button abbr"
    // )
    // .forEach((each) => {
    //   dates_arr.push(each.getAttribute("aria-label"));
    // });

    let dates_arr = document.querySelectorAll(
      ".react-calendar .react-calendar__month-view__days button abbr"
    );

    const startAt = new Date(
      dates_arr[0].getAttribute("aria-label")
    ).toISOString();
    const endAt = new Date(
      dates_arr[dates_arr.length - 1].getAttribute("aria-label")
    ).toISOString();

    getEvents(`?startAt=${startAt}&endAt=${endAt}`, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        //  setEvents(result.data.events);
        CustomUtil.colorReactCal(dates_arr, result.data.events);
      }
    });
  };

  return (
    <Cont>
      <Calendar
        onChange={(date) => setDate(date)}
        value={date}
        selectRange={true}
        onActiveStartDateChange={() => getMonthEvents()}
      />
      {/*{date.length > 0 ? (
  <p>
    <span>Start:</span>{' '}
    {date[0].toDateString()}
    &nbsp;|&nbsp;
    <span>End:</span> {date[1].toDateString()}
  </p>
) : (
  <p>
    <span>Default selected date:</span>{' '}
    {date.toDateString()}
  </p>
)}*/}
    </Cont>
  );
};
export default CalendarComp;
