import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteJobData, resetPostJobData } from "../redux/slices/postjob";
import { handlePagination } from "../utils/constantFun";
import { resetFormData } from "../redux/slices/form";
import { handleNavigate } from "../redux/slices/stepper";

const AllJobContainer = () => {
  const dispatch = useDispatch();
  const allJobData = useSelector((state) => state.postjob.allJobData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [jobIdToDelete, setJobIdToDelete] = useState(null);

  useEffect(() => {
    dispatch(resetFormData());
    dispatch(resetPostJobData());
    dispatch(handleNavigate(1));
  }, []);

  const handleConfirmDelete = (isConfirmed) => {
    if (isConfirmed && jobIdToDelete) {
      const jobData = { ...allJobData };
      delete jobData[jobIdToDelete];
      dispatch(deleteJobData(jobData));
    }
    setJobIdToDelete(null);
  };

  const deleteJob = (id) => {
    setJobIdToDelete(id);
    setIsDialogOpen(true);
  };

  const [tableColumn, tableRows] = handlePagination({ allJobData, deleteJob });

  return {
    tableColumn,
    tableRows,
    isDialogOpen,
    setIsDialogOpen,
    handleConfirmDelete,
  };
};

export default AllJobContainer;
