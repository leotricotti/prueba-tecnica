import logo from "../../assets/images/logo.png";
import { Logo } from "../Logo";
import { UserLogout } from "../../components/UserLogout/UserLogout";
import { Nav } from "../Nav";
import styled from "styled-components";

export const Header = ({
  linkOne,
  linkTwo,
  nameOne,
  nameTwo,
  activeOne,
  activeTwo,
}) => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderContainer>
        {/* Logo */}
        <Logo logo={logo} />

        {/* User Logout */}
        <UserLogout />

        {/* Navigation */}
        <Nav
          linkOne={linkOne}
          linkTwo={linkTwo}
          nameOne={nameOne}
          nameTwo={nameTwo}
          activeOne={activeOne}
          activeTwo={activeTwo}
        />
      </StyledHeaderContainer>
    </StyledHeaderWrapper>
  );
};

// Styled components

const StyledHeaderWrapper = styled.div`
  width: 100%;
  height: 6rem;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const StyledHeaderContainer = styled.header`
  width: 100%;
  max-width: 25.5rem;
  height: 5.3rem;
  font-size: 2rem;
  color: #8f5849;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: -1.2rem;
  padding: 0.75rem 1rem;
  margin: 0 auto;
`;
