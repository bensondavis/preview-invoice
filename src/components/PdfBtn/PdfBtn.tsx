import styles from "./PdfBtn.module.css";
import pdfDwnldSvg from "@/Assets/download-pdf-icon.svg";
import Link from "next/link";
import Image from "next/image";

interface PdfBtnProps {
  link: string;
}

const PdfBtn = ({ link }: PdfBtnProps) => {
  return (
    <Link href={link}>
      <Image src={pdfDwnldSvg} alt="pdf download" className={styles.img} />
    </Link>
  );
};

export default PdfBtn;
