import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Logos from "../../config/logoConfig";

const InvoiceHeader = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-around"}
      alignItems={"center"}
      spacing={1}
      sx={{ width: "100%", py: 4 }}
    >
      <Typography
        variant="h5"
        fontSize={{ xs: "18px", sm: "20px", md: "24px" }}
        fontWeight={700}
      >
        TAX INVOICE
      </Typography>

      <a href={Logos.fromCompanyLogo.link} style={{ width: "auto" }}>
        <Box
          component={"img"}
          src={Logos.fromCompanyLogo.img}
          alt="logo"
          width={"100%"}
          maxWidth={350}
        />
      </a>
    </Stack>
  );
};

export default InvoiceHeader;
