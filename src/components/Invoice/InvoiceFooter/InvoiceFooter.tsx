import React from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import styles from "./InvoiceFooter.module.css";
import PdfBtn from "@/components/PdfBtn/PdfBtn";

interface InvoiceFooterProps {
  companyName: string;
  pdfLink: string;
}

const InvoiceFooter = ({ companyName, pdfLink }: InvoiceFooterProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <h3 className={styles.title}>{companyName}</h3>
        <PdfBtn link={pdfLink}/>
      </div>
    </div>
  );
};

export default InvoiceFooter;
