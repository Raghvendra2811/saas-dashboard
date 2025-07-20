import { Typography, Grid } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", base: 17, forecast: 5 },
  { month: "Feb", base: 20, forecast: 6 },
  { month: "Mar", base: 18, forecast: 4 },
  { month: "Apr", base: 22, forecast: 5 },
  { month: "May", base: 16, forecast: 4 },
  { month: "Jun", base: 21, forecast: 5 },
];

const StackedBarChart = ({widget}) => {
  return (
    <>
      <Grid mb={2}>
        <Typography variant="h1" color="text">{widget.title}</Typography>
      </Grid>
      <Grid sx={{ width: "100%", height: "calc(100% - 40px)" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
          >
            <CartesianGrid stroke="#e5e7eb" vertical={false} />
            <XAxis
              dataKey="month"
              stroke="#9ca3af"
              axisLine={false}
              tickLine={false}
              fontSize={14}
            />
            <YAxis
              ticks={[0, 10, 20, 30]}
              domain={[0, 30]}
              tickFormatter={(val) => `${val}M`}
              stroke="#9ca3af"
              axisLine={false}
              tickLine={false}
              fontSize={14}
            />
            <Tooltip />

            <Bar dataKey="base" stackId="a" fill="#94b5d4" barSize={30} />

            <Bar
              dataKey="forecast"
              stackId="a"
              fill="#dbe8f1"
              radius={[8, 8, 0, 0]}
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </Grid>
    </>
  );
};

export default StackedBarChart;
