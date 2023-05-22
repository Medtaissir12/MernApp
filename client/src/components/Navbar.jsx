import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
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
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Logo = styled.img`
  width: 150px;
  height: 70px;
  object-fit: cover;
  padding: 5px;
  ${mobile({ width: "130px", height: "60px", fontSize: "24px" })}
`;
const SearchContainer = styled.div`
  position: relative;
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

const SearchResultsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const SearchResult = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5e;
  }
`;

const SearchResultImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const SearchResultTitle = styled.span`
  font-weight: bold;
`;

const NoResultsMessage = styled.div`
  padding: 8px;
  text-align: center;
  color: #999;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quantity = useSelector((state) => state.cart.quantity);
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setIsSearching(true);
      try {
        const response = await axios.get(
          `https://nbastoreapp.onrender.com/api/products/search?q=${searchTerm}`
        );
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsSearching(false);
      }
    };

    if (searchTerm.length > 0) {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo src="https://upload.wikimedia.org/wikipedia/en/thumb/8/83/NBA_Store_logo.svg/440px-NBA_Store_logo.svg.png" />
          </Link>
        </Left>
        <Center>
          <SearchContainer ref={searchContainerRef}>
            <Input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchOpen(true)}
            />
            {isSearchOpen && (
              <SearchResultsContainer>
                {isSearching ? (
                  <div>Loading...</div>
                ) : (
                  <>
                    {searchResults.length > 0 ? (
                      searchResults.map((product) => (
                        <SearchResult key={product._id}>
                          <SearchResultImage
                            src={product.img}
                            alt={product.title}
                          />

                          <StyledLink
                            to={`/product/${product._id}`}
                            className="search-result-title"
                          >
                            {/* Update the link destination */}
                            <SearchResultTitle>
                              {product.title}
                            </SearchResultTitle>
                          </StyledLink>
                        </SearchResult>
                      ))
                    ) : (
                      <NoResultsMessage>No results found.</NoResultsMessage>
                    )}
                  </>
                )}
              </SearchResultsContainer>
            )}
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
