import styles from "./PayBtn.module.css";
import Link from "next/link";

interface PayBtnProps {
  link: string;
  className?: string;
}

const PayBtn = ({ link, className }: PayBtnProps) => {
  return (
    <Link href={link} className={styles.link}>
      <button className={styles.button + " " + className}>Pay Now</button>
    </Link>
  );
};

export default PayBtn;
