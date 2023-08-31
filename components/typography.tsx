import styled from "styled-components";
import React from "react";

const TypographyContainer = styled.div`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    cursor: pointer;
  `;

interface TypographyProps {
  children: React.ReactNode;
  fontSize?: string;
  color?: string;
  component?: string;
}

export default function Typography({ children, fontSize="16px", color="#333333", component = "p" }: TypographyProps) {
  return (
    <TypographyContainer as={component} fontSize={fontSize} color={color}>
      {children}
    </TypographyContainer>
  );
}
