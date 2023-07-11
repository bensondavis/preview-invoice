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
import { Stack, Box } from "@mui/material";
import styles from "../../styles/App.module.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme/theme";
import Link from "next/link";
import Loading from "@/components/Loading";

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
  const [invoice, setInvoice] = useState<InvoiceProps | undefined>();

  useEffect(() => {
    //replace with your api request and save the response to setInvoice
    data().then((res: any) => {
      setInvoice(res);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.App}>
        {invoice ? (
          <>
            <Appbar
              amount={invoice.gross}
              due={calculateOverDueDays(
                calculateDueDate(invoice.issued, invoice.due)
              )}
              pdfLink={invoice.pdfDownloadLink}
            />
            <Invoice invoiceData={invoice} />

            <Stack
              className={styles.footer}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Link href={Logos.companyLogo.link}>
                <Image src={Logos.companyLogo.img} alt="logo" />
              </Link>
            </Stack>
          </>
        ) : (
          <Loading />
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
