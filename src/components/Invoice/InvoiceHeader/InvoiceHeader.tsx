import React from "react";
import Logos from "../../../config/logoConfig";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./InvoiceHeader.module.css";
import Link from "next/link";

const InvoiceHeader = () => {
  const i18n = useTranslations("Invoice");

  return (
    <div className={styles.box}>
      <div className={styles.stack}>
        <h1 className={styles.title}>{i18n("taxInvoice")}</h1>

        <Link href={Logos.fromCompanyLogo.link}>
          <Image
            src={Logos.fromCompanyLogo.img}
            alt="logo"
            className={styles.img}
          />
        </Link>
      </div>
    </div>
  );
};

export default InvoiceHeader;
