import styled from "styled-components";
import React, {forwardRef, MouseEventHandler, useImperativeHandle, useState} from "react";
import {useOutsideClick} from "@/components/use-outside-click";

const PopoverContainer = styled.div<PopoverProps>`
  position: relative;
  display: inline-block;
`;

const PopoverContent = styled.div<PopoverContentProps>`
  position: absolute;
  display: inline-block;
  top: ${({top}) => top + 'px'};
  right: ${({align}) => align === 'right' ? 0 : 'auto'};
  left: ${({align}) => align === 'left' ? 0 : 'auto'};
  padding: 1rem;
  color: white;
  background-color: white;
  border-radius: 0.7rem;
  max-width: ${({maxWidth}) => maxWidth};
  z-index: 99;
  //width: 400px;
`;

interface PopoverContentProps {
  maxWidth?: string;
  align?: string;
  top?: number;
}

interface PopoverProps {
  children: React.ReactNode;
  renderContent?: () => React.ReactNode;
  maxWidth?: string;
  align?: string;
  top?: number;
}

export type PopoverHandle = {
  toggle: () => void;
};

const Popover = forwardRef<PopoverHandle, PopoverProps>(({ children, renderContent, maxWidth, top=30, align='right', ...rest }: PopoverProps, ref) => {
  const [open, setOpen] = useState(false);

  const containerRef = useOutsideClick(() => {
    setOpen(false);
  });

  useImperativeHandle(ref, () => ({
    toggle: () => setOpen(!open)
  }));

  return (
    <PopoverContainer ref={containerRef} onClick={(e) => {
      e.stopPropagation();
      setOpen(true);
    }} {...rest}>
      {children}
      {
        open && (
          <PopoverContent maxWidth={maxWidth} align={align} top={top}>
            {
              renderContent && renderContent()
            }
          </PopoverContent>
        )
      }
    </PopoverContainer>
  );
});

Popover.displayName = 'Popover';

export default Popover;
