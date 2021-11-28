import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  text-align: center;
  width: 100%;
  padding: 0 20px;
  background-color: #724fe9;
`;

const Text = styled.p`
  color: white;
  font-size: 1.2em;
`;

function CurrentMsg({ msg }) {
  return (
    <Wrapper>
      <Text>{msg}</Text>
    </Wrapper>
  );
}

export default CurrentMsg;
