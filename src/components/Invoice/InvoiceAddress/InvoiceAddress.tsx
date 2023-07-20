import React from "react";
import { Address } from "../../../interfaces/address";
import { useTranslations } from "next-intl";
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
    <GridContainer columnTemplate="50% 50%">
      {AddressData.map((data, index) => (
        <React.Fragment key={index}>
          <p>
            <b>{index === 0 ? i18n(title) : ""}</b>
          </p>
          <p>
            {data?.name} <br /> {data?.place} <br /> {data?.state} <br />{" "}
            {data?.zipCode} <br /> {data?.country}
          </p>
        </React.Fragment>
      ))}
    </GridContainer>
  );
};

export default InvoiceAddress;
