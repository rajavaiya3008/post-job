import { useDispatch, useSelector } from "react-redux";
import {
  postJobData,
  postJobTitle,
  // postJobValidation,
  // selectJobValidation,
} from "../description/jobForm";
import { allDataValidation, filterPostJobData } from "../utils/constantFun";
// import { resetFinalFormFields } from "../redux/slices/postjob";
// import { useEffect } from "react";
import { ContractTypeContainer } from "./contractTypeContainer";
// import { validateAllData } from "../utils/validation";
import { toast } from "react-toastify";
// import { validation } from "../utils/validation";
// import { handleFormError } from "../redux/slices/form";
import { postNewJob } from "../redux/slices/postjob";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ALL_JOB } from "../utils/routeConstant";
import { objectEntries, objectKeys } from "../utils/commonFunction";
// import { onChange } from "../redux/slices/form";
// import { handleNavigate } from "../redux/slices/stepper";

const GeneralReviewContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [prams] = useSearchParams();
  const formData = useSelector((state) => state.formData);
  const formFields = useSelector((state) => state.postjob.finalFormFields);
  const { jobRole } = formData.postJob;
  const jobId = prams.get("id");
  // console.log("jobId in General review", jobId);
  const { contractValidation, replacementFields } = ContractTypeContainer();
  // console.log("formData", formData);
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

  // console.log("contractValidation", contractValidation);
  const allData = objectEntries(postJobData).map(([key, val]) => ({
    ...filterPostJobData(formData[val], formFields[val], val),
    title: postJobTitle[key],
  }));
  // console.log("allData", allData);

  // const mokData = allDataValidation(2);
  // console.log("mokData", mokData);

  const isAllDataValid = objectKeys(postJobData).every(
    (key) =>
      !objectKeys(
        allDataValidation({
          activeForm: Number(key),
          formData,
          contractValidation,
        })[0]
      ).length
  );
  // console.log("isAllDataValid", isAllDataValid);

  const submitJobData = () => {
    if (!isAllDataValid) {
      toast.error("Please Fill All Detail Correctly");
    } else {
      // const error = validation("jobRole", jobRole, selectJobValidation);
      // dispatch(handleFormError({ error, formName: "postJob" }));
      // dispatch(
      //   onChange({
      //     name: "jobRole",
      //     value: formData.jobDescription.jobTitle,
      //     formName: "postJob",
      //   })
      // );
      // const finalFormData = {
      //   ...formData,
      //   postJob: { jobRole: formData.jobDescription.jobTitle },
      // };
      // const contValidation = {
      //   ...contractValidation,
      //   recruiterFeeAmount: [
      //     { required: true, message: "Please Enter Recruiter Fee Amount" },
      //   ],
      //   recruiterFeePercentage: [
      //     { required: true, message: "Please Enter Recruiter Fee Percentage" },
      //   ],
      // };
      dispatch(
        postNewJob({
          id: jobId || Date.now(),
          jobData: {
            ...formData,
            contractValidation,
            replacementFields,
            finalFormFields: formFields,
          },
        })
      );
      jobId
        ? toast.success("Job is Successfully Edited")
        : toast.success("Job is Successfully Created");
      navigate(ALL_JOB, { replace: true });
      // if (!Object.keys(error).length) {
      //   dispatch(
      //     postNewJob({
      //       id: jobId || Date.now(),
      //       jobData: {
      //         ...formData,
      //         contractValidation,
      //         replacementFields,
      //         finalFormFields: formFields,
      //       },
      //     })
      //   );
      //   // dispatch(resetFormData());
      //   // dispatch(resetPostJobData());
      //   // dispatch(handleNavigate(1));
      //   jobId
      //     ? toast.success("Job is Successfully Edited")
      //     : toast.success("Job is Successfully Created");
      //   navigate(ALL_JOB, { replace: true });
      // }
    }
  };

  return { allData, isAllDataValid, jobId, submitJobData };
};

export default GeneralReviewContainer;
