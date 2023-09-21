import styled from "styled-components";
import React from "react";

const ProgressBarContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
  height: ${({height}) => height + 'px'};
  background-color: ${({color, bgColor}) => bgColor || color + '77'};
  border-radius: 5px;
  width: 100%;
`;

const ProgressBarInner = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: ${({value, total}) => value / total * 100 + '%'};
  height: 100%;
  background-color: ${props => props.color};
  transition: width 0.5s ease;
  border-radius: 5px;
`;

interface ProgressBarProps {
  value?: number;
  total?: number;
  color?: string;
  bgColor?: string;
  height?: number;
}

export default function ProgressBar({ total = 100, value = 0, color = "#1976d2", bgColor, height = 4 }: ProgressBarProps) {
  return (
    <ProgressBarContainer color={color} height={height} bgColor={bgColor}>
      <ProgressBarInner total={total} value={value} color={color} />
    </ProgressBarContainer>
  );
}
