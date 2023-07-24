import React from "react";
import { useTranslations } from "next-intl";
import styles from "./InvoiceData.module.css";
import GridContainer from "@/components/GridContainer/GridContainer";

interface InvoiceDataProps {
  title: string;
  value: string;
  overDue?: number;
}

const InvoiceData = ({ title, value, overDue }: InvoiceDataProps) => {
  const i18n = useTranslations("Invoice");

  return (
    <GridContainer columnTemplate="50% 50%">
      <p>
        <b>{i18n(title)}</b>
      </p>

      <p style={{ color: overDue && overDue > 0 ? "#f44336" : "" }}>
        {value}
        {overDue && overDue > 0 ? ", " : ""}
        <br />
        {overDue && overDue > 0 ? (
          <span className={styles.overdue}>
            {i18n("daysOverdue", { overdueDays: overDue })}
          </span>
        ) : null}
      </p>
    </GridContainer>
  );
};

export default InvoiceData;
