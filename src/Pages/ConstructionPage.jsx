import { Link } from "react-router-dom";
import styled from "styled-components";

export const ConstructionPage = () => {
  return (
    <StyledContainer>
      <StyledTitle>Pagina en construcción</StyledTitle>
      <StyledLink to="/">Volver al inicio</StyledLink>
    </StyledContainer>
  );
};

//Styled Components

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
`;

const StyledTitle = styled.h1`
  font-size: 1.8rem;
  color: #000;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: #0a66c2;
  text-decoration: none;
  font-size: 1.2rem;
  margin-top: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 2rem;
  transition: all 0.1s ease-in;

  &:hover {
    text-decoration: underline;
    background-color: rgba(0, 0, 0, 0.04);

`;
