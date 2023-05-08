import React from "react";
import styled, { keyframes } from "styled-components";

const moveRtl = keyframes`
  0% {
    transform: translateX(300%);
  }
  
  100% {
    transform: translateX(-300%);
  }
`;

const Container = styled.div`
  height: 35px;
  width: 100%;
  background-color: #0b3f93;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`;

const Text = styled.span`
  animation: ${moveRtl} 23s linear infinite;
`;

const Announcement = () => {
  return (
    <Container>
      <Text>Super Deal Free Shipping on orders over $50</Text>
    </Container>
  );
};

export default Announcement;
