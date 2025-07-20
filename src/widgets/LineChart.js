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
import { useColorMode } from "../theme/themeContext";

const data = [
  { month: "Jan", current: 12, previous: 8 },
  { month: "Feb", current: 10, previous: 17 },
  { month: "Mar", current: 8, previous: 15 },
  { month: "Apr", current: 14, previous: 10 },
  { month: "May", current: 19, previous: 12 },
  { month: "Jun", current: 20, previous: 23 },
];

const RevenueChart = ({ widget }) => {
  const mode = useColorMode();
  const theme = useTheme();
  const color = mode !== "dark" ? "#c6c7f8" : "#1c1c1c";
  return (
    <>
      <Grid mb={2} container gap={2}>
        <Typography variant="h1" color="text">
          {widget.title}
        </Typography>

        <Typography variant="h1" color="text">
          |
        </Typography>

        <Grid container alignItems="center" gap={0.5}>
          <Grid
            sx={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              bgcolor: color,
            }}
          />
          <Typography variant="h2" color="text">
            Current Week
          </Typography>
          <Typography variant="h1" color="text">
            $58,211
          </Typography>
        </Grid>

        <Grid container alignItems="center" gap={0.5}>
          <Grid
            sx={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              bgcolor: "#a8c5da",
            }}
          />
          <Typography variant="h2" color="text">
            Previous Week
          </Typography>
          <Typography variant="h1" color="text">
            $68,768
          </Typography>
        </Grid>
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
              stroke={color}
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
