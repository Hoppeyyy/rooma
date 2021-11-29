import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  background-color: #FADDE0;
  border: 2px solid #F3B4BB;
  border-radius: 10%;


`;

const Text = styled.p`
  color: #C64850;
  font-size: 1.2em;
`;

function ErrorMsg({ errmsg }) {
  return (
    <Wrapper>
      <Text className="opensans">{errmsg}</Text>
    </Wrapper>
  );
}

export default ErrorMsg;
