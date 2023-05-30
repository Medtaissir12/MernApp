import { useState } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled components for the login form layout
const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 70%;
`;

const Image = styled.img`
  width: 400px;
  height: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;

  &:hover {
    border-color: #aaa;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
    border-color: #f1356d;
    box-shadow: 0 0 5px rgba(241, 53, 109, 0.5);
  }
`;


const Button = styled.button`
  padding: 10px;
  width: 100px;
  background-color: #f1356d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom:20px;

  &:hover {
    background-color: #c1174e;
  }
`;

const Text = styled.p`
  margin-bottom: 40px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color : #f1356d
`;

const Info = styled.span`
  margin-top: 10px;
  text-align: center;
  display: block;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    navigate("/");
  };

  return (
    <Container>
      <LeftSection>
        <Image
          src="https://www.cybintsolutions.com/wp-content/uploads/2020/12/AdobeStock_214889203-Converted-e1608647308109.png"
          alt="Login Image"
        />
      </LeftSection>
      <RightSection>
        <Text>Administrator</Text>
        <Form>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>Login</Button>
        </Form>
        <Info>username : admin</Info>
        <Info>password : admin</Info>
      </RightSection>
    </Container>
  );
};

export default Login;
