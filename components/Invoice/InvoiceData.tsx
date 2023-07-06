import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface InvoiceDataProps {
  title: string;
  value: string;
  overDue?: number;
}

const InvoiceData = ({ title, value, overDue }: InvoiceDataProps) => {
  return (
    <Grid container spacing={1} sx={{ textAlign: "left" }}>
      <Grid item xs={6}>
        <Typography sx={{ ml: 4 }}>
          <b>{title}</b>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        {value}
        {overDue && overDue > 0 ? (
          <>
            {","}{" "}
            <Typography variant="body2" fontWeight={600} color={"red"}>
              {overDue} days overdue
            </Typography>
          </>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default InvoiceData;
