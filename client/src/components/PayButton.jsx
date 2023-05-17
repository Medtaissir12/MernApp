import axios from "axios";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { url } from "../redux/apiCalls";
import { useState } from "react";
import { Modal, Button, Alert } from "react-bootstrap";

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const PayButton = ({ cartItems }) => {
  const user = useSelector((state) => state.user.currentUser);
  const [showModal, setShowModal] = useState(false);

  const handleCheckout = () => {
    if (!user) {
      setShowModal(true);
      return;
    }

    axios
      .post(`${url}/checkout/create-checkout-session`, {
        cartItems,
        userId: user._id,
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <StyledButton onClick={handleCheckout}>Check Out</StyledButton>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "red", color: "white" }}
        >
          <Modal.Title>Attention!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="danger">
            <i className="bi bi-exclamation-circle-fill"></i> You must have an
            account to proceed with the checkout.
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PayButton;
