import React from "react";
import styles from "./TableRow.module.css";

interface TableRowProps {
  children: React.ReactNode;
  selected?: boolean;
  className?: string;
}

const TableRow = ({ children, selected, className }: TableRowProps) => {
  return (
    <tr
      style={{ backgroundColor: selected ? "rgba(66, 165, 245, 0.08)" : "" }}
      className={styles["tr"] + " " + className}
    >
      {children}
    </tr>
  );
};

export default TableRow;
