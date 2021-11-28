import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: absolute;
 
  top: 100px;
  right: 400px;
`;

const Image = styled.img`
  width: 300px;
`;

function LoadingSpinner() {
  return (
    <Container>
      <Image src="/plane.gif" alt="" srcset="" />
    </Container>
  );
}

export default LoadingSpinner;
