import styled from "styled-components";
import React, {MouseEventHandler} from "react";
import IconButton from "@/components/icon-button";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(52, 64, 84, 0.7);
  z-index: 999;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  border-radius: 12px;
  padding: 10px 20px;
  width: ${({width}) => width + 'px'};
  min-height: ${({height}) => height + 'px'};
`;

const CloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

interface ModalProps {
  children: React.ReactNode;
  open?: boolean;
  width?: number;
  height?: number;
  handleClose?: MouseEventHandler<HTMLButtonElement>;
  closeButton?: boolean;
}

export default function Modal({ children, open = false, width = 300, height = 200, closeButton, handleClose = () => {} }: ModalProps) {
  return open ?(
    <ModalContainer>
      <ModalContent width={width} height={height}>
        {
          closeButton && (
            <CloseButton>
              <IconButton
                onClick={handleClose!}
                width={20}
                height={20}
                fullWidth={false}
                icon="/icons/x-close.png" />
            </CloseButton>
          )
        }
        {children}
      </ModalContent>
    </ModalContainer>
  ) : null;
}
