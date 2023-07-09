import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { ccyFormat } from "../../utils/Numerics";
import { LineItems } from "../../interfaces/lineItems";
import {useTranslations} from 'next-intl';

interface InvoiceLineItemsProps {
  lineItems: LineItems[],
  net: number,
  tax: number,
  gross: number
}

const InvoiceLineItems = ({lineItems, net, tax, gross}:InvoiceLineItemsProps) => {
  const i18n = useTranslations('Invoice');

  return (
    <Box sx={{width: "100%", py: 3}}>
      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ maxWidth: {md: "calc(100% - 100px)", sm: 700}, mx: "auto" }}>
          <TableHead>
            <TableRow>
              <TableCell><b>{i18n("Description")}</b></TableCell>
              <TableCell align="right"><b>{i18n("Quantity")}</b></TableCell>
              <TableCell align="right"><b>{i18n("Unit Price")}</b></TableCell>
              <TableCell align="right"><b>{i18n("TAX")}</b></TableCell>
              <TableCell align="right"><b>{i18n("Amount")} EUR</b></TableCell>
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
              <TableCell colSpan={2}>{i18n("Subtotal")}</TableCell>
              <TableCell align="right">{ccyFormat(net)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell  colSpan={2}>{i18n("Total")} {i18n("TAX")} </TableCell>
              <TableCell align="right">{ccyFormat(tax)}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell  colSpan={2}><b>{i18n("Amount Due")} EUR</b></TableCell>
              <TableCell align="right"><b>{ccyFormat(gross)}</b></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InvoiceLineItems;
