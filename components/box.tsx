import styled from "styled-components";
import React from "react";

const BoxContainer = styled.div<BoxContainerProps>`
  display: ${({display}) => display};
  align-items: ${({alignItem, vertical}) => vertical ? 'flex-start' : alignItem};
  justify-content: ${({justifyContent}) => justifyContent};
  flex-direction: ${({flexDirection, vertical}) => vertical ? 'column' : flexDirection};
  width: ${({fullWidth}) => fullWidth ? '100%' : 'auto' };
`;

interface BoxContainerProps {
  children?: React.ReactNode;
  display?: string;
  alignItem?: string;
  justifyContent?: string;
  flexDirection?: string;
  fullWidth?: boolean;
  vertical?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function Box({ children, display = "flex", alignItem = "center", justifyContent = "flex-start", flexDirection = "row", fullWidth = false, vertical = false, style, onClick, ...rest }: BoxContainerProps) {
  return (
    <BoxContainer display={display} alignItem={alignItem} justifyContent={justifyContent} flexDirection={flexDirection} fullWidth={fullWidth} vertical={vertical} style={style} onClick={onClick} {...rest}>
      {children}
    </BoxContainer>
  );
}
