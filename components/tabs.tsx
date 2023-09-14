import styled from "styled-components";
import React from "react";

const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #E5E7EB;
`;

interface TabsProps {
  children: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
}

export const TabsContext = React.createContext({
  value: "",
  onChange: (value: string) => {},
});

export default function Tabs({ children, value = "", onChange = () => {} }: TabsProps) {
  return (
    <TabsContext.Provider value={{value: value!, onChange: onChange!}}>
      <TabsContainer>
        {children}
      </TabsContainer>
    </TabsContext.Provider>
  );
}
