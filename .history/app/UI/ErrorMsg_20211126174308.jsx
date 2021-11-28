import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #FADDE0;
  border-top: 2px solid #F3B4BB;
  border-bottom: 2px solid #F3B4BB;

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
