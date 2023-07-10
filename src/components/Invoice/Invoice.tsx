"use client";

import React from "react";
import { Box, Divider } from "@mui/material";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceBody from "./InvoiceBody";
import InvoiceLineItems from "./InvoiceLineItems";
import InvoiceFooter from "./InvoiceFooter";
import { InvoiceProps } from "../../interfaces/invoice";
import styles from "../../styles/Invoice/Invoice.module.css"

const Invoice = ({ invoiceData }: { invoiceData: InvoiceProps }) => {
  return (
    <Box
      sx={{
        width: { xs: "calc(100% - 2px)", sm: "90%", md: "80%" },
      }}
      className={styles.container}
    >
      <InvoiceHeader />
      <Divider />
      <InvoiceBody
        toAddress={invoiceData.toAddress}
        fromAddress={invoiceData.fromAddress}
        invoiceNumber={invoiceData.invoiceNumber}
        reference={invoiceData.reference}
        issued={invoiceData.issued}
        due={invoiceData.due}
      />
      <Divider />
      <InvoiceLineItems
        lineItems={invoiceData.lineItems}
        net={invoiceData.net}
        tax={invoiceData.tax}
        gross={invoiceData.gross}
      />
      <Divider />
      <InvoiceFooter companyName={invoiceData.toAddress[0].name} />
    </Box>
  );
};

export default Invoice;
