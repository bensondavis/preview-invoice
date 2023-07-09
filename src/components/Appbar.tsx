"use client";

import React from "react";
import styles from "../styles/Appbar.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { ccyFormat } from "../functions/Numerics";
import { useTranslations } from "next-intl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import LanguageIcon from "@mui/icons-material/Language";

interface AppbarProps {
  amount: number;
  due: number;
}

const Appbar = ({ amount, due }: AppbarProps) => {
  const t = useTranslations("Invoice");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: SelectChangeEvent) => {
    router.replace(`/${event.target.value}${pathname}`);
  };

  return (
    <Box component={Paper} elevation={2} className={styles.Appbar}>
      <Stack
        direction={"column"}
        alignItems={"flex-start"}
        className={styles.centerY}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <Typography variant="h5" fontSize={30} fontWeight={700}>
            {ccyFormat(amount)}
          </Typography>
          <Typography fontWeight={600} color={"gray"}>
            EUR
          </Typography>
        </Stack>
        {due && due > 0 ? (
          <Typography color={"red"} fontWeight={600} variant="caption">
            {due} {t("days")} {t("overdue")}
          </Typography>
        ) : null}
      </Stack>
      <Stack className={styles.select} direction={"row"}>
        <LanguageIcon />
        <FormControl variant="standard" size="small">
          <Select defaultValue={locale} onChange={handleChange}>
            <MenuItem value={"en"}>EN</MenuItem>
            <MenuItem value={"de"}>DE</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default Appbar;
