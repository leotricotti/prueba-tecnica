import { UserCard } from "./UserCard";
import styled from "styled-components";

export const UsersGrid = () => {
  return (
    <UsersListContainer>
      <StyledGridContainer>
        <UserCard />
      </StyledGridContainer>
    </UsersListContainer>
  );
};

// Styled components

const UsersListContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 4.5rem;
`;

const StyledGridContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 0.9375rem;
  gap: 1.25rem;
`;
