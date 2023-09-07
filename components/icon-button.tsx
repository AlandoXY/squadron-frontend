import styled from "styled-components";
import React, {MouseEventHandler} from "react";
import Image from 'next/image'

const IconButtonContainer = styled.button`
  display: ${props => props.fullWidth ? 'flex' : 'inline-flex'};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.5rem;
  border: none;
  border-radius: 0.3rem;
  background-color: transparent;
  cursor: pointer;
`;

const ButtonText = styled.span`
  margin-left: 0.8rem;
  font-size: 16px;
  color: ${props => props.fontColor};
`;

interface IconButtonProps {
  icon: string;
  width: number;
  height: number;
  fontColor?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  fullWidth?: boolean;
}


export default function IconButton({onClick, icon, width = 30, height = 30, children, fontColor = '#000', fullWidth }: IconButtonProps) {
  return (
    <IconButtonContainer onClick={(e) => onClick && onClick(e)} fullWidth={fullWidth}>
      <Image src={icon} width={width} height={height} alt="Icon" />
      <ButtonText fontColor={fontColor}>{children}</ButtonText>
    </IconButtonContainer>
  );
}
