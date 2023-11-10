import styled from "styled-components";
import React, {HTMLInputTypeAttribute} from "react";
import Image from "next/image";

interface InputContainerProps {
  noBorder?: boolean;
  fullWidth?: boolean;
}

const InputContainer = styled.div<InputContainerProps>`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 6px;
  border: ${({noBorder}) => noBorder ? 'none' : '1px solid #D2D6DB'};
  padding: 0.6rem;;
  width: ${({fullWidth}) => fullWidth ? '100%' : 'auto'};
  background-color: white;
`;

interface InputInnerProps {
  fullWidth?: boolean;
  width?: number | string;
  value?: string | React.ReactNode | undefined;
}

const InputContent = styled.input<InputInnerProps>`
  border: none;
  outline: none;
  width: ${({fullWidth, width}) => fullWidth ? '100%' : (typeof width === "number" ? (width + "px") : width)};
  height: ${props => props.height + "px"};
  background-color: transparent;
`

interface InputProps {
  children?: string;
  value?: string;
  type?: HTMLInputTypeAttribute
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void
  width?: number | string;
  height?: number;
  prefixIcon?: string;
  suffixIcon?: string;
  placeholder?: string;
  fullWidth?: boolean;
  noBorder?: boolean;
  prefixIconWidth?: number;
  prefixIconHeight?: number;
  suffixIconWidth?: number;
  suffixIconHeight?: number;
  readOnly?: boolean;
  containerRest?: React.ComponentPropsWithoutRef<"div">
}

export default function Input({ value="", children, type="text", onChange = () => {}, onInput = () => {}, width = 200, height = 25, prefixIcon, suffixIcon, placeholder, prefixIconWidth, prefixIconHeight, suffixIconWidth, suffixIconHeight, fullWidth, noBorder, containerRest, readOnly, ...rest }: InputProps) {
  return (
    <InputContainer
      fullWidth={fullWidth}
      noBorder={noBorder}
      {...containerRest}
    >
      { prefixIcon && <Image src={prefixIcon} width={prefixIconWidth || 20} height={prefixIconHeight || 20} style={{marginRight: 8}} alt="Icon" /> }
      <InputContent type={type} value={value || children} onChange={onChange} onInput={onInput} width={width} height={height} placeholder={placeholder} fullWidth={fullWidth} readOnly={readOnly} {...rest} />
      { suffixIcon && <Image src={suffixIcon} width={suffixIconWidth || 20} height={suffixIconHeight || 20} style={{marginLeft: 8}} alt="Icon" /> }
    </InputContainer>
  );
}
