import React, { useMemo, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// import { NavLink } from "react-router-dom";
// import Button from "./Button";
import TableRows from "./TableRows";
import { filterTableData } from "../utils/constantFun";

const Pagination = ({ tableColumn, tableRows, searchVal, searchKey }) => {
  // console.log("searchVal", searchVal);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  tableRows = useMemo(() => {
    if (searchVal.trim()) {
      return filterTableData(tableRows, searchVal, searchKey);
    }
    return tableRows;
  }, [tableRows, searchVal, searchKey]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Paper sx={{ width: "1000px", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {tableColumn.map((column, i) => (
                  <TableCell key={i}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRows {...{ page, rowsPerPage, tableColumn, tableRows }} />
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={tableRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default Pagination;
