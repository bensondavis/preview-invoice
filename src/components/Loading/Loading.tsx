import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <Box className={styles.container}>
      <CircularProgress />
    </Box>
  );
}