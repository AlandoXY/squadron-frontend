import styled from "styled-components";
import React, {MouseEventHandler} from "react";
import Image from "next/image";

const LabelContainer = styled.button<any>`
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.6rem;
  border-width: 1px;
  border-style: solid;
  border-radius: ${props => props.borderRadius};
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
}

export default function Label({ children, color = 'white', fontColor = '#4D5761', borderColor='#4D5761', borderRadius='1rem', icon }: LabelProps) {
  return (
    <LabelContainer color={color} fontColor={fontColor} borderColor={borderColor} borderRadius={borderRadius}>
      { icon && <Image src={icon} width={15} height={15} alt="Icon" style={{marginRight: 3}} /> }
      {children}
    </LabelContainer>
  );
}
