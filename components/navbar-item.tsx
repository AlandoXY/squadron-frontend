import styled from "styled-components";
import React from "react";

const NavbarItemContainer = styled.div`
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
  width: 100%;
  
  &:hover {
    background-color: #f9fafb;
  }
`;

interface NavbarItemProps {
  children: React.ReactNode;
}


export default function NavbarItem({children}: NavbarItemProps) {
  return (
    <NavbarItemContainer>
      {children}
    </NavbarItemContainer>
  );
}
