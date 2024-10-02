import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const TableRows = ({ page, rowsPerPage, tableColumn, tableRows }) => {
  const filteredRow = tableRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  return filteredRow.length > 0 ? (
    <>
      {filteredRow.map((row, i) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={i}>
            {tableColumn?.map((column, i) => {
              switch (column.type) {
                case "text": {
                  return <TableCell key={i}>{row[column.name]}</TableCell>;
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
                          // text={btn.name}
                          onClick={() => btn.onClick(row.id)}
                          btnStyle={"text-blue-500"}
                        >
                          {btn.name}
                        </Button>
                      ))}
                    </TableCell>
                  );
                }
              }
            })}
          </TableRow>
        );
      })}
    </>
  ) : null;
};

export default TableRows;
