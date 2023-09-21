import styled from "styled-components";
import React from "react";

const NavbarItemContainer = styled.div`
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
  width: 100%;
  background-color: ${({active}) => active ? "#f9fafb" : "initial"};
  
  &:hover {
    background-color: #f9fafb;
  }
`;

interface NavbarItemProps {
  children: React.ReactNode;
  active?: boolean;
}


export default function NavbarItem({children, active}: NavbarItemProps) {
  return (
    <NavbarItemContainer active={active}>
      {children}
    </NavbarItemContainer>
  );
}
