import { Box, Divider } from "@mui/material";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceBody from "./InvoiceBody";
import InvoiceLineItems from "./InvoiceLineItems";
import InvoiceFooter from "./InvoiceFooter";
import { InvoiceProps } from "../../interfaces/invoice";

const Invoice = ({ invoiceData }: { invoiceData: InvoiceProps }) => {
  return (
    <Box
      sx={{
        mt: "130px",
        width: { xs: "calc(100% - 2px)", sm: "90%", md: "80%" },
        mx: "auto",
        backgroundColor: "white",
        border: "1px solid #BFC8D1",
        mb: 4,
      }}
    >
      <InvoiceHeader />
      <Divider />
      <InvoiceBody
        toAddress={invoiceData.toAddress}
        fromAddress={invoiceData.fromAddress}
        invoiceNumber={invoiceData.invoiceNumber}
        reference={invoiceData.reference}
        issued={invoiceData.issued}
        due={invoiceData.due}
      />
      <Divider />
      <InvoiceLineItems
        lineItems={invoiceData.lineItems}
        net={invoiceData.net}
        tax={invoiceData.tax}
        gross={invoiceData.gross}
      />
      <Divider />
      <InvoiceFooter companyName={invoiceData.toAddress.name} />
    </Box>
  );
};

export default Invoice;
