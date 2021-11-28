import React from "react";
import styled from "styled-components";

const Container = styled.div`
display: flex;
 justify-content: center;
 align-items:center;
 width: 100vw;
 height: 100vh;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items:center;
`;

function LoadingSpinner() {
  return (
    <Container>
      <Image src="/purpleload.gif" alt="" srcset="" />
    </Container>
  );
}

export default LoadingSpinner;
