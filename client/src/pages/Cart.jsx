import React from "react";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import Substract from "@mui/icons-material/Remove";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PayButton from "../components/PayButton";
import Announcement from "../components/Announcement";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, addProduct, updateProduct } from "../redux/cartRedux";


const Container = styled.div`
margin-bottom:200px;  
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const Productdesc = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  cursor: pointer;
`;
const IconClear = styled.span`
  cursor: pointer;
  margin-left: 60px;
  border: 1px solid red;
  border-radius: 10px;
  font-size: 15px;
  background-color: red;
  color: white;
`;
const ProductAmount = styled.div`
  ${mobile({ margin: "5px 15px" })}
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })};
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;



const Cart = () => {
  const cart = useSelector((state) => state.cart);
 
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();
  const handleAddProduct = (product) => {
    const existingProductIndex = cart.products.findIndex(
      (p) => p.id === product.id
    );

    if (existingProductIndex !== -1) {
      const existingProduct = cart.products[existingProductIndex];
      dispatch(
        updateProduct({
          ...existingProduct,
          quantity: existingProduct.quantity + 1,
        })
      );
    } else {
      dispatch(addProduct({ ...product, quantity: 1 }));
    }
  };
  const handleRemoveProduct = (product) => {
    if (product.quantity > 1) {
      dispatch(
        updateProduct({
          ...product,
          quantity: product.quantity - 1,
        })
      );
    } else {
      dispatch(removeProduct(product));
    }
  };

  
  return (
 <>
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag({quantity})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <Productdesc>
                      <b>Description</b> {product.desc}
                    </Productdesc>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <IconClear>
                    <ClearIcon
                      onClick={() => dispatch(removeProduct(product))}
                    />
                  </IconClear>
                  <ProductAmountContainer>
                    <Amount>
                      <Substract onClick={() => handleRemoveProduct(product)} />
                    </Amount>
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Amount>
                      <AddIcon onClick={() => handleAddProduct(product)} />
                    </Amount>
                  </ProductAmountContainer>
                  <ProductPrice>
                    ${product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            
              <PayButton cartItems={cart.products} />
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
    <Footer />
    </>
  );
};

export default Cart;
