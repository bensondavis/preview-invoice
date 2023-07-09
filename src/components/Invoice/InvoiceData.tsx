import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useTranslations} from 'next-intl';

interface InvoiceDataProps {
  title: string;
  value: string;
  overDue?: number;
}

const InvoiceData = ({ title, value, overDue }: InvoiceDataProps) => {
  const i18n = useTranslations('Invoice');

  return (
    <Grid container spacing={1} sx={{ textAlign: "left" }}>
      <Grid item xs={6}>
        <Typography className="details" sx={{ ml: 4 }}>
          <b>{i18n(title)}</b>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography
          className="details"
          color={overDue && overDue > 0 ? "red" : ""}
        >
          {value}
          {overDue && overDue > 0 ? "," : ""}
        </Typography>

        {overDue && overDue > 0 ? (
          <Typography
            className="details"
            variant="body2"
            fontWeight={600}
            color={"red"}
          >
            {overDue} {i18n("days")} {i18n("overdue")}
          </Typography>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default InvoiceData;
