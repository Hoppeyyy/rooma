import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width:100vw;
  display: flex;
  align-items:center;
  justify-content:center;
`;

const Image = styled.img`
  width: 300px;
  align-items:center;
  text-align:center;
  justify-content:center;
`;

function LoadingSpinner() {
  return (
    <Container>
      <Image src="/loader.gif" alt="" srcset="" />
    </Container>
  );
}

export default LoadingSpinner;
