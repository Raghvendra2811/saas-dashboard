import { Typography, Grid, useTheme } from "@mui/material";
import React from "react";

const SingleNotification = ({ item, group, index }) => {
  const isLast = index === group.data.length - 1;
  const theme = useTheme();
  const hoverStyle = {
    background: theme.palette.secondary.variant2,
    borderRadius: "8px",
  };
  return (
    <Grid p={0.5} container gap={1} sx={{ ":hover": hoverStyle }}>
      <Grid
        sx={{
          "::after": { background: theme.palette.disabled.main },
        }}
        className={`${group.type === "connecting" ? "activity-item" : ""}${
          isLast ? "last" : ""
        }`}
      >
        <img src={`assets/avatars/${item.icon}`} width="24px" height="24px" />
      </Grid>
      <Grid size="grow">
        <Typography variant="h2" color="text">
          {item.text}
        </Typography>
        {group.type !== "without_date" && (
          <Typography variant="h3" color="secondary">
            {item.date}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default SingleNotification;
