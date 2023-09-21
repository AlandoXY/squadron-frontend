import styled from "styled-components";
import React, {MouseEventHandler} from "react";
import Image from "next/image";

const LabelContainer = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.6rem;
  border-width: 1px;
  border-style: solid;
  border-radius: ${({borderRadius}) => borderRadius};
  background-color: ${props => props.color};
  color: ${props => props.fontColor};
  border-color: ${props => props.borderColor};
`;

interface LabelProps {
  children: React.ReactNode;
  color?: string;
  fontColor?: string;
  borderColor?: string;
  borderRadius?: string;
  icon?: string;
  iconSize?: number;
}

export default function Label({ children, color = 'white', fontColor = '#4D5761', borderColor='#4D5761', borderRadius='1rem', icon, iconSize = 15, ...rest }: LabelProps) {
  return (
    <LabelContainer color={color} fontColor={fontColor} borderColor={borderColor} borderRadius={borderRadius} {...rest}>
      { icon && <Image src={icon} width={iconSize!} height={iconSize!} alt="Icon" style={{marginRight: 3}} /> }
      {children}
    </LabelContainer>
  );
}
