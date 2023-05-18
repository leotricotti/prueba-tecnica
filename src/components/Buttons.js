import styled from "styled-components";

export const Buttons = ({ children, onClick }) => {
  return (
    <StyledButtons onClick={onClick} type="button">
      {children}
    </StyledButtons>
  );
};

// Styled components

const StyledButtons = styled.button`
  width: 100%;
  height: 3rem;
  background-color: #0a66c2;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in;
  border: transparent;

  &:hover {
    background-color: #004182;
  }
`;
