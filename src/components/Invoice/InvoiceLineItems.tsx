import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { ccyFormat } from "../../functions/Numerics";
import { LineItems } from "../../interfaces/lineItems";

interface InvoiceLineItemsProps {
  lineItems: LineItems[],
  net: number,
  tax: number,
  gross: number
}

const InvoiceLineItems = ({lineItems, net, tax, gross}:InvoiceLineItemsProps) => {
  return (
    <Box sx={{width: "100%", py: 3}}>
      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ maxWidth: 700, mx: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell><b>Description</b></TableCell>
              <TableCell align="right"><b>Quantity</b></TableCell>
              <TableCell align="right"><b>Unit Price</b></TableCell>
              <TableCell align="right"><b>TAX</b></TableCell>
              <TableCell align="right"><b>Amount EUR</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lineItems.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.name}</TableCell>
                <TableCell align="right">{data.quantity}</TableCell>
                <TableCell align="right">{data.unitPrice}</TableCell>
                <TableCell align="right">{data.tax}%</TableCell>
                <TableCell align="right"><b>{ccyFormat(data.amount)}</b></TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} colSpan={2} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{ccyFormat(net)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell  colSpan={2}>Total TAX </TableCell>
              <TableCell align="right">{ccyFormat(tax)}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell  colSpan={2}><b>Amount Due EUR</b></TableCell>
              <TableCell align="right"><b>{ccyFormat(gross)}</b></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InvoiceLineItems;
