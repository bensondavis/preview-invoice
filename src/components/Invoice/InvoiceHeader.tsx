import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import logos from "../../config/logoConfig";

const InvoiceHeader = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-around"}
      alignItems={"center"}
      spacing={1}
      sx={{width: "100%", py: 4}}
    >
      <Typography variant="h5" fontSize={{xs: "18px", sm: "20px", md: "24px"}} fontWeight={700}>
        TAX INVOICE
      </Typography>
      
      <Box component={"img"} src={logos.fromLogo} alt="logo" width={"60%"} maxWidth={400} />
    </Stack>
  );
};

export default InvoiceHeader;
