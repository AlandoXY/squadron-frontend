import styled from "styled-components";
import React, {MouseEventHandler} from "react";
import Image from 'next/image'

const IconButtonContainer = styled.button`
  display: ${({fullWidth}) => fullWidth ? 'flex' : 'inline-flex'};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.5rem;
  border: none;
  border-radius: 0.3rem;
  background-color: ${props => props.color};
  cursor: pointer;
`;

const ButtonText = styled.span`
  margin-left: 0.8rem;
  font-size: ${({fontSize}) => fontSize};
  color: ${({fontColor}) => fontColor};
`;

interface IconButtonProps {
  icon: string;
  width: number;
  height: number;
  fontColor?: string;
  fontSize?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  fullWidth?: boolean;
  color?: string;
}


export default function IconButton({onClick, icon, width = 30, height = 30, children, fontColor = '#000', fontSize = '16px', fullWidth, color = 'transparent', ...rest }: IconButtonProps) {
  return (
    <IconButtonContainer onClick={(e) => onClick && onClick(e)} fullWidth={fullWidth} color={color} {...rest}>
      <Image src={icon} width={width} height={height} alt="Icon" />
      {children && <ButtonText fontColor={fontColor} fontSize={fontSize}>{children}</ButtonText>}
    </IconButtonContainer>
  );
}
