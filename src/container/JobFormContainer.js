import { useDispatch, useSelector } from "react-redux";
import { handleNavigate } from "../redux/slices/stepper";
// import { validateAllData } from "../utils/validation";
import { handleFormError, onChange } from "../redux/slices/form";
import {
  postJobData,
  // postJobValidation,
  // selectJobValidation,
} from "../description/jobForm";
import { ContractTypeContainer } from "./ContractTypeContainer";
import { handleFinalFormFields } from "../redux/slices/postjob";
// import { FormContainer } from "./FormContainer";
import { allDataValidation } from "../utils/constantFun";

export const JobFormContainer = () => {
  // console.log("job form rendered");
  const dispatch = useDispatch();
  const { activeForm } = useSelector((state) => state.stepper);
  const formData = useSelector((state) => state.formData);
  const allJobData = useSelector((state) => state.postjob.allJobData);
  const jobRole = formData.postJob.jobRole;
  const jobRoleErr = formData.error.postJob?.jobRole;
  const { contractValidation } = ContractTypeContainer();
  // const { handleChange } = FormContainer({
  //   formName: "postJob",
  //   formValidation: [],
  // });

  const jobOptions = Object.values(allJobData).map(
    (job) => job.jobDescription.jobTitle
  );

  const setJobData = () => {};

  const handleChange = (e) => {
    console.log("on chnage in postjob RRR");
    const { name, value, id } = e.target;
    console.log("id", id);
    switch (name) {
      case "jobRole": {
        dispatch(onChange({ name, value, formName: "postJob" }));

        break;
      }
    }
  };

  const handleNavigation = (navigate) => {
    if (navigate === "prev") {
      dispatch(handleNavigate(activeForm - 1));
    } else if (navigate === "next") {
      const [error, validationFields] = allDataValidation({
        activeForm,
        formData,
        contractValidation,
      });
      // let validationData = formData[postJobData[activeForm]];
      // let validationFields = postJobValidation[activeForm];
      // switch (activeForm) {
      //   case 1: {
      //     if (formData.jobDescription.engagement !== "Just for PSL") {
      //       const jobDescValidation = { ...validationFields };
      //       delete jobDescValidation.engagementPSLAjencies;
      //       validationFields = jobDescValidation;
      //     }
      //     if (
      //       formData.jobDescription.engagementPSLAjencies !==
      //         "Select PSL agency" ||
      //       formData.jobDescription.engagement !== "Just for PSL"
      //     ) {
      //       const jobDescValidation = { ...validationFields };
      //       delete jobDescValidation.PSLAgency;
      //       validationFields = jobDescValidation;
      //     }
      //     break;
      //   }
      //   case 3: {
      //     validationFields = contractValidation;
      //     break;
      //   }
      // }
      // let error = validateAllData(validationData, validationFields);
      // console.log("error", error);
      // switch (activeForm) {
      //   case 1: {
      //     if (formData.jobDescription.engagement !== "Just for PSL") {
      //       console.log("RRRRRRR");
      //       delete error.engagementPSLAjencies;
      //     }
      //     console.log(formData.jobDescription.engagementPSLAjencies);
      //     if (
      //       formData.jobDescription.engagementPSLAjencies !==
      //         "Select PSL agency" ||
      //       formData.jobDescription.engagement !== "Just for PSL"
      //     ) {
      //       console.log("RRRR");
      //       delete error.PSLAgency;
      //     }
      //     break;
      //   }
      // }
      // console.log("error", error);
      dispatch(handleFormError({ error, formName: postJobData[activeForm] }));
      if (!Object.keys(error).length) {
        dispatch(
          handleFinalFormFields({
            formName: postJobData[activeForm],
            keys: Object.keys(validationFields),
          })
        );
        dispatch(handleNavigate(activeForm + 1));
      }
    }
  };

  return {
    activeForm,
    jobRole,
    jobRoleErr,
    jobOptions,
    handleChange,
    handleNavigation,
  };
};
