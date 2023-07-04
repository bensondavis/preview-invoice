import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import InvoiceAddress from "./InvoiceAddress";
import InvoiceData from "./InvoiceData";

const InvoiceBody = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row", md: "row" }}
      sx={{ width: "100%", mb: 3, mt: 2 }}
      alignItems={"baseline"}
      justifyContent={"center"}
      spacing={1}
    >
      <Grid container spacing={3} sx={{width: "100%"}} >
        <Grid item xs={12}>
          <InvoiceAddress />
        </Grid>
        <Grid item xs={12}>
          <InvoiceData />
        </Grid>
        <Grid item xs={12}>
          <InvoiceData />
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{width: "100%"}} >
        <Grid item xs={12}>
          <InvoiceAddress />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default InvoiceBody;
