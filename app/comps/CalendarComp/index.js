import react, { useState, useEffect } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import { getEvents } from "../../api/event.api";
import CustomUtil from "../../helpers/CustomUtil";

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 360px;
  max-width: 326px;
  min-height: 340px;
  max-height: 350px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: white;
  box-shadow: 0px 4.353448867797852px 51.15302276611328px 0px #0000001c;
  font-family: "Open Sans", sans-serif;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const CalendarComp = ({ onDateSelect, calTrigger }) => {
  const [dateTrigger, setDateTrigger] = useState(new Date());
  const [Events, setEvents] = useState(null);
  const [DateArr, setDateArr] = useState([]);

  // let dates_arr = [];

  // useEffect(() => {
  //   // let dates_arr = [];
  //   // document.querySelectorAll(
  //   //   ".react-calendar .react-calendar__month-view__days button abbr"
  //   // )
  //   // .forEach((each) => {
  //   //   dates_arr.push(each.getAttribute("aria-label"));
  //   // });
  //   console.log("cccccccccccccccccccc");
  //   // console.log(dates_arr);
  //   console.log(Events);
  // });

  useEffect(() => {
    getMonthEvents();

    // react-calendar__navigation
    // react-calendar__navigation__label
    // react-calendar__navigation__label__labelText

    let calendar__navigation = document.querySelector(
      ".react-calendar__navigation"
    );

    let calendar__navigation__label = calendar__navigation.querySelector(
      ".react-calendar__navigation__label"
    );

    let calendar__navigation__label__labelText =
      calendar__navigation__label.querySelector(
        ".react-calendar__navigation__label__labelText"
      );

    let inserted = document.createElement("span");
    inserted.innerHTML = `${calendar__navigation__label__labelText.textContent}`;

    inserted.classList.add("toRemove");

    calendar__navigation__label.style.display = "none";

    let prevInserts = document.querySelectorAll(".toRemove");
    prevInserts.forEach((e) => {
      e.remove();
    });

    calendar__navigation.insertBefore(
      inserted,
      calendar__navigation.childNodes[2]
    );

    // calendar__navigation__label.appendChild(inserted);

    // if (dates_arr.length > 0) {
    //   dates_arr.forEach((da) => {
    //     console.log("cccccccccccccccccccc");
    //     console.log(da);
    //     var new_element = da.cloneNode(true);
    //     da.parentNode.replaceChild(new_element, da);
    //   });
    // }
  }, [dateTrigger, calTrigger]);

  // useEffect(() => {

  //   let dates_arr = document.querySelectorAll(
  //     ".react-calendar__navigation__label .react-calendar__navigation__label__labelText"
  //   );

  //   if(dates_arr.length > 0) {
  //     dates_arr.forEach((da) => {

  //       const newItem = document.createElement('span');
  //       newItem.innerHTML = `${da.textContent}`;

  //       da.parentNode.parentNode.replaceChild(newItem, da.parentNode);

  //     })
  //   }

  // })

  const getMonthEvents = () => {
    // document.querySelectorAll(
    //   ".react-calendar .react-calendar__month-view__days button abbr"
    // )
    // .forEach((each) => {
    //   dates_arr.push(each.getAttribute("aria-label"));
    // });

    let dates_arr = document.querySelectorAll(
      ".react-calendar .react-calendar__month-view__days button abbr"
    );

    const startAt = new Date(dates_arr[0].getAttribute("aria-label"));
    const endAt = new Date(
      dates_arr[dates_arr.length - 1].getAttribute("aria-label")
    );

    // const calduration = `?startAt=${startAt}&endAt=${endAt}`;
    const calduration = `?startAt=${CustomUtil.flattenHours(
      startAt
    )}&endAt=${CustomUtil.flattenHours(endAt)}`;

    getEvents(calduration, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        CustomUtil.colorReactCal(dates_arr, result.data.events);
      }
    });
  };

  const handleDateSelect = (date) => {
    onDateSelect(date);
  };

  return (
    <Cont>
      <Calendar
        // onChange={(date) => setDate(date)}
        // defaultValue={date}
        selectRange={false}
        // onActiveStartDateChange={() => getMonthEvents()}
        // onActiveStartDateChange={({ activeStartDate }) =>
        //   setDate(activeStartDate)
        // }
        // onClickMonth={(date) => {
        //   console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
        //   console.log(date);
        // }}
        // onViewChange={({ action, activeStartDate, value, view }) => {
        //   console.log("bbbbbbbbbbbbbbbbbb");
        //   console.log(activeStartDate);
        //   console.log(view);
        // }}
        onClickDay={(value, event) => {
          handleDateSelect(value);
        }}
        onActiveStartDateChange={({ action, activeStartDate, value, view }) => {
          setDateTrigger(activeStartDate);
        }}
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
