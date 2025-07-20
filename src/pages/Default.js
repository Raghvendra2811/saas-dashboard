import { useSearchParams } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Stats from "../widgets/Stats";
import { dashboardRestConfig, dashboardStatsConfig } from "../data";
import Widget from "../widgets";

const DefaultDashboard = () => {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  return (
    <>
      <Grid px={1} py={0.5} mb={2}>
        <Typography variant="h1" color="text">
          eCommerce
        </Typography>
      </Grid>
      <Grid container spacing={3.5}>
        <Grid container gap={3.5} size={6}>
          {dashboardStatsConfig.map((statsData) => (
            <Grid
              borderRadius={2}
              p={3}
              sx={{
                background: ["Customers", "Growth"].includes(statsData.cardName)
                  ? statsData.bgColor
                  : theme.palette.primary.variant1,
                height: "112px",
              }}
              size={6}
            >
              <Stats statsData={statsData} />
            </Grid>
          ))}
        </Grid>
        {dashboardRestConfig.map((widget) => (
          <Grid
            borderRadius={2}
            p={3}
            sx={{
              background: theme.palette.primary.variant1,
              height: widget.height,
            }}
            size={widget.width}
          >
            <Widget widget={widget} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DefaultDashboard;
