"use client";

import React from "react";
import styles from "./Appbar.module.css";
import { ccyFormat } from "../../utils/Numerics";
import { useTranslations } from "next-intl";
// import Localization from "../Localization/Localization";
import PdfBtn from "../PdfBtn/PdfBtn";
import PayBtn from "../PayBtn/PayBtn";

import { useSearchParams } from "next/navigation";

interface AppbarProps {
  amount: number;
  due: number;
  pdfLink: string;
  paymentLink: string; 
}

const Appbar = ({ amount, due, pdfLink, paymentLink }: AppbarProps) => {
  const i18n = useTranslations("Invoice");
  const searchParams = useSearchParams();
  const pay = searchParams.get("pay") === "true";

  return (
    <div className={styles.Appbar}>
      <div className={styles.summary}>
        <div className={styles["total-currency"]}>
          {/* <h2 className={styles.total}>{ccyFormat(amount)}</h2> */}
          <h2 className={styles.total}>{Intl.NumberFormat().format(amount)}</h2>
          <h3 className={styles.currency}>EUR</h3>
        </div>

        {due && due > 0 ? (
          <div className={styles["due-box"]}>
            <h6 className={styles.due}>
              {i18n("daysOverdue", { overdueDays: due })}
            </h6>
          </div>
        ) : null}
      </div>

      {pay ? (
        <div className={styles["paybtn-container"]}>
          <PayBtn link={paymentLink} className={styles.paybtn} />
        </div>
      ) : null}

      {/* <Localization /> */}
      <PdfBtn link={pdfLink} className={styles.btn} />
    </div>
  );
};

export default Appbar;
