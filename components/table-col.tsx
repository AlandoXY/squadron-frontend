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
  colspan?: number;
}

export default function TableCol({ children, textAlign, colspan = 1, ...rest }: TableColProps) {
  return (
    <TableColContainer textAlign={textAlign} colspan={colspan} {...rest}>
      {children}
    </TableColContainer>
  );
}
