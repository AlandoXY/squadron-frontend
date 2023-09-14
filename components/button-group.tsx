import styled from "styled-components";
import React, {MouseEventHandler, useState} from "react";

const ButtonGroupContainer = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: #F9FAFB;
  padding: 7px 12px;
  border-radius: 8px;
  border: 1px solid #F3F4F6;
  
  & > button:first-child {
    background-color: ${({firstActive}) => firstActive ? "white" : "#F9FAFB"};
    box-shadow: ${({firstActive}) => firstActive ? "0 1px 2px 0 #1018280F" : "none"};
  }

  & > button:last-child {
    background-color: ${({firstActive}) => firstActive ? "#F9FAFB" : "white"};
    box-shadow: ${({firstActive}) => firstActive ? "none" : "0 1px 2px 0 #1018280F"};
  }
`;

interface ButtonGroupProps {
  children: React.ReactNode;
  onChange?: (firstActive: boolean) => void;
}

export default function ButtonGroup({ children, onChange = () => {} }: ButtonGroupProps) {
  const [firstActive, setFirstActive] = useState(true);

  const handleClick = () => {
    setFirstActive(!firstActive)
    onChange && onChange(!firstActive)
  }

  return (
    <ButtonGroupContainer onClick={handleClick} firstActive={firstActive}>
      {children}
    </ButtonGroupContainer>
  );
}
