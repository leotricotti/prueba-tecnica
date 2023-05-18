import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UsersListContext } from "../../Contexts/UsersListContext";
import useMergedData from "../../CustomHooks/useMergedData";
import editLogo from "../../assets/images/pencil.png";
import localData from "../../assets/data/colorsArray";
import { Sidebar } from "../../components/UsersGrid/Sidebar";
import styled from "styled-components";

export const UserCard = () => {
  // Get usersList and setUsersList from the UsersListContext
  const { usersList, setUsersList } = useContext(UsersListContext);

  // State to track whether user data is loading
  const [isLoading, setIsLoading] = useState(false);

  // State to store the currently selected user
  const [userSelected, setUserSelected] = useState([]);

  // State to determine whether the sidebar is open or closed
  const [openSidebar, setOpenSidebar] = useState(false);

  // Hook to access the navigation object
  const navigate = useNavigate();

  // Merge local data with usersList data
  const mergedUsers = useMergedData(usersList, localData);

  // Effect to toggle body overflow based on the openSidebar state
  useEffect(() => {
    if (openSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openSidebar]);

  // Effect to set isLoading to true when usersList has items
  useEffect(() => {
    if (usersList.length > 0) {
      setIsLoading(true);
    }
  }, [usersList]);

  // Handle click on sidebar
  const handleClickSidebar = (id) => {
    // Find the selected user
    const user = mergedUsers.find((item) => item.id === id);
    // Set the selected user
    setUserSelected(user);
    // Navigate to the user's page
    navigate(`/users/${id}`);
    // Open the sidebar
    setOpenSidebar(true);
  };

  // Close the sidebar
  const onClose = () => {
    // Reset the selected user
    setUserSelected([]);
    // Navigate back to the users page
    navigate("/users");
    // Close the sidebar
    setOpenSidebar(false);
  };

  // Update the user with edited data
  const handleUpdateUser = (updatedUser) => {
    setUsersList((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  // Handle click on "Ver entradas" button
  const handleClickPublications = (id) => {
    navigate(`/users/${id}/publications`);
  };

  return (
    // Only render when isLoading is true
    isLoading && (
      <>
        {mergedUsers.map((item) => {
          return (
            <StyledCardContainer key={item.id}>
              <StyledCardHeader color={item.color} />
              <StyledCardBody>
                <StyledImg src={item.avatar} alt={"User avatar"} />
                <StyledNameContainer>
                  <StyledName>{item.first_name}</StyledName>
                  <StyledName>{item.last_name}</StyledName>
                </StyledNameContainer>
                <StyledText>{item.email}</StyledText>
              </StyledCardBody>
              <StyledCardFooter>
                <StyledButton onClick={() => handleClickPublications(item.id)}>
                  Ver entradas
                </StyledButton>
                <StyledEditContainer
                  onClick={() => handleClickSidebar(item.id)}
                >
                  <StyledEditImg src={editLogo} alt="Edit icon" />
                </StyledEditContainer>
              </StyledCardFooter>
            </StyledCardContainer>
          );
        })}
        <StyledSidebarWrapper visible={openSidebar}>
          <Sidebar
            item={userSelected}
            onClose={onClose}
            onUpdateUser={handleUpdateUser}
          />
        </StyledSidebarWrapper>
      </>
    )
  );
};

// Styled components

const StyledSidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transform: ${({ visible }) => (visible ? "scale(1)" : "scale(0.9)")};
`;

const StyledCardContainer = styled.div`
  width: 100%;
  max-width: 23.4375rem;
  height: 25rem;
  background-color: #fff;
  border-radius: 0 0 0.5rem 0.5rem;
  box-shadow: 7px 8px 61px 0px rgba(0, 0, 0, 0.1);
  position: relative;
  top: 2rem;
  margin: 0 auto;
`;

const StyledCardHeader = styled.div`
  width: 100%;
  height: 6.9rem;
  background-color: ${(props) => props.color};
  border-radius: 0.25rem 0.25rem 0.15rem 0.15rem;
`;

const StyledImg = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  margin: -6rem 0 1rem;
  background-color: #fff;
  padding: 0.3rem;
  object-fit: cover;
`;

const StyledCardBody = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const StyledNameContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const StyledName = styled.h5`
  display: inline;
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0 0 0.75rem;
  line-height: 1.2;
  text-align: center;
`;

const StyledText = styled.p`
  font-size: 1rem;
  color: #6c757d;
  margin: 0 0 0.25rem;

  :last-child {
    margin: 0 0 1rem;
  }
`;

const StyledCardFooter = styled.div`
  width: 100%;
  height: auto;
  padding .5rem 1rem;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  margin: auto;
`;

const StyledButton = styled.button`
  width: 100%;
  color: #1a202c;
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 500;
  border: 1px solid #cbd5e0;
  border-radius: 0.2rem;
  background-color: #fff;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in;

  :hover {
    background-color: rgba(0, 0, 0, 0.03);
    color: #000;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

const StyledEditContainer = styled.button`
  width: 3rem;
  height: 2.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cbd5e0;
  border-radius: 0.2rem;
  margin: 0 0 0 0.2rem;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in;

  :hover {
    background-color: rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

const StyledEditImg = styled.img`
  width: 1.5rem;
  height: auto;
  margin: 0 0 0.1rem;
`;
