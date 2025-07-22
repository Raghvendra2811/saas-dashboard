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
  const checkedColor = mode === "light" ? "#1C1C1C" : "#C6C7F8";
  return (
    <Grid>
      <Table>
        <TableHead>
          <TableRow
            sx={{ borderBottom: `1px solid ${theme.palette.disabled.main}` }}
          >
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
                <Typography
                  variant="h3"
                  color="secondary"
                  display="flex"
                  alignItems="center"
                >
                  {index === 0 && (
                    <input
                      type="checkbox"
                      style={{ accentColor: checkedColor, marginRight: "16px" }}
                    />
                  )}
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
              {orderListColumns.map((column, columnIndex) => (
                <TableCell
                  sx={{ px: 1.5, py: 1, border: "none", fontSize: "12px" }}
                >
                  <ColumnComponent
                    row={row}
                    column={column}
                    columnIndex={columnIndex}
                    checkedColor={checkedColor}
                  />
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
