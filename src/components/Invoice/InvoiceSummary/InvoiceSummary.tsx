import TableCell from "@/components/Table/TableCell/TableCell";
import TableContainer from "@/components/Table/TableContainer/TableContainer";
import TableRow from "@/components/Table/TableRow/TableRow";
import { ccyFormat } from "@/utils/Numerics";
import { useTranslations } from "next-intl";
import styles from "./InvoiceSummary.module.css";

interface InvoiceSummaryProps {
  net: number;
  tax: number;
  gross: number;
}

const InvoiceSummary = ({ net, tax, gross }: InvoiceSummaryProps) => {
  const i18n = useTranslations("Invoice");
  return (
    <div className={styles.container}>
      <TableContainer>
        <table className={styles.table}>
          <tbody>
            <TableRow>
              <TableCell colSpan={1}>
                <p>{i18n("subtotal")}</p>
              </TableCell>
              <TableCell numeric className={styles["ml-auto"]}>
                <p>{ccyFormat(net)}</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={1}>
                <p>
                  {i18n("total")} {i18n("tax")}{" "}
                </p>
              </TableCell>
              <TableCell numeric className={styles["ml-auto"]}>
                <p>{ccyFormat(tax)}</p>
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell colSpan={1}  className={styles["summary-label"]}>
                <p>
                  <b>{i18n("amountDue")} EUR</b>
                </p>
              </TableCell>
              <TableCell numeric className={styles.summary}>
                <p>
                  <b>{ccyFormat(gross)}</b>
                </p>
              </TableCell>
            </TableRow>
          </tbody>
        </table>
      </TableContainer>
    </div>
  );
};

export default InvoiceSummary;
