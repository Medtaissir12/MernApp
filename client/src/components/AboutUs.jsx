import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile(`flex-direction: column;`)}
`;

const ImageContainer = styled.div`
  flex: 1;
  ${mobile(`order: 2; margin-top: 20px;`)};
`;

const TextContainer = styled.div`
  flex: 1;

  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin-left: 20px;
  ${mobile(`order: 3; margin-top: 20px;`)};
`;

const About = styled.h2`
  margin-bottom: 30px;
  font-size: 28px;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 30px;
  color: blue;
`;

const AboutSpan = styled.span`
  color: red;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Text = styled.p`
  width: 80%;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 2;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;
const ReadMore = styled.p`
  width: 80%;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  letter-spacing: 1px;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const AboutUs = () => {
  return (
    <div>
      <Wrapper>
        <About>
          About <AboutSpan> Us</AboutSpan>
        </About>
        <Container>
          <ImageContainer>
            <Image src="https://www.agilitesolutions.com/wp-content/uploads/2022/05/NBA-grid.jpg" />
          </ImageContainer>
          <TextContainer>
            <Text>
              Located in Berlin, Germaany, we are proud to have an unrivalled
              selection of NBA jerseys. We offer exclusive rare vintage jerseys,
              a mixture of throwback and current jerseys as well as a wide
              variety of other NBA and basketball related products - all of
              which are Officially Licensed products. Come visit our store at
              Westfield Southland Shopping Centre and be wowed by our NBA range
              and knowledge!
            </Text>
            <ReadMore> ReadMore </ReadMore>
          </TextContainer>
        </Container>
      </Wrapper>
    </div>
  );
};

export default AboutUs;
