import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  &:hover img {
    transform: scale(0.9);
  }
`;

const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  transition: all 0.4s;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #dadbdd;
  background-color: rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;

const Button = styled.button`
  border: 1px solid white;
  padding: 10px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-weight: 600;
  :hover {
    boreder:none;
  background-color: #DADBDD;
  color: black;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
