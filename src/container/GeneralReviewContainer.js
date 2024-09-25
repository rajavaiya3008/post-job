import { useDispatch, useSelector } from "react-redux";
import {
  postJobData,
  // postJobValidation,
  selectJobValidation,
} from "../description/jobForm";
import { allDataValidation, filterPostJobData } from "../utils/constantFun";
// import { resetFinalFormFields } from "../redux/slices/postjob";
// import { useEffect } from "react";
import { ContractTypeContainer } from "./ContractTypeContainer";
// import { validateAllData } from "../utils/validation";
import { toast } from "react-toastify";
import { validation } from "../utils/validation";
import { handleFormError } from "../redux/slices/form";

const GeneralReviewContainer = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);
  const formFields = useSelector((state) => state.postjob.finalFormFields);
  const { jobRole } = formData.postJob;
  const { contractValidation } = ContractTypeContainer();
  // useEffect(() => {
  //   return () => {
  //     console.log("RRRRR");
  //     dispatch(resetFinalFormFields());
  //   };
  // }, []);
  //   const jobDescFields = formFields.jobDescription;
  //   console.log("jobDescFields", jobDescFields);
  //   const jobDescData = formData.jobDescription;
  //   console.log("jobDescData", jobDescData);

  //   const filteredData = filterData(jobDescData, jobDescFields);
  //   console.log("filteredData", filteredData);

  // const isAllDataPresent = (activeForm) => {
  //   let validationData = formData[postJobData[activeForm]];
  //   let validationFields = postJobValidation[activeForm];
  //   switch (activeForm) {
  //     case 1: {
  //       if (formData.jobDescription.engagement !== "Just for PSL") {
  //         const jobDescValidation = { ...validationFields };
  //         delete jobDescValidation.engagementPSLAjencies;
  //         validationFields = jobDescValidation;
  //       }
  //       if (
  //         formData.jobDescription.engagementPSLAjencies !==
  //           "Select PSL agency" ||
  //         formData.jobDescription.engagement !== "Just for PSL"
  //       ) {
  //         const jobDescValidation = { ...validationFields };
  //         delete jobDescValidation.PSLAgency;
  //         validationFields = jobDescValidation;
  //       }
  //       return validateAllData(validationData, validationFields);
  //       // break;
  //     }
  //     case 2: {
  //       return validateAllData(validationData, validationFields);
  //     }
  //     case 3: {
  //       validationFields = contractValidation;
  //       return validateAllData(validationData, validationFields);
  //       // break;
  //     }
  //     case 4: {
  //       return validateAllData(validationData, validationFields);
  //     }
  //   }
  //   // let error = validateAllData(validationData, validationFields);
  // };

  const allData = Object.entries(postJobData).map(([key, val]) => ({
    ...filterPostJobData(formData[val], formFields[val], val),
    title: val,
  }));
  console.log("allData", allData);

  // const mokData = allDataValidation(2);
  // console.log("mokData", mokData);

  const isAllDataValid = Object.keys(postJobData).every(
    (key) =>
      !Object.keys(
        allDataValidation({
          activeForm: Number(key),
          formData,
          contractValidation,
        })[0]
      ).length
  );
  console.log("isAllDataValid", isAllDataValid);

  const submitJobData = () => {
    if (!isAllDataValid) {
      toast.error("Please Fill All Detail Correctly");
    } else {
      const error = validation("jobRole", jobRole, selectJobValidation);
      dispatch(handleFormError({ error, formName: "postJob" }));
      if (!Object.keys(error).length) {
        toast.success("Job is Successfully Created");
      }
    }
  };

  return { allData, isAllDataValid, submitJobData };
};

export default GeneralReviewContainer;
