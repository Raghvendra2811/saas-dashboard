import {
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const tableHeaders = [
  { th: "Name", key: "name" },
  { th: "Price", key: "price" },
  { th: "Quantity", key: "quantity" },
  { th: "Amount", key: "amount" },
];

const productsData = [
  {
    name: "ASOS Ridley Hight Waist",
    price: "$79.49",
    quantity: "82",
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: "37",
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: "64",
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: "184",
    amount: "$3,680.00",
  },
  {
    name: "Marco Shoes",
    price: "$79.49",
    quantity: "64",
    amount: "$1,965.81",
  },
];

const TableWidget = ({widget}) => {
  const theme = useTheme();

  return (
    <>
      <Typography variant="h1" sx={{wordBreak:"keep-all"}} color="text">
        {widget.title}
      </Typography>
      <Box 
        sx={{ 
          width: "100%",
          overflow: "auto",
          maxHeight: "calc(100% - 20px)",
        }}
      >
        <Table sx={{ width: "100%" }}>
          <TableHead>
            <TableRow sx={{ borderBottom: theme.palette.disabled.main }}>
              {tableHeaders.map((currItem, index) => (
                <TableCell
                  key={index}
                  sx={{
                    py: 1.5,
                    pr: 1.5,
                    pl: 0,
                  }}
                >
                  <Typography variant="h3" color="secondary">
                    {currItem.th}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {productsData.map((currItem, index) => (
              <TableRow key={index}>
                {tableHeaders.map((cell, cellIndex) => (
                  <TableCell
                    key={cellIndex}
                    sx={{
                      py: 1.5,
                      pr: 1.5,
                      pl: 0,
                      borderBottom: "none",
                    }}
                  >
                    <Typography variant="h3" color="text">
                      {currItem[cell.key]}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default TableWidget;