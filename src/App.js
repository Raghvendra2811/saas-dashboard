import { Drawer, Grid, useMediaQuery, useTheme } from "@mui/material";
import "./App.css";
import Leftbar from "./section/Leftbar";
import Navbar from "./section/Navbar";
import Dashboard from "./section/Dashboard";
import Rightbar from "./section/Rightbar";
import { useEffect, useState } from "react";

function App() {
  const [showLeftBar, setShowLeftBar] = useState(true);
  const [showRightBar, setShowRightBar] = useState(true);
  const handleToggleLeftBar = () => setShowLeftBar((prev) => !prev);
  const handleToggleRightBar = () => setShowRightBar((prev) => !prev);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Below 900px
  const isTablet = useMediaQuery(theme.breakpoints.down("lg")); // Below 1200px

  useEffect(() => {
    handleToggleLeftBar();
  }, [isMobile]);
  useEffect(() => {
    handleToggleRightBar();
  }, [isTablet]);

  return (
    <Grid container sx={{ width: "100vw", height: "100vh" }}>
      {showLeftBar &&
        (isMobile ? (
          <Drawer open={showLeftBar} onClose={handleToggleLeftBar}>
            <Grid sx={{ maxWidth: "90%", width: "212px" }}>
              <Leftbar />
            </Grid>
          </Drawer>
        ) : (
          <Grid
            sx={{
              transition: "all 0.3s ease-in-out",
              overflow: "hidden",
              transform: showLeftBar ? "translateX(0)" : "translateX(-100%)",
              maxWidth: showLeftBar ? "212px" : "0px",
            }}
          >
            <Leftbar />
          </Grid>
        ))}

      <Grid size="grow">
        <Navbar
          handleToggleRightBar={handleToggleRightBar}
          handleToggleLeftBar={handleToggleLeftBar}
        />
        <Dashboard />
      </Grid>

      {showRightBar &&
        (isTablet ? (
          <Drawer
            anchor="right"
            open={showRightBar}
            onClose={handleToggleRightBar}
          >
            <Grid sx={{ maxWidth: "90%", width: "280px" }}>
              <Rightbar />
            </Grid>
          </Drawer>
        ) : (
          <Grid
            sx={{
              transition: "all 0.3s ease-in-out",
              overflow: "hidden",
              transform: showRightBar ? "translateX(0)" : "translateX(100%)",
              width: showRightBar ? "280px" : "0px",
            }}
          >
            <Rightbar />
          </Grid>
        ))}
    </Grid>
  );
}

export default App;
