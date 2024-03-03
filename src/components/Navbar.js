import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #EB5552;
  position: sticky;
  top: 0;
  z-index: 10;
  width:100%;

`;

const Container = styled.div`
  max-width: 60%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Navigation = styled.nav`
  margin-right: auto;
  margin: 0.5rem;
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  margin-right: 1rem;
  color: #ffffff;
  text-decoration: none;
  white-space: nowrap;
  transition: font-weight 0.2s linear;

  &:hover {
    font-weight: bold;
  }
`;

function Navbar() {
  return (
    <StyledHeader>
      <Container>
        <NavLink href="#about" style={{fontSize: '1.5rem'}}>
          Na Feng
        </NavLink>
        <Navigation>
          <NavLink href="#projects">Past Work</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#resources">Resources</NavLink>
          <NavLink href="#setup">Set Up</NavLink>
        </Navigation>
      </Container>
    </StyledHeader>
  );
}

export default Navbar;
