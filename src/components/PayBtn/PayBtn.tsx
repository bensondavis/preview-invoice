import styles from "./PayBtn.module.css";
import Link from "next/link";

interface PayBtnProps {
  link: string;
}

const PayBtn = ({ link }: PayBtnProps) => {
  return (
    <Link href={link} className={styles.link}>
      <button className={styles.button}>Pay Now</button>
    </Link>
  );
};

export default PayBtn;
