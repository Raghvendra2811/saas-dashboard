import { Grid } from "@mui/material";
import "./App.css";
import Leftbar from "./section/Leftbar";
import Navbar from "./section/Navbar";
import Dashboard from "./section/Dashboard";
import Rightbar from "./section/Rightbar";

function App() {
  return (
    <Grid container>
      <Grid size={2}>
        <Leftbar />
      </Grid>
      <Grid size="grow">
        <Grid>
          <Navbar />
        </Grid>
        <Grid>
          <Dashboard />
        </Grid>
      </Grid>
      <Grid size={2}>
        <Rightbar />
      </Grid>
    </Grid>
  );
}

export default App;
