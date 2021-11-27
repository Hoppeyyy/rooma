import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
justify-content: center;
width: 50%;
background-color: #E6DDFA;
border: 2px solid #C2B1F2;
border-radius: 10px;
padding: 10px 20px 10px 20px;
margin-bottom: 30px;
`;

const Text = styled.div`
  color:#5A48C6;
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
