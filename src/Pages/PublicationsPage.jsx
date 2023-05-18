import { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";
import { Header } from "../components/Header/Header";
import { Publications } from "../components/UsersPublications/Publications";
import styled, { keyframes } from "styled-components";

export const PublicationsPage = () => {
  // State variables
  const [isLoading, setIsLoading] = useState(true);
  const [usersPhotos, setUsersPhotos] = useState([]);
  const [usersPosts, setUsersPosts] = useState([]);

  useEffect(() => {
    // Function to fetch data from APIs
    const fetchData = async () => {
      try {
        // Fetch users' photos
        const response1 = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data1 = await response1.json();
        setUsersPhotos(data1);

        // Fetch users' posts
        const response2 = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data2 = await response2.json();
        setUsersPosts(data2);

        // Simulate loading delay
        setTimeout(() => {
          setIsLoading(false); // Set isLoading to false after data is fetched
        }, 1000);
      } catch (error) {
        console.log(error);
        setIsLoading(false); // Set isLoading to false if an error occurs
      }
    };

    fetchData(); // Call the fetch data function
  }, []);

  return !isLoading ? (
    // Render the publications page if loading is complete
    <StyledMain>
      <Header
        linkOne={"/users"}
        linkTwo={"/users/id/publications"}
        nameOne={"Usuarios"}
        nameTwo={" / Entradas"}
        activeTwo={"true"}
      />
      <Publications usersPhotos={usersPhotos} usersPosts={usersPosts} />
    </StyledMain>
  ) : (
    // Render a spinner if still loading
    <Spinner />
  );
};

// Keyframes animation
const AnimatedLoad = keyframes`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`;

// Styled components

const StyledMain = styled.main`
  width: 100%;
  height: auto;
  padding: 0 0 3rem;
  animation: ${AnimatedLoad} 1s ease-in-out;
  margin: 0 0 8rem;
`;
