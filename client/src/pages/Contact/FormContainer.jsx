import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { keyframes } from "styled-components";
import { publicRequest } from "../../rqstMethods";
import { Modal, Alert } from "react-bootstrap";


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FormContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  padding: 40px;
  border:none;
  background-color: #fff;
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

const FormHeader = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
  color: #c9082a;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
  color: #1d428a;
`;

const FormInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #007bff;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #007bff;
  }
`;

const FormButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0069d9;
  }

  &:active {
    background-color: #005cbf;
  }
`;

function FormContainer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    try {
      const response = await publicRequest.post("contact/submit", userData);
      console.log(response.data);
       setShowModal(true);
       setShowAlert(true);
       setName("");
       setEmail("");
       setSubject("");
       setMessage("");
    } catch (error) {
      console.log(error);
    }
  };



  

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showAlert && (
            <Alert variant="success">
              <i className="bi bi-check-circle-fill"></i> Your message has been
              sent successfully.
            </Alert>
          )}
        </Modal.Body>
      </Modal>
      <FormContainerWrapper>
        <FormHeader>Contact Us</FormHeader>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <FormInput
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormInput
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Subject</FormLabel>
            <FormInput
              type="text"
              placeholder="Enter subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Message</FormLabel>
            <FormTextarea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </FormGroup>
          <FormButton type="submit" onClick={handleSubmit}>
            Send Message
          </FormButton>
        </Form>
      </FormContainerWrapper>
    </>
  );
}
export default FormContainer;
