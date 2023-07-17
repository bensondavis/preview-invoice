"use client";

import React from "react";
import styles from "./Appbar.module.css";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
import { ccyFormat } from "../../utils/Numerics";
import { useTranslations } from "next-intl";
// import Localization from "../Localization/Localization";
import PdfBtn from "../PdfBtn/PdfBtn";
// import PdfBtn from "../PdfBtn/PdfBtn";

interface AppbarProps {
  amount: number;
  due: number;
  pdfLink: string
}

const Appbar = ({ amount, due, pdfLink }: AppbarProps) => {
  const i18n = useTranslations("Invoice");

  return (
    <div className={styles.Appbar}>
      <div className={styles.summary}>
        <div className={styles["total-currency"]}>
          <h2 className={styles.total}>{ccyFormat(amount)}</h2>
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

      {/* <Localization /> */}
      <PdfBtn link={pdfLink} className={styles.btn} />
    </div>
  );
};

export default Appbar;
