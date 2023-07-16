import React from "react";
import styles from "./TableContainer.module.css"

interface TableContainerProps {
  children: React.ReactNode
}

const TableContainer = ({children}: TableContainerProps) => {
  return(
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default TableContainer;