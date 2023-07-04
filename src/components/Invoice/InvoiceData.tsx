import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const InvoiceData = () => {
  return (
    <Grid container spacing={1} sx={{ textAlign: "left" }}>
      <Grid item xs={6}>
        <Typography sx={{ml: 4}}>title</Typography>
      </Grid>
      <Grid item xs={6}>
        value
      </Grid>
    </Grid>
  );
};

export default InvoiceData;
