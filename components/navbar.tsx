import styled from "styled-components";
import React from "react";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

interface NavbarProps {
  children: React.ReactNode;
}


export default function Navbar({children}: NavbarProps) {
  return (
    <NavbarContainer>
      {children}
    </NavbarContainer>
  );
}
