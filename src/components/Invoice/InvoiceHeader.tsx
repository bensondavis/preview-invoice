import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Logos from "../../config/logoConfig";
import Image from 'next/image'
import {useTranslations} from 'next-intl';

const InvoiceHeader = () => {
  const i18n = useTranslations('Invoice');

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      spacing={1}
      sx={{ width: "100%", py: 4 }}
    >
      <Typography
        variant="h2"
        fontSize={"18px"}
        fontWeight={700}
        sx={{ml: 3}}
      >
        {i18n("TAX INVOICE")}
      </Typography>

      <a href={Logos.fromCompanyLogo.link} style={{ width: "auto", marginRight: 30 }}>
        <Image
          src={Logos.fromCompanyLogo.img}
          alt="logo"
        />
      </a>
    </Stack>
  );
};

export default InvoiceHeader;
