import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = ({ text, url, link }) => {
  return (
    <StyledFooter>
      {text}
      <StyledLink to={url}>{link}</StyledLink>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  height: auto;
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #0a66c2;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  margin: 0 0.5rem 0;
  background-color: transparent;
  padding: 0.5rem;
  transition: all 0.1s ease-in;

  &:hover {
    text-decoration: underline;
    background-color: #d0e8ff;
    padding: 0.5rem;
    border-radius: 2rem;
  }
`;
