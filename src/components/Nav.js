import { Link } from "react-router-dom";
import styled from "styled-components";

const UsersLink = ({ link, name, active }) => {
  return (
    <StyledLink to={link} active={active}>
      {name}
    </StyledLink>
  );
};

export const Nav = ({
  linkOne,
  linkTwo,
  nameOne,
  nameTwo,
  activeOne,
  activeTwo,
}) => {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <UsersLink link={linkOne} name={nameOne} active={activeOne} />
          <UsersLink link={linkTwo} name={nameTwo} active={activeTwo} />
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  max-width: 27.5rem;
  height: auto;
  padding: 0 2rem 1rem 2rem;
  position: fixed;
  top: 2.5rem;
  left: 0;
  right: 0;
  margin: 0.5rem auto;
`;

const StyledUl = styled.ul`
  width: 100%;
  height: 2rem;
  background-color: #e9ecef;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
`;

const StyledLi = styled.li`
  width: 100%;
  height: auto;
  margin: 0 0 0.8rem;
  list-style: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.active ? "#0a66c2" : "rgba(0, 0, 0, 0.75)")};
  font-size: 0.875rem;

  :hover {
    color: #0a66c2;
    font-weight: 500;
  }
`;
