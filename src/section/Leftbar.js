import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "../App.css";
import { sideBarConfig } from "../data";
import NavItemComp from "../components/navItemComp";

const Sidebar = () => {
  const theme = useTheme();

  return (
    <Grid
      px={2}
      py={2.5}
      sx={{ borderRight: `1px solid ${theme.palette.disabled.main}` }}
    >
      <Grid container gap={1} p={0.5} alignItems="center">
        <img
          src="assets/light/ByeWind.png"
          className="logo"
          alt="ByeWind Logo"
        />
        <Typography variant="h2">ByeWind</Typography>
      </Grid>

      <Grid mt={2} container gap={0.5}>
        <Grid container px={1} py={0.5} gap={3}>
          <Typography variant="h2" color="secondary">
            Favorites
          </Typography>
          <Typography variant="h2" color="disabled">
            Recently
          </Typography>
        </Grid>
        <Grid px={1} py={0.5} container alignItems={"center"}>
          <span
            style={{ backgroundColor: theme.palette.secondary.main }}
            className="nav-dot"
          ></span>
          <Typography variant="h2" alignItems={"center"}>
            Overview
          </Typography>
        </Grid>
        <Grid px={1} py={0.5} container alignItems={"center"}>
          <span
            style={{ backgroundColor: theme.palette.secondary.main }}
            className="nav-dot"
          ></span>
          <Typography variant="h2" alignItems={"center"}>
            Projects
          </Typography>
        </Grid>
      </Grid>
      {sideBarConfig.map((sidebarSection) => (
        <Grid key={sidebarSection.title} mt={3.5} gap={0.5} container>
          <Grid px={1.5} py={0.5}>
            <Typography variant="h2" color="secondary">
              {sidebarSection.title}
            </Typography>
          </Grid>
          <Grid width="100%" container gap={0.5} flexDirection="column">
            {sidebarSection.navItems.map((navItem) => (
              <NavItemComp navItem={navItem} key={navItem.id} />
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Sidebar;
