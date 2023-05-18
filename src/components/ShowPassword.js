import styled from "styled-components";

export const ShowPassword = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

// Styled components

const StyledButton = styled.button`
  border: 1px solid transparent;
  background-color: transparent;
  color: #0a66c2;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0 0.75rem;
  position: absolute;
  top: 2.3rem;
  right: 1rem;
  cursor: pointer;
`;
