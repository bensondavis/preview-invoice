import React from "react";
import Appbar from "../components/Appbar";
import Invoice from "../components/Invoice/Invoice";
import Box from "@mui/material/Box";
import Logos from "../config/logoConfig";
import {
  calculateDueDate,
  calculateOverDueDays,
} from "../functions/DateFunctions";
import { useEffect, useState } from "react";
import { InvoiceProps } from "../interfaces/invoice";
import { data } from "../mock-data/testInvoice";
import Image from "next/image";

function App() {
  const [invoice, setInvoice] = useState<InvoiceProps | any>({
    toAddress: {
      name: "",
      place: "",
      state: "",
      zipCode: "",
      country: "",
    },
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
  });

  useEffect(() => {
    //replace with your api request and save the response to setInvoice
    data().then((res) => {
      setInvoice(res);
    });
  }, []);

  return (
    <div className="App">
      <Appbar
        amount={invoice.gross}
        due={calculateOverDueDays(
          calculateDueDate(invoice.issued, invoice.due)
        )}
      />
      <Invoice invoiceData={invoice} />

      <Box sx={{ my: 5 }}>
        <a
          href={Logos.companyLogo.link}
          className={"div-x-center"}
          // style={{ marginLeft: "calc(50% - 100px)" }}
        >
          <Image src={Logos.companyLogo.img} alt="logo" />
        </a>
      </Box>
    </div>
  );
}

export default App;
