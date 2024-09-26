import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../shared/Pagination";
import { deleteJobData, resetPostJobData } from "../redux/slices/postjob";
import { handlePagination } from "../utils/constantFun";
import { resetFormData } from "../redux/slices/form";
import { handleNavigate } from "../redux/slices/stepper";
// import Pagination from "@mui/material/Pagination";

const AllJob = () => {
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

  //   const handlePagination = (allJobData) => {
  //     const tableColumn = [
  //       {
  //         type: "text",
  //         name: "id",
  //         label: "ID",
  //       },
  //       {
  //         type: "text",
  //         name: "jobName",
  //         label: "Job Name",
  //       },
  //       {
  //         type: "link",
  //         label: "Edit",
  //         linkArr: [
  //           {
  //             name: "Edit",
  //           },
  //         ],
  //       },
  //       {
  //         type: "button",
  //         label: "Delete",
  //         btnArr: [
  //           {
  //             name: "Delete",
  //             onClick: deleteJob,
  //           },
  //         ],
  //       },
  //     ];
  //     let tableRows = Object.entries(allJobData).map(([key, val]) => ({
  //       id: key,
  //       jobName: val.postJob.jobRole,
  //     }));
  //     return [tableColumn, tableRows];
  //   };

  return (
    <div>
      <h1 className="text-center mt-[15px] text-[30px]">All Jobs</h1>
      <div className="flex justify-center mt-[25px]">
        <Pagination {...{ tableColumn, tableRows }} />
      </div>
    </div>
  );
};

export default AllJob;
