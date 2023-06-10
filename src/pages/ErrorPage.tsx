import { useRouteError } from "react-router-dom";
import { errorBackground } from "../assets/images";
import styled from "styled-components";

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${errorBackground});
  background-size: inherit;
  background-repeat: no-repeat;
  background-position: center;
`;

const ErrorTitle = styled.h1`
  font-size: 3rem;
  color: red;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ErrorPage = () => {
  const error: any = useRouteError();
  return (
    <ErrorPageContainer>
      <ErrorTitle>{error.status}</ErrorTitle>
      <ErrorMessage>{error.statusText}</ErrorMessage>
    </ErrorPageContainer>
  );
};

export { ErrorPage };
