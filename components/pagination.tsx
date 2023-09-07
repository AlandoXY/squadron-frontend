import styled from "styled-components";
import React, {MouseEventHandler} from "react";
import Image from 'next/image'

const PaginationContainer = styled.div`
  display: inline-flex;
  border: 1px solid #D2D6DB;
  border-radius: 0.3rem;
`;

const PaginationItem = styled.div<any>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.8rem;
  border-right: 1px solid #D2D6DB;
  cursor: pointer;
  background-color: ${props => props['active'] ? "#f7fafd" : "white"};
  user-select: none;
  
  &:hover {
    background-color: #f7fafd;
  }
  
  &:last-child {
    border-right: none;
  }
`;

interface PaginationProps {
  page: number;
  totalSize: number;
  pageSize?: number;
  onChange?: (page: number) => void;
}

export default function Pagination({ page, totalSize, pageSize = 10, onChange = () => {} }: PaginationProps) {
  const handlePrev = () => {
    if (page > 1) {
      onChange && onChange(page - 1);
    }
  }

  const handleNext = () => {
    if (page < Math.ceil(totalSize / pageSize)) {
      onChange && onChange(page + 1);
    }
  }

  return (
    <PaginationContainer>
      <PaginationItem onClick={handlePrev}>
        <Image src="/icons/left-arrow.png" width={15} height={15} alt="Icon" style={{marginRight: 5}} />
        <span>Previous</span>
      </PaginationItem>
      {
        Array.from({length: Math.ceil(totalSize / pageSize)}).map((_, index) => <PaginationItem key={index} active={page === (index + 1)} onClick={() => onChange && onChange(index + 1)}>{index + 1}</PaginationItem>)
      }
      <PaginationItem onClick={handleNext}>
        <span>Next</span>
        <Image src="/icons/right-arrow.png" width={15} height={15} alt="Icon" style={{marginLeft: 5}} />
      </PaginationItem>
    </PaginationContainer>
  );
}
