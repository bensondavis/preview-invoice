import styles from "./PdfBtn.module.css";
import pdfDwnldSvg from "@/Assets/download-pdf-icon.svg";
import Link from "next/link";
import Image from "next/image";

interface PdfBtnProps {
  link: string;
  className?: string
}

const PdfBtn = ({ link, className }: PdfBtnProps) => {
  return (
    <Link href={link}>
      <Image src={pdfDwnldSvg} alt="pdf download" className={styles.img + " " + className} />
    </Link>
  );
};

export default PdfBtn;
