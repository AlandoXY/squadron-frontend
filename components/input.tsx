import styled from "styled-components";
import React, {HTMLInputTypeAttribute} from "react";
import Image from "next/image";

const InputContainer = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 6px;
  border: ${({noBorder}) => noBorder ? 'none' : '1px solid #D2D6DB'};
  padding: 0.6rem;
  width: ${({fullWidth}) => fullWidth ? '100%' : 'auto'};
`;

const InputContent = styled.input`
  border: none;
  outline: none;
  width: ${({fullWidth, width}) => fullWidth ? '100%' : width + "px"};
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
  placeholder?: string;
  fullWidth?: boolean;
  noBorder?: boolean;
}

export default function Input({ value="", children, type="text", onChange = () => {}, onInput = () => {}, width = 200, height = 25, prefixIcon, suffixIcon, placeholder, fullWidth, noBorder }: InputProps) {
  return (
    <InputContainer
      fullWidth={fullWidth}
      noBorder={noBorder}
    >
      { prefixIcon && <Image src={prefixIcon} width={20} height={20} style={{marginRight: 8}} alt="Icon" /> }
      <InputContent type={type} value={value || children} onChange={onChange} onInput={onInput} width={width} height={height} placeholder={placeholder} fullWidth={fullWidth} />
      { suffixIcon && <Image src={suffixIcon} width={20} height={20} style={{marginLeft: 8}} alt="Icon" /> }
    </InputContainer>
  );
}
