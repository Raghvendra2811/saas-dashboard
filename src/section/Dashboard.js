import React from "react";
import { useSearchParams } from "react-router-dom";

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  console.log({ page });
  return <div>Dashboard</div>;
};

export default Dashboard;
