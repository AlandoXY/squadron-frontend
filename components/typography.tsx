import styled from "styled-components";
import React from "react";

const TypographyContainer = styled.div<any>`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  font-weight: ${props => props.fontWeight};
  cursor: pointer;
`;

interface TypographyProps {
  children: React.ReactNode;
  fontSize?: string;
  color?: string;
  component?: string;
  margin?: string;
  padding?: string;
  fontWeight?: number;
}

export default function Typography({ children, fontSize="16px", color="#333333", component = "p", margin = 0, padding=0, fontWeight = 400, ...rest }: TypographyProps) {
  return (
    <TypographyContainer as={component} fontSize={fontSize} color={color} margin={margin} padding={padding} fontWeight={fontWeight} {...rest}>
      {children}
    </TypographyContainer>
  );
}
