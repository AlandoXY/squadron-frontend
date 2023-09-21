import styled from "styled-components";
import React, {MouseEventHandler} from "react";

const ButtonContainer = styled.button`
    display: ${({fullWidth}) => fullWidth ? 'block' : 'inline-block'};
    width: ${({fullWidth, width}) => fullWidth ? '100%' : (width || 'auto')};
    height: ${({height}) => (height || 'auto')};
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
  width?: string;
  height?: string;
}

export default function Button({ children, color = '#f0f0f0', fontColor = '#000', onClick, fullWidth, width, height, ...rest }: ButtonProps) {
  return (
    <ButtonContainer color={color} fontColor={fontColor} onClick={(e) => onClick && onClick(e)} fullWidth={fullWidth} width={width} height={height} {...rest}>
      {children}
    </ButtonContainer>
  );
}
