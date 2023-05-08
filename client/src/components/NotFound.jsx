import styled from "styled-components";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(68, 68, 68);
  min-height: 80vh;

  h2 {
    font-size: 55px;
  }

  p {
    font-size: 20px;
  }
`;

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <h2>404</h2>
      <p>Page not found</p>
    </NotFoundWrapper>
  );
};

export default NotFound;
