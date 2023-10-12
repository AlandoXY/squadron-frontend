import styled from "styled-components";
import React, {MouseEventHandler, useState} from "react";
import Image from "next/image";
import {useOutsideClick} from "@/components/use-outside-click";

const DropdownContainer = styled.div`
  display: inline-flex;
  position: relative;
  width: ${({fullWidth}) => fullWidth ? '100%' : 'auto'};
  background-color: white;
`;

const DropdownInputContainer = styled.div`
  display: inline-flex;
  align-items: center;
  width: ${({fullWidth}) => fullWidth ? '100%' : 'auto'};
  padding: 0.5rem 1rem;
  border: 1px solid #D2D6DB;
  border-radius: 0.3rem;
  cursor: pointer;
`;

const DropdownInput = styled.input`
  border: none;
  outline: none;
  cursor: pointer;
  height: 20px;
  line-height: 20px;
  width: ${({inputWidth, fullWidth}) => fullWidth ? '100%' : inputWidth};
`;

const DropdownListContainer = styled.div`
  position: absolute;
  left: 0;
  top: 40px;
  border: 1px solid #D2D6DB;
  border-radius: 0.3rem;
  width: 100%;
  background-color: white;
  z-index: 999;
`

const DropdownListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: ${({active}) => active ? "#e1e1e1" : "inherit"};
  
  &:hover {
    background-color: #e1e1e1;
  }
`

interface DropdownOption {
  label: string;
  value: string;
  icon?: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  prevIcon?: string;
  disableInput?: boolean;
  showSuffixIcon?: boolean;
  inputWidth?: string;
  fullWidth?: boolean;
}

export default function Dropdown({ options, value, placeholder = "Select", onChange = () => {}, prevIcon, disableInput = true, showSuffixIcon = true, inputWidth="150px", fullWidth }: DropdownProps) {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  }

  const optionSelected = (value: string) => {
    onChange(value);
    setOpen(false);
  }

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return (
    <DropdownContainer ref={ref} fullWidth={fullWidth}>
      <DropdownInputContainer onClick={toggleDropdown} fullWidth={fullWidth}>
        {
          prevIcon && <Image src={prevIcon} width={15} height={15} alt="Icon" style={{marginRight: 5}} />
        }
        <DropdownInput placeholder={placeholder} readOnly={disableInput} value={value} onChange={(e) => onChange(e.target.value)} inputWidth={inputWidth} fullWidth={fullWidth} />
        {
          showSuffixIcon &&  <Image src="/icons/arrow-down.png" width={10} height={7} alt="Icon" />
        }
      </DropdownInputContainer>
      {
        open && (
          <DropdownListContainer>
            {
              options.map(option =>
                <DropdownListItem
                  key={option.value}
                  active={value === option.value}
                  onClick={() => optionSelected(option.value)}>
                  { option.icon && <Image src={option.icon} width={30} height={30} alt="Icon" style={{marginRight: 5}} /> }
                  {option.label}
                </DropdownListItem>
              )
            }
          </DropdownListContainer>
        )
      }
    </DropdownContainer>
  );
}
