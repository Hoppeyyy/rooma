import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #f4f4f4;
  border: none;
  border-radius: 10px;
  margin-left: 30px;
  width: 300px;
  height: 50px;
  text-indent: 15px;
  margin-bottom: 30px;
  align-items: center;
`;

const Title = styled.p`
  margin-right: 1.5em;
  margin-top: 1em;
  
`;

const Select = styled.select`
  height: 20px;
  margin-right: 0.5em;
`;

const month31 = ["1", "3", "5", "7", "8", "10", "12"];
const monthPair = [
  [0, "January", 1],
  [1, "February", 2],
  [2, "March", 3],
  [3, "April", 4],
  [4, "May", 5],
  [5, "June", 6],
  [6, "July", 7],
  [7, "August", 8],
  [8, "September", 9],
  [9, "October", 10],
  [10, "November", 11],
  [11, "December", 12],
];

const years = [
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
];

function Picker({ onDateChange, PickerDate, title, type }) {
  // let selectedDate;
  // if (initialDate) {
  //   selectedDate = new Date(initialDate);
  // } else {
  //   selectedDate = new Date();
  // }

  const getYears = () => {
    let option_arr = [];

    let matching_option = "2021";

    // years.forEach((y) => {
    //   console.log(y + " y:year " + PickerDate["start"].year);
    //   if (PickerDate["start"].year === y) {
    //     matching_option = PickerDate["start"].year;
    //   }
    // });

    for (let i = 0; i < years.length; i++) {
      if (PickerDate["start"].year === years[i]) {
        console.log("matchedddd");
        console.log(years[i]);
        matching_option = PickerDate["start"].year;
        break;
      }
    }

    console.log("000000000000000000000");
    console.log(matching_option);

    for (let i = 0; i < years.length; i++) {
      console.log("3333333333333333");
      console.log('PickerDate["start"].year ' + PickerDate["start"].year);
      console.log(PickerDate["start"].year === matching_option);
      option_arr.push(
        <option
          selected={years[i] === matching_option ? true : false}
          value={years[i]}
        >
          {years[i]}
        </option>
      );
    }

    return option_arr;
  };

  const getMonths = () => {
    let option_arr = [];

    for (let i = 0; i < monthPair.length; i++) {
      option_arr.push(
        <option
          selected={PickerDate["start"].month == monthPair[i][2] ? true : false}
          value={monthPair[i][2]}
        >
          {monthPair[i][1]}
        </option>
      );
    }
    return option_arr;
  };

  const getDays = () => {
    let numdays = 30;
    let option_arr = [];

    if (month31.includes(PickerDate["start"].month)) {
      numdays = 31;
    } else if (PickerDate["start"].month === "2") {
      numdays = 28;
    }

    for (let i = 0; i < numdays; i++) {
      option_arr.push(
        <option selected={PickerDate["start"].day == i + 1 ? true : false}>
          {i + 1}
        </option>
      );
    }

    return option_arr;
  };

  return (
    <Container>
      <Title className="opensans">{title}</Title>
      <Select name="year" id="year" onChange={onDateChange}>
        {/* <option value="2021" selected>
          2021
        </option>
        <option value="2022">2022</option>
        <option value="2023">2023</option> */}
        {getYears()}
      </Select>
      <Select name="month" id="month" onChange={onDateChange}>
        {/* <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option> */}

        {getMonths()}
      </Select>
      <Select name="day" id="day" onChange={onDateChange}>
        {getDays()}
      </Select>
    </Container>
  );
}

export default Picker;
