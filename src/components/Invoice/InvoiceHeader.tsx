import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Logos from "../../config/logoConfig";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "../../styles/Invoice/InvoiceHeader.module.css";
import { Box } from "@mui/material";

const InvoiceHeader = () => {
  const i18n = useTranslations("Invoice");

  return (
    <Box className={styles.box}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        spacing={1}
        className={styles.stack}
      >
        <Typography className={styles.title}>{i18n("TAX INVOICE")}</Typography>

        <a
          href={Logos.fromCompanyLogo.link}
        >
          <Image src={Logos.fromCompanyLogo.img} alt="logo" />
        </a>
      </Stack>
    </Box>
  );
};

export default InvoiceHeader;
