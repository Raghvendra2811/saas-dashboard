import { Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const data = [
  { month: "Jan", current: 12, previous: 8 },
  { month: "Feb", current: 10, previous: 17 },
  { month: "Mar", current: 8, previous: 15 },
  { month: "Apr", current: 14, previous: 10 },
  { month: "May", current: 19, previous: 12 },
  { month: "Jun", current: 20, previous: 23 },
];

const RevenueChart = () => {
  const theme = useTheme();
  return (
    <>
      <Grid mb={2}>
        <Typography variant="h1" color="text">Revenue</Typography>
      </Grid>
      <Grid sx={{ width: "100%", height: "calc(100% - 40px)" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}

          >
            <CartesianGrid strokeDasharray="0" vertical={false} />
            <XAxis
              dataKey="month"
              stroke={theme.palette.secondary.main}
              padding={{
                left: 30,
                right: 30,
              }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(val) => `${val}M`}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              stroke={theme.palette.secondary.main}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#000"
              strokeWidth={3}
              dot={false}
              isAnimationActive={true}
              strokeDasharray="0 0 5 5"
            />

            <Line
              type="monotone"
              dataKey="previous"
              stroke="#A8C5DA"
              strokeWidth={3}
              dot={false}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
        
      </Grid>
    </>
  );
};

export default RevenueChart;
