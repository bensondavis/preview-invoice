import React, { useEffect, useState } from "react";
import styles from "./GridContainer.module.css";

interface GridContainerProps {
  children: React.ReactNode;
  columnCount: number;
}

const GridContainer = ({ children, columnCount }: GridContainerProps) => {
  const [columns, setColumns] = useState("100%");

  useEffect(() => {
    if (columnCount > 1) {
      let col = "";
      for (let i = 0; i < columnCount; i++) {
        col += "50% ";
      }
      col = col.trim();
      setColumns(col);
    }
  }, [columnCount]);

  return (
    <div className={styles.container} style={{ gridTemplateColumns: columns }}>
      {children}
    </div>
  );
};

export default GridContainer;
