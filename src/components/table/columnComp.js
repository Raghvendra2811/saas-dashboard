import { Box, Typography, Grid } from "@mui/material";
import { useColorMode } from "../../theme/themeContext";

const ColumnComponent = ({ row, column, columnIndex, checkedColor }) => {
  const { mode } = useColorMode();
  const value = row[column.key] || "";

  switch (column.type) {
    case "text":
      return (
        <Typography
          variant="h3"
          color="text"
          display="flex"
          alignItems="center"
        >
          {columnIndex === 0 && (
            <input
              className="action-button"
              type="checkbox"
              style={{
                accentColor: checkedColor,
                marginRight: "16px",
              }}
            />
          )}
          {value}
        </Typography>
      );

    case "date":
      return (
        <Grid container gap={1} alignItems="center">
          <Grid container>
            <img
              src={`assets/light/CalendarBlank.png`}
              width="16px"
              height="16px"
            />
          </Grid>
          <Typography variant="h3" color="text">
            {value}
          </Typography>
        </Grid>
      );

    case "status":
      return (
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid container alignItems="center" gap={1}>
            <Box
              sx={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor:
                  value === "Rejected" && mode === "dark"
                    ? row.dark_status_color
                    : row.status_color,
              }}
            />
            <Typography
              variant="h3"
              color={
                value === "Rejected" && mode === "dark"
                  ? row.dark_status_color
                  : row.status_color
              }
              display="flex"
              alignItems="center"
            >
              {value}
            </Typography>
          </Grid>

          <img
            className="action-button"
            src={`assets/${mode}/DotsThreeOutlineVertical.png`}
            width="16px"
            height="16px"
          />
        </Grid>
      );

    case "user":
      return (
        <Grid container gap={1} alignItems="center">
          <img
            src={`assets/avatars/${row.userIcon}`}
            width="16px"
            height="16px"
          />
          <Typography variant="h3" color="text">
            {value}
          </Typography>
        </Grid>
      );

    default:
      return (
        <Typography variant="h3" color="text">
          {value}
        </Typography>
      );
  }
};

export default ColumnComponent;
