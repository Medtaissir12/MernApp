import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";
import { clearCart } from "../redux/cartRedux";

const Container = styled.div`
  height: 120px;
  margin-bottom: 10px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Logo = styled.img`
  width: 150px;
  height: 90px;
  objet-fit: cover;
  padding: 10px;
  ${mobile({ fontSize: "24px" })}
`;
const SearchContainer = styled.div`
  display: flex;
  width: 110%;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  border-radius: 60px;
  background: rgb(11, 63, 147, 0.2);
  padding: 7px;
`;
const Input = styled.input`
  width: 90%;
  border: none;
  background: transparent;
  outline: none;
  padding: 6px 10px;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quantity = useSelector((state) => state.cart.quantity);
  const currentUser = useSelector((state) => state.user.currentUser);
  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/");
  };
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo src="https://upload.wikimedia.org/wikipedia/en/thumb/8/83/NBA_Store_logo.svg/440px-NBA_Store_logo.svg.png" />
          </Link>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16, width: "10%" }} />
          </SearchContainer>
        </Center>
        <Right>
          {currentUser ? (
            <>
              <FavoriteBorderOutlinedIcon />
              <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
              <Link to="/cart">
                <MenuItem>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlinedIcon color="action" />
                  </Badge>
                </MenuItem>
              </Link>
            </>
          ) : (
            <>
              <FavoriteBorderOutlinedIcon />
              <Link to="/register">
                <MenuItem>
                  <Button variant="contained">REGISTER</Button>
                </MenuItem>
              </Link>
              <Link to="/login">
                <MenuItem>
                  <Button variant="contained" color="success">
                    SIGN IN
                  </Button>
                </MenuItem>
              </Link>
              <Link to="/cart">
                <MenuItem>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlinedIcon color="action" />
                  </Badge>
                </MenuItem>
              </Link>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
