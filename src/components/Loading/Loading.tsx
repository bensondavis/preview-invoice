// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.container}>
      <span className={styles.MuiProgressBar}>
        <svg viewBox="22 22 44 44">
          <circle
            className={styles.circle}
            cx={"44"}
            cy={"44"}
            r={"20.2"}
            fill="none"
            strokeWidth={"3.6"}
          ></circle>
        </svg>
      </span>
    </div>
  );
}
