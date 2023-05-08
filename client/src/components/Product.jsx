import React, { useState } from "react";
import styled from "styled-components";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: transparent;
  justify-content: space-between;
  gap: 20px; /* Add gap property */
  &::before {
    content: "";
    width: calc(50% - 200px);
  }
  &::after {
    content: "";
    width: calc(50% - 200px);
  }
`;

const Container = styled.div`
  margin: 20px;
  width: 280px;
  height: 450px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: relative;
  background-color: #f5f5f5;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }

  &:hover ${Info} {
    opacity: 1;
    background: transparent;
  }
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  background-color: transparent;
  margin-top: 20px;
  padding: 10px 10px 10px 20px;
  letter-spacing: 1px;
`;

const Description = styled.div`
  margin-top: 20px;

  font-size: 16px;
  text-transform: capitalize;
  font-weight: 400;
`;
const Price = styled.div`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 600;
`;

const Image = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const StockStatus = styled.h5`
  position: absolute;
  left: 13px;
  top: 20px;
  color: white;
  padding: 3px 10px;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  background-color: #27b737;
`;

const Product = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Wrapper>
      <Container>
        <StockStatus> in stock </StockStatus>
        <Image src={item.img} />
        <Info>
          <Icon>
            <Link to={`/product/${item._id}`}>
              <ShoppingCartOutlinedIcon />
            </Link>
          </Icon>
          <Icon>
            <>
              {isFavorite ? (
                <FavoriteOutlinedIcon
                  style={{ color: "red" }}
                  onClick={handleClick}
                />
              ) : (
                <FavoriteBorderOutlinedIcon onClick={handleClick} />
              )}
            </>
          </Icon>
        </Info>
        <DescriptionContainer>
          <Description>{item.title}</Description>
          <Price>${item.price}</Price>
        </DescriptionContainer>
      </Container>
    </Wrapper>
  );
};

export default Product;
