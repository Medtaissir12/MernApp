import React from "react";
import styled, { keyframes } from "styled-components";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Navi from "../../components/Navi";
import ContactInfo from "./ContactInfo";
import FormContainer from "./FormContainer";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;
  margin-top: -50px;
  margin-bottom: 150px;
  height: 60%;
  border: 0.015px solid #1d428a;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.5s ease-in-out;
`;

function ContactForm() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Navi />
      <ContactFormContainer>
        <ContactInfo />
        <FormContainer />
      </ContactFormContainer>
      <Footer />
    </div>
  );
}

export default ContactForm;
