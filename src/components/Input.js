import styled from "styled-components";

export const Input = ({ props }) => {
  return <StyledInput props={props} />;
};

// Styled components

const StyledInput = styled.input`
  width: 100%;
  height: ${(props) => (props.props === "login" ? "2.8rem" : "2.5rem")};
  padding: 0.875rem 1rem;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.75);
  border-radius: 0.25rem;

  &:focus,
  &:hover {
    outline: 1px solid rgba(0, 0, 0, 0.9);
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
