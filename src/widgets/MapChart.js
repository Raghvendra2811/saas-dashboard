import { Box, Grid, Tooltip, Typography, useTheme } from "@mui/material";
import React from "react";
import { useColorMode } from "../theme/themeContext";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const revenueData = [
  {
    city: "New York",
    amount: 72,
    coordinates: [-74.006, 40.7128],
  },
  {
    city: "San Francisco",
    amount: 39,
    coordinates: [-122.4194, 37.7749],
  },
  {
    city: "Sydney",
    amount: 25,
    coordinates: [151.2093, -33.8688],
  },
  {
    city: "Singapore",
    amount: 61,
    coordinates: [103.8198, 1.3521],
  },
];

const MapComp = ({ locations, theme }) => {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: {
                  fill: "#A8C5DA",
                  stroke: theme.palette.background.default,
                  strokeWidth: 0.5,
                  outline: "none",
                },
              }}
            />
          ))
        }
      </Geographies>
      {locations.map(({ city, coordinates }) => (
        <Tooltip title={city}>
          <Marker coordinates={coordinates}>
            <circle
              r={15}
              style={{
                fill: "#1C1C1C",
                stroke: "#ffffff",
                strokeWidth: 3,
                cursor: "pointer",
              }}
            />
          </Marker>
        </Tooltip>
      ))}
    </ComposableMap>
  );
};

const MapChart = ({ widget }) => {
  const { mode } = useColorMode();
  const theme = useTheme();
  return (
    <>
      <Grid mb={2}>
        <Typography variant="h1" color="text">
          {widget.title}
        </Typography>
      </Grid>
      <Grid
        sx={{ width: "100%", height: "calc(100% - 40px)", overflowY: "auto" }}
      >
        <MapComp locations={revenueData} theme={theme} />

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
