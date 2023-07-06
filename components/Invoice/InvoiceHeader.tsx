import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Logos from "../../config/logoConfig";
import Image from 'next/image'

const InvoiceHeader = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      spacing={1}
      sx={{ width: "100%", py: 4 }}
    >
      <Typography
        variant="h5"
        fontSize={{ xs: "18px", sm: "20px", md: "24px" }}
        fontWeight={700}
        sx={{ml: 3}}
      >
        TAX INVOICE
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
