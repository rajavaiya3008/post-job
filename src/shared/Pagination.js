import React from "react";
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
// import usePagination from "../hooks/usePagination";
// import { filterTableData } from "../utils/constantFun";

const Pagination = ({
  tableColumn,
  tableRows,
  checkbox,
  // searchVal,
  tableStyle,
  page,
  rowsPerPage,
  selected,
  handleChangePage,
  handleChangeRowsPerPage,
  handleSelectRow,
}) => {
  // const {
  //   page,
  //   rowsPerPage,
  //   selected,
  //   handleChangePage,
  //   handleChangeRowsPerPage,
  //   handleSelectRow,
  // } = usePagination({ searchVal });

  // console.log("searchVal", searchVal);
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);
  // const [selected, setSelected] = useState([]);

  // useEffect(() => {
  //   setPage(0);
  // }, [searchVal]);

  // const handleChangePage = (event, newPage) => {
  //   // console.log("newPage", newPage);
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  // const handleSelectRow = (id) => {
  //   setSelected((prev) =>
  //     prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
  //   );
  // };

  return (
    <div className={tableStyle ? tableStyle : ""}>
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
              <TableRows
                {...{
                  page,
                  rowsPerPage,
                  tableColumn,
                  tableRows,
                  handleSelectRow,
                  selected,
                  checkbox,
                }}
              />
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
