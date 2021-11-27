import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #FADDE0;

`;

const Text = styled.p`
  color: white;
  font-size: 1.2em;
`;

function ErrorMsg({ errmsg }) {
  return (
    <Wrapper>
      <Text>{errmsg}</Text>
    </Wrapper>
  );
}

export default ErrorMsg;
