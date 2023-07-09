import React from "react";
import { Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import InvoiceAddress from "./InvoiceAddress";
import InvoiceData from "./InvoiceData";
import { Address } from "../../interfaces/address";
import {
  calculateDueDate,
  calculateOverDueDays,
} from "../../utils/DateFunctions";
import styles from "../../styles/Invoice/InvoiceBody.module.css";

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
    <Box className={styles.container}>
      <Stack
        direction={{ xs: "column", sm: "row", md: "row" }}
        className={styles["content-box"]}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
      >
        <Grid container spacing={3} sx={{ width: "100%" }}>
          <Grid item xs={12}>
            <InvoiceAddress title="To" addresses={toAddress} />
          </Grid>
          <Grid item xs={12}>
            <InvoiceData title="Invoice Number" value={invoiceNumber} />
          </Grid>
          <Grid item xs={12}>
            <InvoiceData title="Reference" value={reference} />
          </Grid>
          <Grid item xs={12}>
            <InvoiceData
              title="Issued"
              value={issued.toISOString().split("T")[0]}
            />
          </Grid>
          <Grid item xs={12}>
            <InvoiceData
              title="Due"
              value={calculateDueDate(issued, due)}
              overDue={calculateOverDueDays(calculateDueDate(issued, due))}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ width: "100%" }}>
          <Grid item xs={12}>
            <InvoiceAddress title="From" address={fromAddress} />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default InvoiceBody;
