import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UsersListContext } from "../../Contexts/UsersListContext";
import { UserLoginContext } from "../../Contexts/UserLoginContext";
import styled from "styled-components";

export const UserLogout = () => {
  // Accessing the usersList from UsersListContext
  const { usersList } = useContext(UsersListContext);

  // Accessing the email, setEmail, and setPassword from UserLoginContext
  const { email, setEmail, setPassword } = useContext(UserLoginContext);

  // State to store the user data
  const [user, setUser] = useState(null);

  // State to control the visibility of the pop-up window
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  // Function to handle user logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Removing the token from local storage
    navigate("/"); // Navigating to the home page
    setEmail(""); // Clearing the email value
    setPassword(""); // Clearing the password value
  };

  // useEffect to find the user based on the email value
  useEffect(() => {
    const foundUser = usersList.find((user) => user.email === email);
    setUser(foundUser); // Setting the found user in the state
  }, [usersList, email]);

  // If no user is found, return null (component will not be rendered)
  if (!user) {
    return null;
  }

  return (
    <StyledContainer>
      {/* Button to toggle the pop-up window */}
      <StyledBurguerContainer onClick={() => setShow(!show)}>
        <StyledBurguerLine active={show} />
        <StyledBurguerLine active={show} />
        <StyledBurguerLine active={show} />
      </StyledBurguerContainer>

      {/* Pop-up window */}
      <StyledPopUpWindow show={show}>
        <StyledImg src={user.avatar} alt="User avatar" />
        <StyledNameContainer>
          <StyledName>{user.first_name}</StyledName>
          <StyledName>{user.last_name}</StyledName>
        </StyledNameContainer>
        <StyledText>{user.email}</StyledText>

        {/* Button to handle user logout */}
        <StyledLogoutButton onClick={handleLogout}>
          Cerrar sesión
        </StyledLogoutButton>
      </StyledPopUpWindow>
    </StyledContainer>
  );
};

// Styles for the components

const StyledContainer = styled.div`
  width: 10%;
  height: auto;
  position: relative;
  z-index: 10;
`;

const StyledBurguerContainer = styled.button`
  width: 3rem;
  height: 2rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in;

  :focus {
    background-color: none;
  }

  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const StyledBurguerLine = styled.div`
  width: 2rem;
  height: 2px;
  background-color: #000;
  transition: transform 0.3s ease;
  margin: 0 0 0.3rem;

  :last-child {
    margin: 0;
  }

  ${({ active }) =>
    active &&
    `
  &:nth-child(1) {
    transform: rotate(-45deg) translate(-2px, 4px);
    transform-origin: 50% 50%;
  }

  &:nth-child(2) {
    display: none;
  }

  &:nth-child(3) {
    transform: rotate(45deg) translate(0px, -2px);
    transform-origin: 50% 50%;
  }
`}
`;

const StyledPopUpWindow = styled.div`
  width: 12rem;
  height: 7rem;
  background-color: #fff;
  border-radius: 0.5rem;
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 2.5rem;
  right: -1rem;
  z-index: 10;
  padding: 0.5rem;
  transition: all 0.3s ease-in;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? "1" : "0")};
`;

const StyledImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  cursor: pointer;
  obejct-fit: cover;
`;

const StyledNameContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  margin: 0.3rem 0 0;
`;

const StyledName = styled.h5`
  color: rgba(0, 0, 0, 0.75);
  font-size: 0.875rem;
`;

const StyledText = styled.p`
  width: 100%;
  font-size: 0.75rem;
  color: #6c757d;
  margin: 0 -0.9rem 0.25rem;
  text-align: right;
`;

const StyledLogoutButton = styled.button`
  width: 80%;
  height: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  background-color: transparent;
  position: absolute;
  bottom: 0.5rem;
  left: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in;

  :hover {
    background-color: rgba(0, 0, 0, 0.03);
    color: #000;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;
