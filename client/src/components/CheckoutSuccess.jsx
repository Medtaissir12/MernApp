import React from 'react'
import styled from "styled-components";
import Navbar from './Navbar';



const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(68, 68, 68);
  min-height: 80vh;

  h2 {
    margin-bottom: 0.5rem;
    color: #029e02;
  }

  p {
    font-size: 20px;
  }
`;
const CheckoutSuccess = () => {
  return (
    <>
    <Navbar/>
      <SuccessWrapper>
        <h2>Checkout Successful</h2>
        <p>Your order might take some time to process.</p>
        <p>
          Incase of any inqueries contact the support at{" "}
          <strong>customer.services@nbastore.de</strong>
        </p>
      </SuccessWrapper>
    </>
  );
}

export default CheckoutSuccess