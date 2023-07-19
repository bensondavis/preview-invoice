import React from "react";
// import { Box, Stack } from "@mui/material";
// import Grid from "@mui/material/Grid";
import InvoiceAddress from "../InvoiceAddress/InvoiceAddress";
import InvoiceData from "../InvoiceData/InvoiceData";
import { Address } from "../../../interfaces/address";
import {
  calculateDueDate,
  calculateOverDueDays,
} from "../../../utils/DateFunctions";
import styles from "./InvoiceBody.module.css";
import GridContainer from "@/components/GridContainer/GridContainer";

interface InvoiceBodyProps {
  toAddress: Address[];
  fromAddress: Address;
  invoiceNumber: string;
  reference: string;
  issued: Date;
  due: number;
}

const InvoiceBody = ({
  toAddress,
  fromAddress,
  invoiceNumber,
  reference,
  issued,
  due,
}: InvoiceBodyProps) => {
  return (
    <div className={styles.container}>
      <div className={styles["content-box"]}>
        <GridContainer columnTemplate="100%">
          <InvoiceAddress title="to" addresses={toAddress} />
          <InvoiceData title="invoiceNumber" value={invoiceNumber} />
          <InvoiceData title="reference" value={reference} />
          <InvoiceData
            title="issued"
            value={issued.toISOString().split("T")[0]}
          />
          <InvoiceData
            title="due"
            value={calculateDueDate(issued, due)}
            overDue={calculateOverDueDays(calculateDueDate(issued, due))}
          />
        </GridContainer>
        <GridContainer columnTemplate="100%">
          <InvoiceAddress title="from" address={fromAddress} />
        </GridContainer>
      </div>
    </div>
  );
};

export default InvoiceBody;
