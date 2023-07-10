import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import styles from "../styles/PdfBtn.module.css";
import Link from "next/link";

interface PdfBtnProps {
  link: string;
}

const PdfBtn = ({ link }: PdfBtnProps) => {
  return (
    <Link className={styles.btn} href={link}>
      <Button
        startIcon={<DownloadIcon />}
        variant="outlined"
        color="primary"
        size="small"
      >
        PDF
      </Button>
    </Link>
  );
};

export default PdfBtn;
