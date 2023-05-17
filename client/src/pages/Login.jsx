import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { mobile } from "../responsive";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://cdn.nba.com/manage/2023/04/Image-from-iOS.jpg")
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 30px 50px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #4263eb;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  flex: 1;
  letter-spacing: 3px;
  min-width: 40%;
  margin: 10px 0;
  padding: 12px 18px;
  font-size: 18px;
  height: 50px;
  line-height: 30px;
  background-color: #f7f7f7;
  border: none;
  border-radius: 10px;
  color: #333;
  transition: all 0.3s ease;
  &::placeholder {
    font-size: 14px;
  }
  &:focus {
    outline: none;
    background-color: #e6e6e6;
    border-bottom: 2px solid #0b3f93;
  }
  &[type="password"] {
    font-size: 25px;
    letter-spacing: 5px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  &:focus {
    outline: none;
    background-color: #e6e6e6;
    border-bottom: 2px solid #0b3f93;
  }
`;

const StyledLink = styled(Link)`
  margin: 5px 0px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  color: #999;
  transition: color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: #0b3f93;
  }
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputContainer>
            <Input
              placeholder="password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              style={{ border: "none", outline: "none" }}
            />
            {showPassword ? (
              <VisibilityIcon
                style={{ width: "50px", cursor: "pointer" }}
                onClick={togglePasswordVisibility}
              />
            ) : (
              <VisibilityOffIcon
                style={{ width: "50px", cursor: "pointer" }}
                onClick={togglePasswordVisibility}
              />
            )}
          </InputContainer>
          <Button
            variant="contained"
            onClick={handleClick}
            disabled={isFetching}
            style={{ width: "40%", padding: "5px 12px", margin: "10px 0" }}
            disableElevation
          >
            LOGIN
          </Button>
          <StyledLink>DO NOT YOU REMEMBER THE PASSWORD?</StyledLink>
          <StyledLink to="/register">CREATE A NEW ACCOUNT</StyledLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
