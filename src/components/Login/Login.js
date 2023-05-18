import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserLoginContext } from "../../Contexts/UserLoginContext";
import { useLogin } from "../../CustomHooks/useLogin";
import { Label } from "../Label";
import { Buttons } from "../Buttons";
import { ShowPassword } from "../ShowPassword";
import { Divider } from "../Divider";
import { Footer } from "./Footer";
import styled from "styled-components";

export const Login = ({ title }) => {
  // Accessing email and password from the user login context
  const { email, password, setEmail, setPassword } =
    useContext(UserLoginContext);
  // Using the custom hook for login functionality
  const { handleLogin, setIsLoading } = useLogin();
  // State to handle the password input type to showpassword
  const [inputType, setInputType] = useState("password");

  // Function to handle the login event
  const handleLoginEvent = (e) => {
    e.preventDefault();
    handleLogin(email, password); // Calling the handleLogin function from the custom hook
    setIsLoading(true); // Start loading
  };

  // Function to handle the show password toggle
  const handleShowPassword = (e) => {
    e.preventDefault();
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <LoginContainer>
      <Title>{title}</Title>
      <FormContainer onSubmit={handleLoginEvent}>
        {/* Email input */}
        <Label children={"Email"} />
        <StyledInput
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="off"
          placeholder="Email"
        />

        {/* Password input */}
        <StyledPasswordContainer>
          <Label children={"Contraseña"} />
          <StyledInput
            type={inputType}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="off"
            placeholder="Contraseña"
          />
          <ShowPassword
            children={inputType === "password" ? "Mostrar" : "Ocultar"}
            onClick={handleShowPassword}
          />
        </StyledPasswordContainer>

        {/* Forgot password link */}
        <StyledLink to="/construction">Olvidó su contraseña?</StyledLink>

        {/* Login button */}
        <Buttons onClick={handleLoginEvent}>Iniciar sesión</Buttons>

        <Divider />
      </FormContainer>

      {/* Footer */}
      <Footer
        text={"Nuevo en NetWorkIn?"}
        url={"/construction"}
        link={"Unirse ahora"}
      />
    </LoginContainer>
  );
};

// Styled components

const LoginContainer = styled.section`
  width: 100%;
  height: auto;
  max-width: 26rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 0.5rem 1rem;
  position: relative;
  top: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #8f5849;
  font-weight: 300;
  padding: 0 0 1.5rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 2.8rem;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.75);
  border-radius: 0.25rem;

  &:focus,
  &:hover {
    outline: 1px solid rgba(0, 0, 0, 0.9);
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const StyledPasswordContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 1rem 0 0;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 1.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #0a66c2;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1.5rem;
  transition: all 0.1s ease-in;

  &:hover {
    color: #004182;
    text-decoration: underline;
  }
`;
