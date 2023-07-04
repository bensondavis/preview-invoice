import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { testInvoice } from "../../mock-data/testInvoice";

const InvoiceFooter = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#F4F7F7", py: 4 }}>
      <Typography sx={{ ml: 4 }} fontWeight={600} fontSize={"30px"}>
        {testInvoice.fromAddress.name}
      </Typography>
    </Box>
  );
};

export default InvoiceFooter;
