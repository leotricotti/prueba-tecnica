import styled from "styled-components";

export const Label = ({ children }) => {
  return <LabelStyled>{children}</LabelStyled>;
};

// Styled components

const LabelStyled = styled.label`
  color: rgba(0, 0, 0, 0.75);
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0 0 0.5rem;
`;
