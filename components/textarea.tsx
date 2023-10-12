import styled from "styled-components";
import React, {useState} from "react";

const TextareaContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const TextareaContent = styled.textarea`
  outline: none;
  width: ${({width}) => typeof width === 'number' ? width + 'px' : width};
  height: ${props => props.height + "px"};
  resize: ${props => props.resize ? "both" : "none"};
  border-radius: 6px;
  border: 1px solid #D2D6DB;
  padding: 0.6rem;
`

const TextareaLeftText = styled.div`
  color: #4D5761;
`

interface TextareaProps {
  children?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onInput?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  width?: number | string;
  height?: number;
  limit?: number;
  resize?: boolean;
  withLimit?: boolean;
}

export default function Textarea({children, onChange = () => {}, onInput = () => {}, width = 400, height = 200, resize = true, limit = 1000, withLimit = true, ...rest }: TextareaProps) {

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const len = e.target.value.length
    if (len < limit) {
      onChange && onChange(e);
    }
  }

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const len = e.target.value.length
    if (len < limit) {
      onInput && onInput(e);
    }
  }

  return (
    <TextareaContainer
    >
      <TextareaContent value={children} onChange={handleChange} onInput={handleInput} width={width} height={height} resize={resize} {...rest} />
      {
        withLimit && <TextareaLeftText>{ limit - (children ? children.length : 0) } characters left</TextareaLeftText>
      }
    </TextareaContainer>
  );
}
