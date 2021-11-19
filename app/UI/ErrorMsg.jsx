import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
  background-color: red;
`;

const Text = styled.p`
  color: white;
  font-size: 1.5em;
`;

function ErrorMsg({ errmsg }) {
  return (
    <Wrapper>
      <Text>{errmsg}</Text>
    </Wrapper>
  );
}

export default ErrorMsg;
