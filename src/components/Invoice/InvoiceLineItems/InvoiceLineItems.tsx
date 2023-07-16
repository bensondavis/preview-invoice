// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import { ccyFormat } from "../../../utils/Numerics";
import { LineItems } from "../../../interfaces/lineItems";
import { useTranslations } from "next-intl";
import styles from "./InvoiceLineItem.module.css";
import TableContainer from "@/components/Table/TableContainer/TableContainer";
import TableCell from "@/components/Table/TableCell/TableCell";
import TableRow from "@/components/Table/TableRow/TableRow";

interface InvoiceLineItemsProps {
  lineItems: LineItems[];
}

const InvoiceLineItems = ({ lineItems }: InvoiceLineItemsProps) => {
  const i18n = useTranslations("Invoice");

  return (
    <div className={styles.container}>
      <TableContainer>
        <table className={styles.table}>
          <thead>
            <TableRow>
              <TableCell className={styles.desc}>
                <p>
                  <b>{i18n("description")}</b>
                </p>
              </TableCell>
              <TableCell numeric className={styles.quantity}>
                <p>
                  <b>{i18n("quantity")}</b>
                </p>
              </TableCell>
              <TableCell numeric className={styles.price}>
                <p>
                  <b>{i18n("unitPrice")}</b>
                </p>
              </TableCell>
              <TableCell numeric className={styles.tax}>
                <p>
                  <b>{i18n("tax")}</b>
                </p>
              </TableCell>
              <TableCell numeric className={styles.amount}>
                <p>
                  <b>{i18n("amount")} EUR</b>
                </p>
              </TableCell>
            </TableRow>
          </thead>
          <tbody>
            {lineItems.map((data, index) => (
              <TableRow key={index}>
                <TableCell className={styles.desc}>
                  <p>{data.name}</p>
                </TableCell>
                <TableCell numeric className={styles.quantity}>
                  <p>{data.quantity}</p>
                </TableCell>
                <TableCell numeric className={styles.price}>
                  <p>{ccyFormat(data.unitPrice)}</p>
                </TableCell>
                <TableCell numeric className={styles.tax}>
                  <p>{data.tax}%</p>
                </TableCell>
                <TableCell numeric className={styles.amount}>
                  <p>
                    <b>{ccyFormat(data.amount)}</b>
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </div>
  );
};

export default InvoiceLineItems;
