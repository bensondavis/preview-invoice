"use client";

import React from "react";
import InvoiceHeader from "../InvoiceHeader/InvoiceHeader";
import InvoiceBody from "../InvoiceBody/InvoiceBody";
import InvoiceLineItems from "../InvoiceLineItems/InvoiceLineItems";
import InvoiceFooter from "../InvoiceFooter/InvoiceFooter";
import { InvoiceProps } from "../../../interfaces/invoice";
import styles from "./Invoice.module.css";
import Divider from "@/components/Divider/Divider";
import InvoiceSummary from "../InvoiceSummary/InvoiceSummary";

const Invoice = ({ invoiceData }: { invoiceData: InvoiceProps }) => {
  return (
    <div className={styles.container}>
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
      <InvoiceLineItems lineItems={invoiceData.lineItems} />
      <InvoiceSummary
        net={invoiceData.net}
        tax={invoiceData.tax}
        gross={invoiceData.gross}
      />
      <Divider />
      <InvoiceFooter
        companyName={invoiceData.toAddress[0].name}
      />
    </div>
  );
};

export default Invoice;
