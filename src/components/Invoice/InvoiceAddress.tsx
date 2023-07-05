import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Address } from '../../interfaces/address';

interface InvoiceAddressProps {
  title: string,
  address: Address
}

const InvoiceAddress = ({title, address}:InvoiceAddressProps) => {
  return(
    <Grid container  sx={{textAlign: "left"}}>
      <Grid item xs={6}>
        <Typography sx={{ml: 4}}><b>{title}</b></Typography>
      </Grid>
      <Grid item xs={6}>
        <Grid item xs={12}>
          <Typography>{address.name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>{address.place}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>{address.state}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>{address.zipCode}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>{address.country}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default InvoiceAddress;