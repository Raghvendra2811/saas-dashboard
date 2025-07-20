import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useColorMode } from "../theme/themeContext";

const revenueData = [
  {
    city: "New York",
    amount: 72,
  },
  {
    city: "San Francisco",
    amount: 39,
  },
  {
    city: "Sydney",
    amount: 25,
  },
  {
    city: "Singapore",
    amount: 61,
  },
];

const MapChart = ({widget}) => {
  const { mode } = useColorMode();
  return (
    <>
      <Grid mb={2}>
        <Typography variant="h1" color="text">{widget.title}</Typography>
      </Grid>
      <Grid sx={{ width: "100%", height: "calc(100% - 40px)",overflowY:"auto" }}>
        <Box sx={{ mb: 2 }}>
          <img
            src={`assets/${mode}/World Map.png`}
            width="100%"
          />
        </Box>

        <Box>
          {revenueData.map((currItem, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  mb: 1,
                }}
              >
                <Typography component="span" sx={{ fontSize: "12px" }}>
                  {currItem.city}
                </Typography>
                <Typography component="span" sx={{ fontSize: "12px" }}>
                  {currItem.amount}K
                </Typography>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  height: "2px",
                  width: "100%",
                  backgroundColor: "rgba(168, 197, 216, 0.4)",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: `${currItem.amount}%`,
                    backgroundColor: "#a8c5d8",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Grid>
    </>
  );
};

export default MapChart;