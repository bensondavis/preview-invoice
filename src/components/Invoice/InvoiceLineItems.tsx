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
import { useTranslations } from "next-intl";
import styles from "../../styles/Invoice/InvoiceLineItem.module.css";

interface InvoiceLineItemsProps {
  lineItems: LineItems[];
  net: number;
  tax: number;
  gross: number;
}

const InvoiceLineItems = ({
  lineItems,
  net,
  tax,
  gross,
}: InvoiceLineItemsProps) => {
  const i18n = useTranslations("Invoice");

  return (
    <Box sx={{ width: "100%", py: 3 }}>
      <TableContainer component={Paper} elevation={0} >
        <Table
          sx={{ width: { md: "95%", xs: "100%", sm: "95%" }, mx: "auto" }}
        >
          <TableHead>
            <TableRow>
              <TableCell className={styles["align-left"]}>
                <b>{i18n("Description")}</b>
              </TableCell>
              <TableCell>
                <b>{i18n("Quantity")}</b>
              </TableCell>
              <TableCell>
                <b>{i18n("Unit Price")}</b>
              </TableCell>
              <TableCell>
                <b>{i18n("TAX")}</b>
              </TableCell>
              <TableCell>
                <b>{i18n("Amount")} EUR</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lineItems.map((data, index) => (
              <TableRow key={index}>
                <TableCell className={styles["align-left"]}>
                  {data.name}
                </TableCell>
                <TableCell>{data.quantity}</TableCell>
                <TableCell>{data.unitPrice}</TableCell>
                <TableCell >{data.tax}%</TableCell>
                <TableCell>
                  <b>{ccyFormat(data.amount)}</b>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} colSpan={3} />
              <TableCell className={styles["align-left"]} colSpan={1}>
                {i18n("Subtotal")}
              </TableCell>
              <TableCell>{ccyFormat(net)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={styles["align-left"]} colSpan={1}>
                {i18n("Total")} {i18n("TAX")}{" "}
              </TableCell>
              <TableCell>{ccyFormat(tax)}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell className={styles["summary-label"]} colSpan={1}>
                <b>{i18n("Amount Due")} EUR</b>
              </TableCell>
              <TableCell className={styles.summary}>
                <b>{ccyFormat(gross)}</b>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InvoiceLineItems;
