import { Box, Typography, Grid } from "@mui/material";
import { useColorMode } from "../../theme/themeContext";

const ColumnComponent = ({ row, column }) => {
  const { mode } = useColorMode;
  const value = row[column.key] || "";

  switch (column.type) {
    case "text":
      return (
        <Typography variant="h3" color="text">
          {value}
        </Typography>
      );

    case "date":
      return (
        <Grid container gap={1} alignItems="center">
          <Grid>
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
        <Grid container gap={1} alignItems="center">
          <Box
            sx={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: row.status_color,
            }}
          />
          <Typography variant="h3" color={row.status_color}>
            {value}
          </Typography>
        </Grid>
      );

    case "user":
      return (
        <Grid container gap={1} alignItems="center">
          <img src={`assets/avatars/${row.userIcon}`} width="16px" height="16px" />
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
