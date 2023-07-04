import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

interface AppbarProps {
  amount: number;
  due: number;
}

const Appbar = ({ amount, due }: AppbarProps) => {
  return (
    <Box
      component={Paper}
      elevation={2}
      sx={{
        height: "80px",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Stack direction={"column"} alignItems={"flex-start"} sx={{ml: 3, mt: 1}}>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <Typography variant="h5" fontSize={30} fontWeight={700}>
            {amount}
          </Typography>
          <Typography color={"gray"}>EUR</Typography>
        </Stack>
        <Typography color={"red"} fontWeight={600} variant="caption">
          {due} DAYS DUE
        </Typography>
      </Stack>
    </Box>
  );
};

export default Appbar;
