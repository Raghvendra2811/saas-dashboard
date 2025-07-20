import { Grid, Typography } from "@mui/material";
import React from "react";
import { useColorMode } from "../theme/themeContext";

const Stats = ({ statsData }) => {
  const { mode, toggleColorMode } = useColorMode();
  const typoColor = ["Customers", "Growth"].includes(statsData.cardName)
    ? "#1C1C1C"
    : "text";
  return (
    <>
      <Grid>
        <Typography variant="h1" color={typoColor}>
          {statsData.cardName}
        </Typography>
      </Grid>
      <Grid container alignItems="center" justifyContent="space-between">
        <Typography
          variant="h1"
          color={typoColor}
          sx={{ fontSize: "24px", lineHeight: "36px" }}
        >
          {statsData.price}
        </Typography>
        <Typography variant="h1" color={typoColor}>
          {statsData.profit}
          <img
            src={`assets/light/${statsData.icon}`}
            width="16px"
            height="16px"
          />
        </Typography>
      </Grid>
    </>
  );
};

export default Stats;
