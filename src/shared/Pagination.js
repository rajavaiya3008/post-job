import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Pagination = ({ tableColumn, tableRows }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      <Paper sx={{ width: "700px", overflow: "hidden" }}>
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
              {tableRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                      {tableColumn.map((column, i) => {
                        switch (column.type) {
                          case "text": {
                            return (
                              <TableCell key={i}>{row[column.name]}</TableCell>
                            );
                          }
                          case "link": {
                            return (
                              <TableCell key={i}>
                                {column.linkArr.map((btn, i) => (
                                  <NavLink
                                    to={`/?id=${row.id}`}
                                    key={i}
                                    className="text-blue-500"
                                  >
                                    {btn.name}
                                  </NavLink>
                                ))}
                              </TableCell>
                            );
                          }
                          case "button": {
                            return (
                              <TableCell key={i}>
                                {column.btnArr.map((btn, i) => (
                                  <Button
                                    key={i}
                                    text={btn.name}
                                    onClick={() => btn.onClick(row.id)}
                                    btnStyle={"text-blue-500"}
                                  />
                                ))}
                              </TableCell>
                            );
                          }
                        }
                      })}
                    </TableRow>
                  );
                })}
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
