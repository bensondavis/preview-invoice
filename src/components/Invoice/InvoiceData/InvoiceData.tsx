import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import styles from "./InvoiceData.module.css"

interface InvoiceDataProps {
  title: string;
  value: string;
  overDue?: number;
}

const InvoiceData = ({ title, value, overDue }: InvoiceDataProps) => {
  const i18n = useTranslations("Invoice");

  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Typography >
          <b>{i18n(title)}</b>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography color={overDue && overDue > 0 ? "error" : ""}>
          {value}
          {overDue && overDue > 0 ? "," : ""}
        </Typography>

        {overDue && overDue > 0 ? (
          <Typography className={styles.overdue} color={"error"}>
            {overDue} {i18n("days")} {i18n("overdue")}
          </Typography>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default InvoiceData;
