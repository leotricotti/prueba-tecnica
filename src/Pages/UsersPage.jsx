import { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { UsersGrid } from "../components/UsersGrid/UsersGrid";
import { Spinner } from "../components/Spinner";
import styled from "styled-components";

// The UsersPage component
export const UsersPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading time with a setTimeout
    setTimeout(() => {
      setIsLoading(false); // Update isLoading state to indicate loading is complete
    }, 1000);
  }, []);

  return !isLoading ? (
    // Render the page content if loading is complete
    <UsersMain>
      <Header linkOne={"/users"} nameOne={"Usuarios"} activeOne={"true"} />
      <UsersGrid />
    </UsersMain>
  ) : (
    // Render a spinner while loading
    <Spinner />
  );
};

// Styled component for the main container
const UsersMain = styled.main`
  width: 100%;
  height: auto;
  padding: 0 0 3rem;
  margin: 0 0 8rem;
`;
