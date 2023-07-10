import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import LanguageIcon from "@mui/icons-material/Language";
import styles from "../styles/Localization.module.css";


const Localization = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: SelectChangeEvent) => {
    router.replace(`/${event.target.value}${pathname}`);
  };

  return (
    <Stack className={styles.select} direction={"row"}>
        <LanguageIcon />
        <FormControl variant="standard" size="small">
          <Select defaultValue={locale} onChange={handleChange}>
            <MenuItem value={"en"}>EN</MenuItem>
            <MenuItem value={"de"}>DE</MenuItem>
          </Select>
        </FormControl>
      </Stack>
  )
}

export default Localization;