import { Grid, Typography } from "@mui/material";
import { useState } from "react";

const Stats = ({ statsData }) => {
  const [reversed, setReversed] = useState(false);
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
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{
          display: "flex",
          // flexDirection: reversed ? "row-reverse" : "row",
          transition: "all 0.6s ease-in-out",
        }}
        onMouseEnter={() => setReversed(true)}
        onMouseLeave={() => setReversed(false)}
      >
        {reversed && (
          <Typography
            variant="h1"
            color={typoColor}
            sx={{ fontSize: "24px", lineHeight: "36px" }}
          >
            {statsData.price}
          </Typography>
        )}
        <Typography variant="h1" color={typoColor}>
          {statsData.profit}
          <img
            src={`assets/light/${statsData.icon}`}
            width="16px"
            height="16px"
          />
        </Typography>
        {!reversed && (
          <Typography
            variant="h1"
            color={typoColor}
            sx={{ fontSize: "24px", lineHeight: "36px" }}
          >
            {statsData.price}
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default Stats;
