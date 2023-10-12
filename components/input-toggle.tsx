import styled from "styled-components";
import React from "react";

const InputToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({noBorder}) => noBorder ? "none" : "1px solid #E5E7EB"};
  border-radius: 12px;
  padding: 1rem 1.5rem;
`;


interface InputToggleProps {
  checked?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void
  right?: React.ReactNode;
  noBorder?: boolean;
}

export default function InputToggle({value, onChange, onInput, checked = false, right, noBorder=false}: InputToggleProps) {

  return (
    <InputToggleContainer
      noBorder={noBorder}
    >
      <input type="radio" value={value} checked={checked} onChange={onChange} onInput={onInput} style={{marginRight: 20}} />
      { right }
    </InputToggleContainer>
  );
}
