"use client";

import React from "react";
import Appbar from "../../components/Appbar";
import Invoice from "../../components/Invoice/Invoice";
import Logos from "../../config/logoConfig";
import {
  calculateDueDate,
  calculateOverDueDays,
} from "../../functions/DateFunctions";
import { useEffect, useState } from "react";
import { InvoiceProps } from "../../interfaces/invoice";
import { data } from "../../mock-data/testInvoice";
import Image from "next/image";
import isInvoice from "../../functions/isInvoice";
import { Stack } from "@mui/material";
import styles from "../../styles/App.module.css";
import { useTranslations } from "next-intl";

const emptyData = {
  toAddress: [
    {
      name: "",
      place: "",
      state: "",
      zipCode: "",
      country: "",
    },
  ],
  fromAddress: {
    name: "",
    place: "",
    state: "",
    zipCode: "",
    country: "",
  },
  invoiceNumber: "",
  reference: "",
  issued: new Date(),
  due: 0,
  net: 0,
  tax: 0,
  gross: 0,
  lineItems: [
    {
      name: "",
      quantity: 0,
      unitPrice: 0,
      tax: 0,
      amount: 0,
    },
    {
      name: "",
      quantity: 0,
      unitPrice: 0,
      tax: 0,
      amount: 0,
    },
  ],
  paymentLink: "",
  pdfDownloadLink: "",
};

function App() {
  const [invoice, setInvoice] = useState<InvoiceProps>(emptyData);
  const t = useTranslations("Invoice");

  useEffect(() => {
    //replace with your api request and save the response to setInvoice
    data().then((res) => {
      setInvoice(isInvoice(res) ? res : emptyData);
    });
  }, []);

  return (
    <div className={styles.App}>
      <Appbar
        amount={invoice.gross}
        due={calculateOverDueDays(
          calculateDueDate(invoice.issued, invoice.due)
        )}
      />
      <Invoice invoiceData={invoice} />

      <Stack
        className={styles.footer}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <a href={Logos.companyLogo.link} className={"img-link"}>
          <Image src={Logos.companyLogo.img} alt="logo" />
        </a>
      </Stack>
    </div>
  );
}

export default App;
