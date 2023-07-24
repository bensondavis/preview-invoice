import React from "react";
import styles from "./GridContainer.module.css";

interface GridContainerProps {
  children: React.ReactNode;
  columnTemplate: string;
}

const GridContainer = ({ children, columnTemplate }: GridContainerProps) => {
  return (
    <div
      className={styles.container}
      style={{ gridTemplateColumns: columnTemplate }}
    >
      {children}
    </div>
  );
};

export default GridContainer;
