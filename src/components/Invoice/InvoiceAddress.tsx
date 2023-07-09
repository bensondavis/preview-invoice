import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Address } from "../../interfaces/address";
import {useTranslations} from 'next-intl';

interface InvoiceAddressProps {
  title: string;
  address?: Address;
  addresses?: Address[];
}

const InvoiceAddress = ({ title, address, addresses }: InvoiceAddressProps) => {
  const i18n = useTranslations('Invoice');
  const AddressData = addresses ? addresses : [address];
  
  return (
    <Grid container sx={{ textAlign: "left" }} rowSpacing={2}>
      {AddressData.map((data, index) => (
        <React.Fragment key={index}>
          <Grid item xs={6}>
            <Typography className="details" sx={{ ml: 4 }}>
              <b>{index === 0 ? i18n(title) : ""}</b>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <Typography className="details" >{data?.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="details">{data?.place}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="details">{data?.state}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="details">{data?.zipCode}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="details">{data?.country}</Typography>
            </Grid>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default InvoiceAddress;
