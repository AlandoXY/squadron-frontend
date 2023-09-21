import styled from "styled-components";
import React, {MouseEventHandler, useState} from "react";
import {useOutsideClick} from "@/components/use-outside-click";

const ExplanationContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ExplanationContent = styled.div`
  position: absolute;
  display: inline-block;
  bottom: 30px;
  left: 0;
  padding: 1rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 0.7rem;
  max-width: ${({maxWidth}) => maxWidth};
  width: 400px;
`;

const ExplanationTitle = styled.div`
  display: block;
  font-weight: bold;
`;

const ExplanationDesc = styled.div`
  display: block;
  //white-space: nowrap;
`;

interface ExplanationProps {
  children: React.ReactNode;
  title?: string;
  desc?: string;
  maxWidth?: string;
}

export default function Explanation({ children, title, desc, maxWidth }: ExplanationProps) {
  const [open, setOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return (
    <ExplanationContainer ref={ref} onClick={() => setOpen(true)}>
      {children}
      {
        open && (
          <ExplanationContent maxWidth={maxWidth}>
            <ExplanationTitle>{title}</ExplanationTitle>
            <ExplanationDesc>{desc}</ExplanationDesc>
          </ExplanationContent>
        )
      }
    </ExplanationContainer>
  );
}
