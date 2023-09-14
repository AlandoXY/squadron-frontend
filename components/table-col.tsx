import styled from "styled-components";
import React, {MouseEventHandler} from "react";

const TableColContainer = styled.td`
  border-bottom: 1px solid #E5E7EB;
  padding: 15px;
  text-align: ${({textAlign}) => textAlign};
`;

interface TableColProps {
  children: React.ReactNode;
  textAlign?: string;
}

export default function TableCol({ children, textAlign }: TableColProps) {
  return (
    <TableColContainer textAlign={textAlign}>
      {children}
    </TableColContainer>
  );
}
