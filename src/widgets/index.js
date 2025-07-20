import React from "react";
import StackedBarChart from "./BarChart";
import RevenueChart from "./LineChart";
import MapChart from "./MapChart";
import TableWidget from "./Table";
import { DonutChartWithGaps } from "./DonutChart";

const Widget = ({ widget }) => {
  switch (widget.type) {
    case "bar_widget":
      return <StackedBarChart />;
    case "line_widget":
      return <RevenueChart />;
    case "map_widget":
      return <MapChart />;
    case "table_widget":
      return <TableWidget />;
    case "donut_widget":
      return <DonutChartWithGaps />;

    default:
      break;
  }
};

export default Widget;
