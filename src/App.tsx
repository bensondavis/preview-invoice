import "./App.css";
import Appbar from "./components/Appbar";
import Invoice from "./components/Invoice/Invoice";
import Box from "@mui/material/Box";
import Logos from "./config/logoConfig";
import {
  calculateDueDate,
  calculateOverDueDays,
} from "./functions/DateFunctions";
import { useEffect, useState } from "react";
import { InvoiceProps } from "./interfaces/invoice";
import { data } from "./mock-data/testInvoice";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./customisation/theme";

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <Appbar
          amount={invoice.gross}
          due={calculateOverDueDays(
            calculateDueDate(invoice.issued, invoice.due)
          )}
        />
        <Invoice invoiceData={invoice} />

        <a href={Logos.companyLogo.link}>
          <Box
            component={"img"}
            src={Logos.companyLogo.img}
            alt="logo"
            width={200}
            sx={{ ml: "calc(50% - 100px)", my: 9 }}
          />
        </a>
      </div>
    </ThemeProvider>
  );
}

export default App;
