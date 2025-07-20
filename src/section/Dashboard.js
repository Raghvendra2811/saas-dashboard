import { useSearchParams } from "react-router-dom";
import DefaultDashboard from "../pages/Default";
import OrderList from "../pages/OrderList";
import { Grid, Typography } from "@mui/material";
import NotFoundPage from "../pages/NotFound";

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "Default";
  console.log({ page });
  switch (page) {
    case "Default":
      return (
        <Grid p={3.5}>
          <DefaultDashboard />
        </Grid>
      );
    case "Orderlist":
      return (
        <Grid p={3.5}>
          <OrderList />
        </Grid>
      );
    default:
      return (
        <Grid p={3.5}>
          <NotFoundPage />
        </Grid>
      );
  }
};

export default Dashboard;
