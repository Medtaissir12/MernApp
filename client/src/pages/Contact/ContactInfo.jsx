import React from 'react'
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding: 40px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

const ContactInfoHeader = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
  color: #c9082a;
`;

const ContactInfoItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactInfoLabel = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #1d428a;
`;

const ContactInfoValue = styled.p`
  font-size: 18px;
  color: #333;
`;

const ContactInfo = () => {
  return (
      <ContactInfoContainer>
        <ContactInfoHeader>Contact Info</ContactInfoHeader>
        <ContactInfoItem>
          <ContactInfoLabel>Phone</ContactInfoLabel>
          <ContactInfoValue>+49 30 901820</ContactInfoValue>
        </ContactInfoItem>
        <ContactInfoItem>
          <ContactInfoLabel>Email</ContactInfoLabel>
          <ContactInfoValue>customer.services@nbastore.de</ContactInfoValue>
        </ContactInfoItem>
        <ContactInfoItem>
          <ContactInfoLabel>Address</ContactInfoLabel>
          <ContactInfoValue>
            Alte Potsdamer Str. 7, Berlin, Germany
          </ContactInfoValue>
        </ContactInfoItem>
      </ContactInfoContainer>
  );
  
}

export default ContactInfo