import styled from "styled-components";
import React from "react";

const InputToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 1rem 1.5rem;
`;


interface InputToggleProps {
  checked?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void
  right?: React.ReactNode;
}

export default function InputToggle({value, onChange, onInput, checked = false, right}: InputToggleProps) {

  return (
    <InputToggleContainer
    >
      <input type="radio" value={value} checked={checked} onChange={onChange} onInput={onInput} style={{marginRight: 10}} />
      { right }
    </InputToggleContainer>
  );
}
