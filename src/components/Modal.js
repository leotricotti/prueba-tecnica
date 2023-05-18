import styled from "styled-components";

export const Modal = ({
  text,
  confirm,
  cancel,
  handleConfirm,
  handleCancel,
}) => {
  return (
    <StyledModalWrapper>
      <StyledModal>
        <StyledText>{text}</StyledText>
        <StyledButtonContainer>
          <StyledButton onClick={handleConfirm}>{confirm}</StyledButton>
          <StyledButton onClick={handleCancel}>{cancel}</StyledButton>
        </StyledButtonContainer>
      </StyledModal>
    </StyledModalWrapper>
  );
};

// Styled components

const StyledModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 1rem;
  z-index: 9999;
`;

const StyledModal = styled.div`
  width: 100%;
  max-width: 25rem;
  height: 25vh;
  background: #fff;
  border-radius: 0.3rem;
  transition: all 0.5s ease-in;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledText = styled.h1`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 500;
  color: #1a202c;
  text-align: center;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

const StyledButton = styled.button`
  width: 50%;
  color: rgba(0, 0, 0, 0.9);
  font-size: 0.875rem;
  border-radius: 0.2rem;
  background-color: #fff;
  padding: 0.25rem 0.5rem;
  margin: 0.5rem;
  border: 1px solid #cbd5e0;
  transition: all 0.1s ease-in;
  border-radius: 0.25rem;
  font-weight: 500;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    border: 1px solid #000;
  }
`;
