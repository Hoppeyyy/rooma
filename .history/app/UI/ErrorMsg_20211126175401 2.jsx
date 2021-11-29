import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  background-color: #FADDE0;
  border: 2px solid #F3B4BB;
  border-radius: 10px;
  padding: 10px 20px 10px 20px;
  margin-bottom: 20px;


`;

const Text = styled.div`
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
