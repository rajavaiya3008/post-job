import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteJobData, resetPostJobData } from "../redux/slices/postjob";
import { handlePagination } from "../utils/constantFun";
import { resetFormData } from "../redux/slices/form";
import { handleNavigate } from "../redux/slices/stepper";

const AllJobContainer = () => {
  const dispatch = useDispatch();
  const allJobData = useSelector((state) => state.postjob.allJobData);

  useEffect(() => {
    dispatch(resetFormData());
    dispatch(resetPostJobData());
    dispatch(handleNavigate(1));
  }, []);

  const deleteJob = (id) => {
    const jobData = { ...allJobData };
    delete jobData[id];
    dispatch(deleteJobData(jobData));
  };

  const [tableColumn, tableRows] = handlePagination({ allJobData, deleteJob });

  return {
    tableColumn,
    tableRows,
  };
};

export default AllJobContainer;
