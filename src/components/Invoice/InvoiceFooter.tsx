import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface InvoiceFooterProps {
  companyName: string;
}

const InvoiceFooter = ({ companyName }: InvoiceFooterProps) => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#F4F7F7", py: 4 }}>
      <Typography sx={{ ml: 4 }} fontWeight={600} fontSize={"30px"}>
        {companyName}
      </Typography>
    </Box>
  );
};

export default InvoiceFooter;
