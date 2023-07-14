"use client";

import React from "react";
import styles from "./Appbar.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { ccyFormat } from "../../utils/Numerics";
import { useTranslations } from "next-intl";
import Localization from "../Localization/Localization";
import PdfBtn from "../PdfBtn/PdfBtn";

interface AppbarProps {
  amount: number;
  due: number;
  pdfLink: string;
}

const Appbar = ({ amount, due, pdfLink }: AppbarProps) => {
  const i18n = useTranslations("Invoice");

  return (
    <Box component={Paper} elevation={2} className={styles.Appbar}>
      <Stack
        direction={"column"}
        alignItems={"flex-start"}
        className={styles.centerY}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <Typography className={styles.total}>{ccyFormat(amount)}</Typography>
          <Typography className={styles.currency}>EUR</Typography>
        </Stack>

        {due && due > 0 ? (
          <Box className={styles["due-box"]}>
            <Typography color={"error"} className={styles.due}>
              {due} {i18n("days")} {i18n("overdue")}
            </Typography>
          </Box>
        ) : null}
      </Stack>
      <PdfBtn link={pdfLink} />
      <Localization />
    </Box>
  );
};

export default Appbar;
