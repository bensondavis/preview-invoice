import React from "react";
import styles from "./Footer.module.css";
import Logos from "@/config/logoConfig";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link href={Logos.companyLogo.link}>
        <Image src={Logos.companyLogo.img} alt="logo" className={styles.img} />
      </Link>
    </div>
  );
};

export default Footer;
