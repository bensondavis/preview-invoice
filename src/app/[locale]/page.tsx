"use client";

import React from "react";
import Appbar from "../../components/Appbar";
import Invoice from "../../components/Invoice/Invoice";
import Logos from "../../config/logoConfig";
import {
  calculateDueDate,
  calculateOverDueDays,
} from "../../utils/DateFunctions";
import { useEffect, useState } from "react";
import { InvoiceProps } from "../../interfaces/invoice";
import { data } from "../../mock-data/testInvoice";
import Image from "next/image";
import isInvoice from "../../utils/isInvoice";
import { Stack } from "@mui/material";
import styles from "../../styles/App.module.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme/theme";

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

  useEffect(() => {
    //replace with your api request and save the response to setInvoice
    data().then((res) => {
      setInvoice(isInvoice(res) ? res : emptyData);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;