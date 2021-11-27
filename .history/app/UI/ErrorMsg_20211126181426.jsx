import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: ${props=>props.width};
  background-color: #FADDE0;
  border: 2px solid #F3B4BB;
  border-radius: 10px;
  padding: 10px 20px 10px 20px;
  margin-bottom: 30px;


`;

const Text = styled.div`
  color: #C64850;
  font-size: 1.2em;
`;

function ErrorMsg({ errmsg, width="50%" }) {
  return (
    <Wrapper>
      <Text className="opensans" width={width}>{errmsg}</Text>
    </Wrapper>
  );
}

export default ErrorMsg;
