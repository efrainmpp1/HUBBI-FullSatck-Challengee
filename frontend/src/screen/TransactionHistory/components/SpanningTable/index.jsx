/* eslint-disable react/prop-types */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function SpanningTable({ rows, total_amount }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>Transaction Type</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">Seller</TableCell>
            <TableCell align="right">Amount in Cents</TableCell>
          </TableRow>
        </TableHead>
        {rows ? (
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.transaction_type_description}</TableCell>
                <TableCell align="right">{row.date_brl_format}</TableCell>
                <TableCell align="right">{row.product_description}</TableCell>
                <TableCell align="right">{row.seller_name}</TableCell>
                <TableCell align="right">{row.amount_in_cents}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell align="right" colSpan={4}>
                Total
              </TableCell>
              <TableCell align="right">{total_amount}</TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <></>
        )}
      </Table>
    </TableContainer>
  );
}
