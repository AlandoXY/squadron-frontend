import styled from "styled-components";
import React, {useContext} from "react";
import {TabsContext} from "@/components/tabs";

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: ${({active, color}) => active ? `3px solid ${color}` : "3px solid transparent"};
  padding: 10px 25px;
  cursor: pointer;
  color: ${({active, color}) => active ? color : "initial"};
  justify-content: center;
  
  &:hover {
    color: ${props => props.color};
  }
`;

interface TabProps {
  children: React.ReactNode;
  value?: string;
  color?: string;
}

export default function Tab({ children, value, color = "#6941C6", ...rest }: TabProps) {
  const { value: parentValue, onChange } = useContext(TabsContext);

  return (
    <TabContainer color={color} active={parentValue === value} onClick={() => onChange(value || "")} {...rest}>
      {children}
    </TabContainer>
  );
}
