import { Grid } from "@mui/material";
import "./App.css";
import Leftbar from "./section/Leftbar";
import Navbar from "./section/Navbar";
import Dashboard from "./section/Dashboard";
import Rightbar from "./section/Rightbar";
import { useState } from "react";

function App() {
  const [showLeftBar, setShowLeftBar] = useState(true);
  const [showRightBar, setShowRightBar] = useState(true);
  const handleToggleLeftBar = () => setShowLeftBar((prev) => !prev);
  const handleToggleRightBar = () => setShowRightBar((prev) => !prev);

  return (
    <Grid container sx={{ width: "100vw", height: "100vh" }}>
      {/* Left Sidebar */}
      <Grid
        height="100%"
        size={showLeftBar ? 1.5 : 0}
        sx={{
          transition: "all 0.3s ease-in-out",
          overflow: "hidden",
          transform: showLeftBar ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <Leftbar />
      </Grid>

      <Grid size="grow" height="100%">
        <Grid>
          <Navbar
            handleToggleRightBar={handleToggleRightBar}
            handleToggleLeftBar={handleToggleLeftBar}
          />
        </Grid>
        <Grid>
          <Dashboard />
        </Grid>
      </Grid>

      {/* Right Sidebar */}
      <Grid
        height="100%"
        size={showRightBar ? 2 : 0}
        sx={{
          transition: "all 0.3s ease-in-out",
          overflow: "hidden",
          transform: showRightBar ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <Rightbar />
      </Grid>
    </Grid>
  );
}

export default App;
