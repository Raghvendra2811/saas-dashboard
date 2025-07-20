import { Grid, Typography } from "@mui/material";
import React from "react";
import { useColorMode } from "../theme/themeContext";

const Stats = ({ statsData }) => {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <>
      <Grid>
        <Typography variant="h1" color="text">
          {statsData.cardName}
        </Typography>
      </Grid>
      <Grid container alignItems="center" justifyContent="space-between">
        <Typography
          variant="h1"
          color="text"
          sx={{ fontSize: "24px", lineHeight: "36px" }}
        >
          {statsData.price}
        </Typography>
        <Typography>
          {statsData.profit}
          <img
            src={`assets/${mode}/${statsData.icon}`}
            width="16px"
            height="16px"
          />
        </Typography>
      </Grid>
    </>
  );
};

export default Stats;
