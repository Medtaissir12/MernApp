import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import StripeLogo from "../assets/Stripe.png";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import TwitterIcon from "@mui/icons-material/Twitter";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: #1d428a;
  padding: 60px 100px;
  

  @media (max-width: 960px) {
    padding: 40px 50px;
  }

  @media (max-width: 768px) {
    padding: 40px;
    flex-wrap: wrap;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  color: white;
  letter-spacing: 1.5px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Desc = styled.p`
  color: white;
  text-align: justify;
  margin-bottom: 30px;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 1.5px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
`;

const SocialContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 768px) {
    margin-right: 10px;
    width: 30px;
    height: 30px;
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 80px;

  @media (max-width: 1200px) {
    margin-right: 50px;
  }

  @media (max-width: 960px) {
    margin-right: 30px;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin-bottom: 30px;
    margin-right: 0;
  }
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color: #fff;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const List = styled.ul`
  margin: 20px 0;
  padding: 30px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(
    2,
    1fr
  ); /* creates two columns of equal width */
  grid-gap: 20px; /* adds spacing between grid items */
`;

const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  color: white;
  letter-spacing: 0.7px;
  text-decoration: none;
  &:hover {
    color: orange;
    text-decoration: underline;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  background-color: #1d428a;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: #fff;

  &:hover {
    color: orange;
  }
`;

const Payment = styled.img`
  width: 30%;
`;
const Copyright = styled.p`
  margin-top: 60px;
  text-align: center;
  color: white;
  &:hover {
    color: orange;
  }
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>NBA STORE</Logo>
        <Desc>
          Thank you for choosing our store for all your NBA merchandise needs.
          We are confident that you will love our products and service, and we
          look forward to helping you show off your love for basketball!
        </Desc>

        <SocialContainer>
          <Link to="https://www.facebook.com/NBAStore/">
            <SocialIcon color="3B5999">
              <FacebookIcon />
            </SocialIcon>
          </Link>
          <Link to="https://www.instagram.com/nbastoreeurope">
            <SocialIcon color="E4405F">
              <InstagramIcon />
            </SocialIcon>
          </Link>
          <Link to="https://twitter.com/NBASTORE">
            <SocialIcon color="55ACEE">
              <TwitterIcon />
            </SocialIcon>
          </Link>
          <Link to="https://www.pinterest.com/flipman2/">
            <SocialIcon color="E60023">
              <PinterestIcon />
            </SocialIcon>
          </Link>
        </SocialContainer>
        <Copyright>Design by Mohamed Taissir Gharbi ©</Copyright>
      </Left>
      <Center>
        <List>
          <Link to="/">
            <ListItem>Home</ListItem>
          </Link>
          <Link to="/cart">
            <ListItem>Cart</ListItem>
          </Link>
          <Link to="/products/hoodies">
            <ListItem>Man Marchandise</ListItem>
          </Link>
          <Link to="/products/women-hoodies">
            <ListItem>Woman Marchandise </ListItem>
          </Link>
          <Link to="/products/kids-t-shirts">
            <ListItem>kids Marchandise</ListItem>
          </Link>
          <Link to="/products/headwear">
            <ListItem>Accessories</ListItem>
          </Link>
          <Link to="/shoes">
            <ListItem>Shoes</ListItem>
          </Link>
          <Link to="/socks">
            <ListItem>Socks</ListItem>
          </Link>
          <Link to="/contact">
            <ListItem>Contact Us</ListItem>
          </Link>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: "10px" }} /> Alte Potsdamer Str. 7,
          Berlin, Germany
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} /> +49 30 901820
        </ContactItem>
        <ContactItem>
          <MailOutlinedIcon style={{ marginRight: "10px" }} />{" "}
          customer.services@nbastore.de
        </ContactItem>
        <Payment src={StripeLogo} alt="Stripe logo" />
      </Right>
    </Container>
  );
};

export default Footer;
