import React from "react";
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
`;

const Select = styled.select`
  height: 20px;
  margin-right: 0.5em;
`;

const month31 = ["1", "3", "5", "7", "8", "10", "12"];
function Picker({ onDateChange, PickerDate, title, type }) {
  const getDays = () => {
    let numdays = 30;
    let option_arr = [];

    if (month31.includes(PickerDate[type].month)) {
      numdays = 31;
    } else if (PickerDate.month === "2") {
      numdays = 28;
    }

    for (let i = 0; i < numdays; i++) {
      option_arr.push(
        <option
          selected={PickerDate[type].day == "1" && i + 1 == 1 ? true : false}
        >
          {i + 1}
        </option>
      );
    }

    return option_arr;
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Select name="year" id="year" onChange={onDateChange}>
        <option value="2021" selected>
          2021
        </option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </Select>
      <Select name="month" id="month" onChange={onDateChange}>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11" selected>
          November
        </option>
        <option value="12">December</option>
      </Select>
      <Select name="day" id="day" onChange={onDateChange}>
        {getDays()}
      </Select>
    </Container>
  );
}

export default Picker;
