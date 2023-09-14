import styled from "styled-components";
import React, {MouseEventHandler} from "react";

const TableRowContainer = styled.tr`
 font-weight: ${({bold}) => bold ? "bold" : "normal"};
`;

interface TableRowProps {
  children: React.ReactNode;
  bold?: boolean;
}

export default function TableRow({ children, bold = false }: TableRowProps) {
  return (
    <TableRowContainer bold={bold}>
      {children}
    </TableRowContainer>
  );
}
