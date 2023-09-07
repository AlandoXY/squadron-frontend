import styled from "styled-components";
import React, {MouseEventHandler, useEffect, useState} from "react";

const MessageContainer = styled.div`
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 0.3rem;
  background-color: ${props => props.color};
  color: ${props => props.fontColor};
  cursor: pointer;
  z-index: 999;
`;

interface MessageProps {
  children: React.ReactNode;
  color?: string;
  fontColor?: string;
  open?: boolean;
  timeout?: number
  onClose?: () => void;
}

export default function Message({ children, color = '#f0f0f0', fontColor = '#000', open=false, timeout=3000, onClose = () => {}}: MessageProps) {
  const [sOpen, setSOpen] = useState(false);

  useEffect(() => {
    setSOpen(open!);

    setTimeout(() => {
      setSOpen(false);
      onClose && onClose();
    }, timeout!);
  }, [onClose, open, timeout])

  return sOpen && (
    <MessageContainer color={color} fontColor={fontColor}>
      {children}
    </MessageContainer>
  );
}
