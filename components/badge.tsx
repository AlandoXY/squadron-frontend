import styled from "styled-components";
import React from "react";

const BadgeContainer = styled.div`
    display: inline-block;
    width: ${({width}) => width};
    height: ${({height}) => height};
    line-height: ${({height}) => height};
    text-align: center;
    font-size: ${({fontSize}) => fontSize + 'px'};
    border: none;
    border-radius: 50%;
    background-color: ${props => props.color};
    color: ${props => props.fontColor};
  `;

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  fontColor?: string;
  fontSize?: number;
  width?: string;
  height?: string;
}

export default function Badge({ children, color = '#F3F4F6', fontColor = '#344054', fontSize = 12, width = "24px", height = "24px", ...rest }: BadgeProps) {
  return (
    <BadgeContainer color={color} fontColor={fontColor} width={width} height={height} fontSize={fontSize} {...rest}>
      {children}
    </BadgeContainer>
  );
}
