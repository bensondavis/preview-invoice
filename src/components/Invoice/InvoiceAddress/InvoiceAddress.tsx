import React from "react";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
import { Address } from "../../../interfaces/address";
import { useTranslations } from "next-intl";
// import styles from "./InvoiceAddress.module.css";
import GridContainer from "@/components/GridContainer/GridContainer";

interface InvoiceAddressProps {
  title: string;
  address?: Address;
  addresses?: Address[];
}

const InvoiceAddress = ({ title, address, addresses }: InvoiceAddressProps) => {
  const i18n = useTranslations("Invoice");
  const AddressData = addresses ? addresses : [address];

  return (
    <GridContainer columnCount={2}>
      {AddressData.map((data, index) => (
        <React.Fragment key={index}>
          <p >
            <b>{index === 0 ? i18n(title) : ""}</b>
          </p>
          <p >
            {data?.name} <br /> {data?.place} <br /> {data?.state} <br />{" "}
            {data?.zipCode} <br /> {data?.country}
          </p>
        </React.Fragment>
      ))}
    </GridContainer>
  );
};

export default InvoiceAddress;
