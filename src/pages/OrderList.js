import { Box, Typography, Button, Grid, useTheme } from "@mui/material";
import { useColorMode } from "../theme/themeContext";
import "../App.css";
import TableComp from "../components/table/index";
import { useSearchParams } from "react-router-dom";

function OrderList() {
  const { mode } = useColorMode();
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "Default";

  const actionButtons = [
    { icon: "Add.png" },
    { icon: "FunnelSimple.png" },
    { icon: "ArrowsDownUp.png" },
  ];
  const hoverStyle = {
    background: theme.palette.secondary.variant2,
    borderRadius: "8px",
  };
  return (
    <>
      <Grid px={1} py={0.5} mb={2}>
        <Typography variant="h1" color="text">
          {page}
        </Typography>
      </Grid>

      <Box
        p={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor={theme.palette.primary.variant1}
        borderRadius={1}
      >
        <Grid container gap={1} alignItems="center">
          {actionButtons.map((currItem, index) => (
            <Grid
              key={index}
              container
              p={0.5}
              sx={{ ":hover": hoverStyle }}
              className="cursor-pointer"
            >
              <img
                src={`assets/${mode}/${currItem.icon}`}
                height="20px"
                width="20px"
                alt="Action Icon"
              />
            </Grid>
          ))}
        </Grid>

        <Grid
          sx={{
            background: mode === "dark" ? "#1C1C1C66" : "#FFFFFF66",
            borderRadius: "8px",
            border: "1px solid #1C1C1C1A",
          }}
          px={1}
          py={0.5}
          container
          alignItems="center"
        >
          <Grid container>
            <img src={`assets/${mode}/Search.png`} width="16px" height="16px" />
          </Grid>
          <input
            className="input-element"
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
            }}
            placeholder="Search"
          />
        </Grid>
      </Box>

      <TableComp />

      <Box
        sx={{
          mt: 2,
          display: "flex",
          alignItems: "center",
          gap: 1,
          justifyContent: "flex-end",
        }}
      >
        <Button
          sx={{
            minWidth: "28px",
            height: "28px",
            p: 0.5,
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Box
            component="img"
            src={`assets/${mode}/ArrowLineLeft.png`}
            alt="Previous"
            sx={{
              width: "20px",
              height: "20px",
            }}
          />
        </Button>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Grid
              sx={{ ":hover": hoverStyle }}
              p={0.5}
              key={index}
              className="cursor-pointer"
              container
            >
              <Typography
                variant="h2"
                width="20px"
                textAlign="center"
                color="text"
              >
                {index + 1}
              </Typography>
            </Grid>
          ))}
        </Box>

        <Button
          sx={{
            minWidth: "28px",
            height: "28px",
            p: 0.5,
            transform: "rotate(180deg)",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Box
            component="img"
            src={`assets/${mode}/ArrowLineLeft.png`}
            alt="Next"
            sx={{
              width: "20px",
              height: "20px",
            }}
          />
        </Button>
      </Box>
    </>
  );
}

export default OrderList;
