import styled from "styled-components";
import React, {MouseEventHandler} from "react";

const ButtonContainer = styled.button`
    display: ${props => props.fullWidth ? 'block' : 'inline-block'};
    width: ${props => props.fullWidth ? '100%' : 'auto'};
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.3rem;
    background-color: ${props => props.color};
    color: ${props => props.fontColor};
    cursor: pointer;
  `;

interface ButtonProps {
  children: React.ReactNode;
  color: string;
  fontColor: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  fullWidth?: boolean;
}

export default function Button({ children, color = '#f0f0f0', fontColor = '#000', onClick, fullWidth }: ButtonProps) {
  return (
    <ButtonContainer color={color} fontColor={fontColor} onClick={(e) => onClick && onClick(e)} fullWidth={fullWidth}>
      {children}
    </ButtonContainer>
  );
}
