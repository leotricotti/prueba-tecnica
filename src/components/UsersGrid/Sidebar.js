import { useState, useEffect } from "react";
import { EditableField } from "../EditableField";
import { Modal } from "../Modal";
import styled from "styled-components";

export const Sidebar = ({ item, onUpdateUser, onClose }) => {
  // State to store the edited item
  const [editedItem, setEditedItem] = useState([]);

  // State to control the visibility of the confirmation modal
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setEditedItem(item); // Set the initial value of editedItem from the prop item
  }, [item]);

  // Function to handle the edit button click
  const handleEditButton = () => {
    setOpenModal(true); // Open the modal for confirmation
  };

  // Function to handle the confirm button click
  const handleConfirm = () => {
    onUpdateUser(editedItem); // Update the user with the edited item
    setOpenModal(false); // Close the modal for confirmation
    setTimeout(() => {
      onClose(); // Close the sidebar after a short delay
    }, 100);
  };

  // Function to handle the cancel button click
  const handleCancel = () => {
    setOpenModal(false); // Close the modal for confirmation
  };

  return (
    <StyledSidebarWrapper>
      <StyledSidebarContainer>
        <StyledSidebar>
          <StyledSidebarHeader color={item.color} />
          <StyledSidebarBody>
            <StyledImg src={item.avatar} alt={"User avatar"} />

            {/* Editable fields */}
            <EditableField
              value={editedItem.first_name || ""}
              fieldName="first_name"
              setEditedItem={setEditedItem}
              label={"Nombre:"}
            />
            <EditableField
              value={editedItem.last_name || ""}
              fieldName="last_name"
              setEditedItem={setEditedItem}
              label={"Apellido:"}
            />
            <EditableField
              value={editedItem.email || ""}
              fieldName="email"
              setEditedItem={setEditedItem}
              label={"Email:"}
            />
          </StyledSidebarBody>

          <StyledSidebarFooter>
            {/* Button to initiate editing */}
            <StyledConfirmButton onClick={handleEditButton}>
              Guardar
            </StyledConfirmButton>

            {/* Button to close the sidebar */}
            <StyledCancelButton onClick={onClose}>Cancelar</StyledCancelButton>
          </StyledSidebarFooter>
        </StyledSidebar>
      </StyledSidebarContainer>

      {/* Confirmation modal */}
      <StyledModalWrapper visible={openModal}>
        <Modal
          text={"¿Desea guardar los cambios?"}
          confirm={"Aceptar"}
          cancel={"Cancelar"}
          handleConfirm={handleConfirm}
          handleCancel={handleCancel}
        />
      </StyledModalWrapper>
    </StyledSidebarWrapper>
  );
};

// Styles for the components

const StyledModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transform: ${({ visible }) => (visible ? "scale(1)" : "scale(0.9)")};
`;

const StyledSidebarWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSidebarContainer = styled.div`
  width: 85%;
  max-width: 23rem;
  height: 28.3rem;
  background-color: #fff;
  padding: 2rem;
  position: fixed;
  top: 5rem;
  z-index: 9999;
  margin: auto;
  border-radius: 0.8rem;
`;

const StyledSidebar = styled.div`
  width: 100%;
  height: 24rem;
  border-radius: 0.5rem;
  border: 1px solid #cbd5e0;
  box-shadow: -3px 1px 20px 1px rgba(0, 0, 0, 0.1);
`;

const StyledSidebarHeader = styled.div`
  width: 100%;
  height: 6.9rem;
  background-color: ${(props) => props.color};
  border-radius: 0.5rem 0.5rem 0 0;
`;

const StyledImg = styled.img`
  width: 6.25rem;
  border-radius: 50%;
  margin: -3.8rem 0 1rem;
  background-color: #fff;
  padding: 0.3rem;
`;

const StyledSidebarBody = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const StyledSidebarFooter = styled.div`
  width: 100%;
  height: 5rem;
  padding .5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
`;

const StyledConfirmButton = styled.button`
  width: 50%;
  color: #1a202c;
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 500;
  border: 1px solid #cbd5e0;
  border-radius: 0.2rem;
  background-color: #fff;
  padding: 0.25rem 0.5rem;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

const StyledCancelButton = styled.button`
  width: 50%;
  color: #1a202c;
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 500;
  border: 1px solid #cbd5e0;
  border-radius: 0.2rem;
  background-color: #fff;
  padding: 0.25rem 0.5rem;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;
