import styled from "styled-components";

export const EditableField = ({ setEditedItem, label, value, fieldName }) => {
  // Handles the change in the input field
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    // Updates the editedItem state with the new value of the field
    setEditedItem((prevItem) => ({
      ...prevItem,
      [fieldName]: newValue,
    }));
  };

  return (
    <StyledContainer>
      {/* Label for the input field */}
      <StyledLabel>{label}</StyledLabel>
      {/* Input field */}
      <StyledInput type="text" value={value} onChange={handleInputChange} />
    </StyledContainer>
  );
};

// Styled components

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledLabel = styled.label`
  display: inline;
  width: 47%;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4a5568;
`;

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid #cbd5e0;
  border-radius: 0.2rem;
  margin: 0.3rem auto;
  padding: 0.2rem 0.5rem;
  transition: all 0.1rem ease-in;

  :focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 0.04);
  }

  :hover {
    border: 1px solid rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
