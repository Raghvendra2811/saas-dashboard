import React from "react";
import StackedBarChart from "./BarChart";
import RevenueChart from "./LineChart";
import MapChart from "./MapChart";
import TableWidget from "./Table";
import { DonutChartWithGaps } from "./DonutChart";

const Widget = ({ widget }) => {
  switch (widget.type) {
    case "bar_widget":
      return <StackedBarChart widget={widget} />;
    case "line_widget":
      return <RevenueChart widget={widget} />;
    case "map_widget":
      return <MapChart widget={widget} />;
    case "table_widget":
      return <TableWidget widget={widget} />;
    case "donut_widget":
      return <DonutChartWithGaps widget={widget} />;

    default:
      break;
  }
};

export default Widget;
