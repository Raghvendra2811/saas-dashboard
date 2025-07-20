import { useSearchParams } from "react-router-dom";
import DefaultDashboard from "../pages/Default";
import OrderList from "../pages/OrderList";
import { Grid, Typography } from "@mui/material";
import NotFoundPage from "../pages/NotFound";

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "Default";
  console.log({ page });

  const renderPage = () => {
    switch (page) {
      case "Default":
        return <DefaultDashboard />;
      case "Orderlist":
        return <OrderList />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <Grid p={3.5} sx={{ overflowY: "auto" }}>
      {renderPage()}
    </Grid>
  );
};

export default Dashboard;
