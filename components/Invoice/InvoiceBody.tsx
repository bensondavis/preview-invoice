import React from "react";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import InvoiceAddress from "./InvoiceAddress";
import InvoiceData from "./InvoiceData";
import { Address } from "../../interfaces/address";
import { calculateDueDate, calculateOverDueDays } from "../../functions/DateFunctions";

interface InvoiceBodyProps {
  toAddress: Address;
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
    <Stack
      direction={{ xs: "column", sm: "row", md: "row" }}
      sx={{ width: "100%", mb: 3, mt: 2 }}
      alignItems={"baseline"}
      justifyContent={"center"}
      spacing={1}
    >
      <Grid container spacing={3} sx={{ width: "100%" }}>
        <Grid item xs={12}>
          <InvoiceAddress title="To" address={toAddress} />
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
  );
};

export default InvoiceBody;
