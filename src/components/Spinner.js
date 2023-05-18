import { keyframes } from "styled-components";
import styled from "styled-components";

export const Spinner = () => {
  return (
    <StyledSpinnerContainer>
      <StyledSpinner />
    </StyledSpinnerContainer>
  );
};

const StyledSpinnerContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  z-index: 9999;
`;

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ffa07a;
  border-color: #ffa07a transparent #ffa07a transparent;
  animation: ${spinner} 1.2s linear infinite;
`;
