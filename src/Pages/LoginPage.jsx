import { useLogin } from "../CustomHooks/useLogin";
import { Logo } from "../components/Logo";
import logo from "../assets/images/logo.png";
import { Login } from "../components/Login/Login";
import { Spinner } from "../components/Spinner";
import styled from "styled-components";

export const LoginPage = () => {
  const { isLoading } = useLogin();
  return isLoading ? (
    <Spinner />
  ) : (
    <StyledMain>
      <StyledLogo>
        <Logo logo={logo} />
      </StyledLogo>
      <Login
        title={"¡Te damos la bienvenida a la mejor red de programadores!"}
      />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  width: 100%;
  max-width: 30rem;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  margin: 2rem auto;
  border-radius: 0.5rem;
`;

const StyledLogo = styled.div`
  width: 100%;
  height: auto;
  margin: 1rem 0 0 1rem;
`;
