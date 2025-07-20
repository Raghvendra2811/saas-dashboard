import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { rightBarConfig } from "../data";
import SingleNotification from "../components/singleNotification";

const Rightbar = () => {
  const theme = useTheme();
  return (
    <Grid
      p={2.5}
      container
      gap={3}
      sx={{ borderLeft: `1px solid ${theme.palette.disabled.main}` }}
    >
      {rightBarConfig.map((group) => (
        <Grid container gap={1} key={group.title} flexDirection="column">
          <Grid px={0.5} py={1}>
            <Typography variant="h1" color="text">
              {group.title}
            </Typography>
          </Grid>
          {group?.data?.map((item, index) => (
            <SingleNotification
              key={item.text}
              item={item}
              group={group}
              index={index}
            />
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default Rightbar;
