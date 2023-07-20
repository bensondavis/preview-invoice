"use client";

import React from "react";
import Appbar from "../../components/Appbar/Appbar";
import Invoice from "../../components/Invoice/Invoice/Invoice";
import {
  calculateDueDate,
  calculateOverDueDays,
} from "../../utils/DateFunctions";
import { useEffect, useState } from "react";
import { InvoiceProps } from "../../interfaces/invoice";
import { data } from "../../mock-data/testInvoice";
import isInvoice from "../../utils/isInvoice";
import styles from "./App.module.css";
import Loading from "@/components/Loading/Loading";
import Footer from "@/components/Footer/Footer";

function App() {
  const [invoice, setInvoice] = useState<InvoiceProps | undefined>();

  useEffect(() => {
    //replace with your api request and save the response to setInvoice
    data().then((res: any) => {
      setInvoice(isInvoice(res) ? res : undefined);
    });
  }, []);

  return (
    <div className={styles.App}>
      {invoice ? (
        <>
          <Appbar
            amount={invoice.gross}
            due={calculateOverDueDays(
              calculateDueDate(invoice.issued, invoice.due)
            )}
            pdfLink={invoice.pdfDownloadLink}
            paymentLink={invoice.paymentLink}
          />
          <Invoice invoiceData={invoice} />

          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
