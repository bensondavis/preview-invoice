import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { ccyFormat } from "../functions/Numerics";

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
      <Stack
        direction={"column"}
        alignItems={"flex-start"}
        sx={{
          ml: 2,
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <Typography variant="h5" fontSize={30} fontWeight={700}>
            {ccyFormat(amount)}
          </Typography>
          <Typography fontWeight={600} color={"gray"}>EUR</Typography>
        </Stack>
        {due && due > 0 ? (
          <Typography color={"red"} fontWeight={600} variant="caption">
            {due} DAYS OVERDUE
          </Typography>
        ) : null}
      </Stack>
    </Box>
  );
};

export default Appbar;
