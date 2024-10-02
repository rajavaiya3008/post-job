import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import Pagination from "../shared/Pagination";
// import { deleteJobData, resetPostJobData } from "../redux/slices/postjob";
// import { handlePagination } from "../utils/constantFun";
// import { resetFormData } from "../redux/slices/form";
// import { handleNavigate } from "../redux/slices/stepper";
import AlertDialog from "../shared/AlertDialog";
import InputField from "../shared/InputField";
// import { TEXT_INPUT } from "../utils/constantVariable";
// import useHandleChange from "../hooks/useHandleChange";
import AllJobContainer from "../container/allJobContainer";
import { searchFields } from "../description/allJob.description";
import DropDown from "../shared/DropDown";
import { CITY, SELECT_INPUT, TEXT_INPUT } from "../utils/constantVariable";
// import Pagination from "@mui/material/Pagination";

const AllJob = () => {
  const {
    tableColumn,
    tableRows,
    isDialogOpen,
    input,
    cityOptions,
    countryOptions,
    handleChange,
    setIsDialogOpen,
    handleConfirmDelete,
  } = AllJobContainer();
  // const { input, handleChange } = useHandleChange();
  // console.log("input", input);
  //   const dispatch = useDispatch();
  //   const allJobData = useSelector((state) => state.postjob.allJobData);

  //   useEffect(() => {
  //     dispatch(resetFormData());
  //     dispatch(resetPostJobData());
  //     dispatch(handleNavigate(1));
  //   }, []);

  //   const deleteJob = (id) => {
  //     const jobData = { ...allJobData };
  //     delete jobData[id];
  //     dispatch(deleteJobData(jobData));
  //   };

  //   const [tableColumn, tableRows] = handlePagination({ allJobData, deleteJob });

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

  // const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const [jobIdToDelete, setJobIdToDelete] = useState(null);
  // const dispatch = useDispatch();

  // const handleDeleteClick = (id) => {
  //   setJobIdToDelete(id);
  //   setIsDialogOpen(true);
  // };

  // const handleConfirmDelete = (isConfirmed) => {
  //   console.log("isConfirmed", isConfirmed);
  //   // if (isConfirmed && jobIdToDelete !== null) {
  //   //   const jobData = { ...allJobData };
  //   //   delete jobData[jobIdToDelete];
  //   //   dispatch(deleteJobData(jobData));
  //   // }
  //   setJobIdToDelete(null); // Reset the ID
  // };

  return (
    <div>
      <h1 className="text-center mt-[15px] text-[30px]">All Jobs</h1>
      <div className="flex flex-col justify-center mx-auto w-[1000px]">
        {searchFields.map((field, i) => {
          const value = input[field.name] ?? "";
          switch (field.type) {
            case TEXT_INPUT: {
              return (
                <InputField
                  key={i}
                  {...{
                    ...field,
                    value,
                    handleChange,
                    isActive: true,
                  }}
                />
              );
            }
            case SELECT_INPUT: {
              const options =
                field.name === CITY ? cityOptions : countryOptions;
              return (
                <DropDown
                  key={i}
                  {...{ ...field, value, handleChange, options }}
                />
              );
            }
          }
        })}
        <Pagination
          {...{
            tableColumn,
            tableRows: tableRows.reverse(),
            searchVal: input,
            tableStyle: "mt-[-65px]",
            // searchVal: input[inputData.name] ?? "",
            // searchKey: ["jobName", "employmentType", "workType"],
          }}
        />
        <AlertDialog
          open={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          onConfirm={handleConfirmDelete}
          message={"Are you sure you want to delete this job?"}
        />
      </div>
    </div>
  );
};

export default AllJob;
