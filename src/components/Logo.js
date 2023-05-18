import styled from "styled-components";

export const Logo = ({ logo }) => {
  return (
    <LogoContainer>
      <BrandName>NetWork</BrandName>
      <LogoStyled src={logo} alt="NetWorkin logo" />
    </LogoContainer>
  );
};

// Styled components

const LogoContainer = styled.div`
  width: 5.25rem;
  height: 1.3125rem;
  display: flex;
  align-items: center;
  gap: 0.1rem;
`;

const BrandName = styled.span`
  font-size: 1.3125rem;
  color: #0a66c2;
  font-weight: 800;
`;

const LogoStyled = styled.img`
  width: 24%;
  height: auto;
  margin-left: 0.2rem;
`;
