import { useEffect, useState } from "react";

const usePagination = ({ searchVal } = {}) => {
  //   console.log("searchVal", searchVal);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setPage(0);
  }, [searchVal]);

  const handleChangePage = (event, newPage) => {
    // console.log("newPage", newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSelectRow = (id) => {
    // console.log("RRRr");
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return {
    page,
    rowsPerPage,
    selected,
    handleChangePage,
    handleChangeRowsPerPage,
    handleSelectRow,
  };
};

export default usePagination;
