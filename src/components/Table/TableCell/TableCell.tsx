import React from "react";
import styles from "./TableCell.module.css";

interface TableCellProps {
  children?: React.ReactNode;
  numeric?: boolean;
  colSpan?: number;
  rowSpan?: number;
  className?: string;
}

const TableCell = (props: TableCellProps) => {
  const { children, numeric, rowSpan, colSpan, className } = props;

  return (
    <td
      className={styles.td + " " + className}
      style={{
        textAlign: numeric ? "right" : "left",
      }}
      colSpan={colSpan}
      rowSpan={rowSpan}
    >
      {children}
    </td>
  );
};

export default TableCell;
