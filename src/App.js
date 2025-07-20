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
    <Grid container>
      {showLeftBar && (
        <Grid size={1.5}>
          <Leftbar />
        </Grid>
      )}
      <Grid size="grow">
        <Grid>
          <Navbar handleToggleRightBar={handleToggleRightBar} handleToggleLeftBar={handleToggleLeftBar} />
        </Grid>
        <Grid>
          <Dashboard />
        </Grid>
      </Grid>
      {showRightBar && (
        <Grid size={2}>
          <Rightbar />
        </Grid>
      )}
    </Grid>
  );
}

export default App;
