import { Box, Typography, Button, Grid, useTheme } from "@mui/material";
import { useColorMode } from "../theme/themeContext";
import "../App.css";
import TableComp from "../components/table/index";

function OrderList() {
  const { mode } = useColorMode();
  const theme = useTheme();

  const actionButtons = [
    { icon: "Add.png" },
    { icon: "FunnelSimple.png" },
    { icon: "ArrowsDownUp.png" },
  ];

  const tableHeaders = [
    { th: "Order ID" },
    { th: "User" },
    { th: "Project" },
    { th: "Address" },
    { th: "Date" },
    { th: "Status" },
  ];

  return (
    <>
      <Grid px={1} py={0.5} mb={2}>
        <Typography variant="h1" color="text">
          eCommerce
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
        <Grid container gap={0.5} alignItems="center">
          {actionButtons.map((currItem, index) => (
            <Grid key={index} container>
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
            <Button
              key={index}
              sx={{
                minWidth: "28px",
                height: "28px",
                px: 1,
                py: 0.5,
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:
                  index === 0
                    ? mode === "dark"
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(28, 28, 28, 0.05)"
                    : "transparent",
                color: "inherit",
                fontSize: "14px",
                "&:hover": {
                  backgroundColor:
                    index === 0
                      ? mode === "dark"
                        ? "rgba(255, 255, 255, 0.08)"
                        : "rgba(28, 28, 28, 0.08)"
                      : "rgba(128, 128, 128, 0.1)",
                },
              }}
            >
              {index + 1}
            </Button>
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
