import React from "react";
import CalendarComp from "../CalendarComp";
import Event from "../Event";
import { useState, useContext } from "react";

function CalEventMerged() {
  const [displayForm, setDisplayForm] = useState(false);
  const [CalDate, setCalDate] = useState(null);
  const [calTrigger, setcalTrigger] = useState(false);

  const EventHandleClick = () => {
    setDisplayForm(!displayForm);
  };

  const onSetcalTrigger = () => {
    setcalTrigger(!calTrigger);
  };

  const onDateSelect = (date) => {
    setCalDate(date);
  };

  const onEventSubmitClick = () => {
    // setButtonState1(0);
    setDisplayForm(!displayForm);
    setcalTrigger(!calTrigger);
  };

  return (
    <div>
      <CalendarComp onDateSelect={onDateSelect} calTrigger={calTrigger} />
      <Event
        height="550px"
        day={CalDate ? CalDate.toDateString() : ""}
        // week="Select date above to view events"
        bgcolor="rgba(240,199,137,30%)"
        // visibility="visible"
        task_name="Event Name"
        vlcolor="#F0C789"
        name="Name"
        date="5:00-7:00PM"
        onClick={() => {
          EventHandleClick();
        }}
        // visibility={buttonstate1 === 1 ? "hidden" : "visible"}
        src={displayForm === true ? "/add_rotate.png" : "/add.png"}
        // visibility2={buttonstate1 === 1 ? "visible" : "hidden"}
        onSubmitClick={onEventSubmitClick}
        displayForm={displayForm}
        CalDate={CalDate}
        onSetcalTrigger={onSetcalTrigger}
      />
    </div>
  );
}

export default CalEventMerged;
