import styled from "styled-components";
import React, {HTMLInputTypeAttribute} from "react";
import Image from "next/image";

const InputContainer = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #D2D6DB;
  padding: 0.6rem;
`;

const InputContent = styled.input`
  border: none;
  outline: none;
  width: ${props => props.width + "px"};
  height: ${props => props.height + "px"};
`

interface InputProps {
  children?: React.ReactNode;
  value?: string;
  type?: HTMLInputTypeAttribute
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void
  width?: number;
  height?: number;
  prefixIcon?: string;
  suffixIcon?: string;
}

export default function Input({ value="", children, type="text", onChange = () => {}, onInput = () => {}, width = 200, height = 25, prefixIcon, suffixIcon }: InputProps) {
  return (
    <InputContainer
    >
      { prefixIcon && <Image src={prefixIcon} width={20} height={20} style={{marginRight: 8}} alt="Icon" /> }
      <InputContent type={type} value={value || children} onChange={onChange} onInput={onInput} width={width} height={height} />
      { suffixIcon && <Image src={suffixIcon} width={20} height={20} style={{marginLeft: 8}} alt="Icon" /> }
    </InputContainer>
  );
}
