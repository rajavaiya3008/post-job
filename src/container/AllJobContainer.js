import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteJobData, resetPostJobData } from "../redux/slices/postjob";
import { filterTableData, handlePagination } from "../utils/constantFun";
import { resetFormData } from "../redux/slices/form";
import { handleNavigate } from "../redux/slices/stepper";
import useHandleChange from "../hooks/useHandleChange";
import { objectEntries, objectFromEntries } from "../utils/commonFunction";
import { searchKey } from "../description/allJob.description";

const AllJobContainer = () => {
  const dispatch = useDispatch();
  const allJobData = useSelector((state) => state.postjob.allJobData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [jobIdToDelete, setJobIdToDelete] = useState(null);
  const { input, handleChange } = useHandleChange();

  useEffect(() => {
    dispatch(resetFormData());
    dispatch(resetPostJobData());
    dispatch(handleNavigate(1));
  }, []);

  const handleConfirmDelete = (isConfirmed) => {
    if (isConfirmed && jobIdToDelete) {
      const jobData = { ...allJobData };
      const remainingJob = objectFromEntries(
        objectEntries(jobData).filter(([key]) => !jobIdToDelete.includes(key))
      );
      dispatch(deleteJobData(remainingJob));
    }
    setJobIdToDelete(null);
  };

  const deleteJob = (id) => {
    setJobIdToDelete(id);
    setIsDialogOpen(true);
  };

  const cityOptions = Array.from(
    new Set(
      objectEntries(allJobData).map(([, val]) =>
        val.jobDescription.city.split("(")[0].trim()
      )
    )
  );

  const countryOptions = Array.from(
    new Set(
      objectEntries(allJobData).map(([, val]) => val.jobDescription.country)
    )
  );

  let [tableColumn, tableRows] = handlePagination({ allJobData, deleteJob });

  tableRows = useMemo(() => {
    return tableRows.filter((row) => {
      const lowerSearch = input.search?.trim().toLowerCase();
      const lowerCity = input.city?.toLowerCase();
      const lowerCountry = input.country?.toLowerCase();

      const jobMatches = searchKey.some((key) =>
        row[key]?.toLowerCase().includes(lowerSearch)
      );

      const cityMatches = lowerCity
        ? row.city?.toLowerCase().includes(lowerCity)
        : true;

      const countryMatches = lowerCountry
        ? row.country?.toLowerCase().includes(lowerCountry)
        : true;

      return (jobMatches || !lowerSearch) && cityMatches && countryMatches;
    });
  }, [tableRows, input.search, input.city, searchKey]);

  // tableRows = useMemo(() => {
  //   if (input.search?.trim()) {
  //     return filterTableData(tableRows, input.search, searchKey);
  //   }
  //   return tableRows;
  // }, [tableRows, input.search, searchKey]);

  return {
    tableColumn,
    tableRows,
    isDialogOpen,
    input,
    cityOptions,
    countryOptions,
    handleChange,
    setIsDialogOpen,
    handleConfirmDelete,
    deleteJob,
  };
};

export default AllJobContainer;
