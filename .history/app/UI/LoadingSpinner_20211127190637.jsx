import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: absolute;
  margin-left: 288px;
  top: 100px;
  right: 400px;
`;

const Image = styled.img`
  width: 300px;
`;

function LoadingSpinner() {
  return (
    <Container>
      <Image src="/loader.gif" alt="" srcset="" />
    </Container>
  );
}

export default LoadingSpinner;
