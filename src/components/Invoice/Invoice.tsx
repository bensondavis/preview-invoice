import { Box, Divider } from "@mui/material";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceBody from "./InvoiceBody";
import InvoiceLineItems from "./InvoiceLineItems";
import InvoiceFooter from "./InvoiceFooter";

const Invoice = () => {
  return (
    <Box
      sx={{
        mt: "100px",
        width: { xs: "calc(100% - 2px)", sm: "90%", md: "80%" },
        mx: "auto",
        backgroundColor: "white",
        border: "1px solid #BFC8D1",
        mb: 4
      }}
    >
      <InvoiceHeader />
      <Divider/>
      <InvoiceBody />
      <Divider/>
      <InvoiceLineItems/>
      <Divider/>
      <InvoiceFooter/>
    </Box>
  );
};

export default Invoice;
