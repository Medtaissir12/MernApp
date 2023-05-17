import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Modal, Alert } from "react-bootstrap";
import { publicRequest } from "../rqstMethods";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 0, 0, 0.2)),
    url("https://i.redd.it/m6up7z4yphh31.jpg") center;
  background-size: cover;
  display: grid;
  place-items: center;
  ${mobile({ width: "75%" })}
`;

const Wrapper = styled.div`
  width: 60%;
  padding: 50px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 20px;
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  &::placeholder {
    color: #a6a6a6;
  }
`;

const Agreement = styled.span`
  display:flex;
  width:50%;
  align-items: center;
  font-size: 18px;
  margin: 40px 0px;
  text-align: center;

  a {
    color: #0b3f93;
    text-decoration: none;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
  b:hover {
      color: #0b3f93;
    }
  }
`;
const Button = styled.button`
  margin-top: 50px;
  width: 99%;
  border: none;
  padding: 15px;
  background-image: linear-gradient(to right, #0b3f93, #0356ac);
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 50px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
`;

const Message = styled.div`
  width: 95%;
  color: ${({ success }) => (success ? "green" : "red")};
  font-size: 14px;
`;

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlelastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordMatch(event.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordMatch(event.target.value === password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: name,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
    };
    try {
      const response = await publicRequest.post("auth/register", userData);
      console.log(response.data);
      setShowModal(true);
      setShowAlert(true);
      setName("");
      setLastName("");
      setPassword("");
      setUsername("");
      setEmail("");
      setConfirmPassword("");
    } catch (error) {
      console.log(error);
    }
  };


  const navigate = useNavigate();
  const handleModalClose = () => {
    setShowModal(false);
    navigate("/login");
  };

  return (
    <>
      <Container>
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Success!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {showAlert && (
              <Alert variant="success">
                <i className="bi bi-check-circle-fill"></i> Your account has
                been created successfully.
              </Alert>
            )}
          </Modal.Body>
        </Modal>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
            <Input
              placeholder="Last name"
              value={lastName}
              onChange={handlelastNameChange}
            />
            <Input
              placeholder="username"
              value={username}
              onChange={handleUsernameChange}
            />
            <Input
              placeholder="email"
              value={email}
              onChange={handleEmailChange}
            />
            <Input
              placeholder="password"
              type="text"
              value={password}
              onChange={handlePasswordChange}
            />
            <Input
              placeholder="confirm password"
              type="text"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <Message success={passwordMatch}>
              Password {passwordMatch ? "matches" : "doesn't match"}
            </Message>
            <Agreement>
              You already have an account ?{" "}
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/login"
              >
                {" "}
                <b style={{ textDecoration: "none" }}>SIGN IN </b>{" "}
              </Link>
            </Agreement>

            <Button disabled={!passwordMatch} onClick={handleSubmit}>
              CREATE
            </Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
