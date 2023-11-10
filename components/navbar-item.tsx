import styled from "styled-components";
import React from "react";

const NavbarItemContainer = styled.div`
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
  width: 100%;
  background-color: ${({active, activeColor}) => active ? (activeColor ? activeColor : "#f9fafb") : "initial"};
  
  &:hover {
    background-color: ${({activeColor}) => activeColor ? activeColor : "#f9fafb"};
  }
`;

interface NavbarItemProps {
  children: React.ReactNode;
  active?: boolean;
  activeColor?: string;
}


export default function NavbarItem({children, active, activeColor}: NavbarItemProps) {
  return (
    <NavbarItemContainer active={active} activeColor={activeColor}>
      {children}
    </NavbarItemContainer>
  );
}
