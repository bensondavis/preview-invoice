import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "../../styles/Invoice/InvoiceFooter.module.css";

interface InvoiceFooterProps {
  companyName: string;
}

const InvoiceFooter = ({ companyName }: InvoiceFooterProps) => {
  return (
    <Box className={styles.container}>
      <Box className={styles.footer}>
        <Typography className={styles.title}>{companyName}</Typography>
      </Box>
    </Box>
  );
};

export default InvoiceFooter;
