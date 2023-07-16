"use client";

import React from "react";
import Appbar from "../../components/Appbar/Appbar";
import Invoice from "../../components/Invoice/Invoice/Invoice";
import Logos from "../../config/logoConfig";
import {
  calculateDueDate,
  calculateOverDueDays,
} from "../../utils/DateFunctions";
import { useEffect, useState } from "react";
import { InvoiceProps } from "../../interfaces/invoice";
import { data } from "../../mock-data/testInvoice";
import Image from "next/image";
// import isInvoice from "../../utils/isInvoice";
import styles from "./App.module.css";
import Link from "next/link";
import Loading from "@/components/Loading/Loading";

function App() {
  const [invoice, setInvoice] = useState<InvoiceProps | undefined>();

  useEffect(() => {
    //replace with your api request and save the response to setInvoice
    data().then((res: any) => {
      setInvoice(res);
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
          />
          <Invoice invoiceData={invoice} />

          <div className={styles.footer}>
            <Link href={Logos.companyLogo.link}>
              <Image src={Logos.companyLogo.img} alt="logo" className={styles.img} />
            </Link>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
