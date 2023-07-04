import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const InvoiceAddress = () => {
  return(
    <Grid container  sx={{textAlign: "left"}}>
      <Grid item xs={6}>
        <Typography sx={{ml: 4}}>title</Typography>
      </Grid>
      <Grid item xs={6}>
        <Grid item xs={12}>
          <Typography>name</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>place</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>state</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>zip code</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>country</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default InvoiceAddress;