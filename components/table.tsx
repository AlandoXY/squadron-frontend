import styled from "styled-components";
import React, {MouseEventHandler} from "react";

const TableContainer = styled.table`
  width: ${({width}) => width}
`;

interface TableProps {
  children: React.ReactNode;
  width?: string;
}

export default function Table({ children, width = "100%" }: TableProps) {
  return (
    <TableContainer width={width}>
      {children}
    </TableContainer>
  );
}
