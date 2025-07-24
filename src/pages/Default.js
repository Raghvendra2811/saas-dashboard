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
          {page}
        </Typography>
      </Grid>
      <Grid container spacing={3.5}>
        <Grid container gap={3.5} size={{ xs: 12, lg: 6 }}>
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
              size={{ xs: 12, sm: 6 }}
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
              overflowY:"auto"
            }}
            size={{
              xs: widget.resWidth,
              md: widget.resWidth,
              lg: widget.width,
            }}
          >
            <Widget widget={widget} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DefaultDashboard;
