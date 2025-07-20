import { Grid, Typography, Box } from "@mui/material";
import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";
const chartData = [
  { channel: "Direct", sales: 300.56, fill: "#A5F3FC" },
  { channel: "Affilliate", sales: 135.18, fill: "#A5F5BA" },
  { channel: "Sponsored", sales: 154.02, fill: "#A5B4FC" },
  { channel: "E-mail", sales: 48.96, fill: "#111111" },
];
const salesData = [
  {
    name: "Direct",
    amount: "$300.56",
    color: "#1c1c1c",
    darkColor: "#c6c7f8",
  },
  {
    name: "Affilliate",
    amount: "$135.18",
    color: "#baedbd",
  },
  {
    name: "Sponsored",
    amount: "$154.02",
    color: "#95a4fc",
  },
  {
    name: "E-mail",
    amount: "$49.96",
    color: "#b1e3ff",
  },
];

export const DonutChartWithGaps = ({widget}) => {
  return (
    <>
      <Grid mb={2}>
        <Typography variant="h1" color="text">
          {widget.title}
        </Typography>
      </Grid>
      <Grid sx={{ width: "100%", height: "calc(100% - 40px)" }}>
        <ResponsiveContainer width="100%" height="50%">
          <PieChart>
            <Tooltip />
            <Pie
              data={chartData}
              dataKey="sales"
              nameKey="channel"
              innerRadius="60%"
              outerRadius="100%"
              paddingAngle={5}
              cornerRadius={8}
            />
          </PieChart>
        </ResponsiveContainer>

        <Box>
          {chartData.map((currItem, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "12px",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <Box
                  sx={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: currItem.fill,
                  }}
                />
                <Typography variant="h3" color="text">
                  {currItem.channel}
                </Typography>
              </Box>
              <Typography variant="h3" color="text">
                ${currItem.sales}
              </Typography>
            </Box>
          ))}
        </Box>
      </Grid>
    </>
  );
};
