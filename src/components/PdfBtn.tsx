import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import styles from "../styles/PdfBtn.module.css";

interface PdfBtnProps {
  link: string;
}

const PdfBtn = ({ link }: PdfBtnProps) => {
  return (
    <Button
      href={link}
      startIcon={<DownloadIcon />}
      variant="outlined"
      color="primary"
      size="small"
      className={styles.btn}
    >
      PDF
    </Button>
  );
};

export default PdfBtn;
