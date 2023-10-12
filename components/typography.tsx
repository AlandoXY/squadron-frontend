import styled from "styled-components";
import React from "react";

const TypographyContainer = styled.div`
  color: ${props => props.color};
  font-size: ${({fontSize}) => typeof fontSize === 'number' ? fontSize + 'px' : fontSize};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  font-weight: ${props => props.fontWeight};
  cursor: pointer;
`;

interface TypographyProps {
  children: React.ReactNode;
  fontSize?: string | number;
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
