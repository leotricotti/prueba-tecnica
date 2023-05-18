import styled from "styled-components";

export const Divider = () => {
  return (
    <StyledDivider>
      <span>o</span>
    </StyledDivider>
  );
};

// Styled components

const StyledDivider = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  padding 1.5rem 0 .9rem 0;

  &::before {
    content: "";
    width: 45%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.3);
  }

  &::after {
    content: "";
    width: 45%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
