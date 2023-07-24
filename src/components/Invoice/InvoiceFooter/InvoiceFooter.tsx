import React from "react";
import styles from "./InvoiceFooter.module.css";

interface InvoiceFooterProps {
  companyName: string;
}

const InvoiceFooter = ({ companyName }: InvoiceFooterProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <h3 className={styles.title}>{companyName}</h3>
      </div>
    </div>
  );
};

export default InvoiceFooter;
