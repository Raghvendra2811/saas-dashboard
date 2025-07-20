import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Grid,
  useTheme,
  Checkbox,
} from "@mui/material";
import { orderListColumns, orderListData } from "../../data";
import ColumnComponent from "./columnComp";
import { useColorMode } from "../../theme/themeContext";

const TableComp = () => {
  const { mode } = useColorMode();
  const theme = useTheme();
  return (
    <Grid>
      <Table>
        <TableHead>
          <TableRow
            sx={{
              borderBottom:
                mode === "dark"
                  ? "1px solid rgba(255, 255, 255, 0.2)"
                  : "1px solid rgba(28, 28, 28, 0.2)",
            }}
          >
            <TableCell sx={{ border: "none", p: 0 }} />
            {orderListColumns.map((currItem, index) => (
              <TableCell
                key={currItem.title}
                align="left"
                sx={{
                  px: 1.5,
                  py: 1,
                  border: "none",
                }}
              >
                <Typography variant="h3" color="secondary">
                  {currItem.title}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {orderListData.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "&:hover": {
                  backgroundColor: theme.palette.primary.variant1,
                },
                borderBottom: theme.palette.secondary.variant2,
                "& .action-button": {
                  opacity: 0,
                },
                "&:hover .action-button": {
                  opacity: 1,
                },
              }}
            >
              <TableCell sx={{ border: "none", p: 0 }} />

              {orderListColumns.map((column) => (
                <TableCell
                  sx={{ px: 1.5, py: 1, border: "none", fontSize: "12px" }}
                >
                  <ColumnComponent row={row} column={column} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid>
  );
};

export default TableComp;
