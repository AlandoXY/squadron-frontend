import styled from "styled-components";
import React, {MouseEventHandler} from "react";

const LinkContainer = styled.a<any>`
    display: inline-block;
    padding: 0.2rem 0.3rem;
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    cursor: pointer;
  `;

interface LinkProps {
  children: React.ReactNode;
  to: string;
  fontSize?: string;
  color?: string;
  target?: string;
}

export default function Link({ children, to, fontSize="16px", color="#4f4cec",  target }: LinkProps) {
  return (
    <LinkContainer href={to} fontSize={fontSize} color={color} target={target}>
      {children}
    </LinkContainer>
  );
}
