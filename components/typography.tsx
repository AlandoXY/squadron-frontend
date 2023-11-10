import styled from "styled-components";
import React from "react";

interface TypographyContainerProps {
  fontSize: string | number;
  margin: string;
  padding: string;
  fontWeight: number;
  as?: React.ElementType;
  color: string;
  style?: React.CSSProperties;
}

const TypographyContainer = styled.div<TypographyContainerProps>`
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
  style?: React.CSSProperties;
}

export default function Typography({ children, fontSize="16px", color="#333333", component = "p", margin = "0px", padding="0px", fontWeight = 400, style, ...rest }: TypographyProps) {
  return (
    // @ts-ignore
    <TypographyContainer as={component} fontSize={fontSize} color={color} margin={margin} padding={padding} fontWeight={fontWeight} style={style} {...rest}>
      {children}
    </TypographyContainer>
  );
}
