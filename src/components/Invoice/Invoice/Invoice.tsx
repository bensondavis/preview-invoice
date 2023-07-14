"use client";

import React from "react";
import { Box, Divider } from "@mui/material";
import InvoiceHeader from "../InvoiceHeader/InvoiceHeader";
import InvoiceBody from "../InvoiceBody/InvoiceBody";
import InvoiceLineItems from "../InvoiceLineItems/InvoiceLineItems";
import InvoiceFooter from "../InvoiceFooter/InvoiceFooter";
import { InvoiceProps } from "../../../interfaces/invoice";
import styles from "./Invoice.module.css"

const Invoice = ({ invoiceData }: { invoiceData: InvoiceProps }) => {
  return (
    <Box
      sx={{
        width: { xs: "calc(100% - 2px)", sm: "93%", md: "85%" },
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