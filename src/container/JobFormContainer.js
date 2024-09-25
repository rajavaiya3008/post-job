import { useDispatch, useSelector } from "react-redux";
import { handleNavigate } from "../redux/slices/stepper";
// import { validateAllData } from "../utils/validation";
import { handleFormError } from "../redux/slices/form";
import {
  postJobData,
  // postJobValidation,
  selectJobValidation,
} from "../description/jobForm";
import { ContractTypeContainer } from "./ContractTypeContainer";
import { handleFinalFormFields } from "../redux/slices/postjob";
import { FormFieldsContainer } from "./FormFieldsContainer";
import { allDataValidation } from "../utils/constantFun";

export const JobFormContainer = () => {
  // console.log("job form rendered");
  const dispatch = useDispatch();
  const { activeForm } = useSelector((state) => state.stepper);
  const formData = useSelector((state) => state.formData);
  const jobRole = formData.postJob.jobRole;
  const jobRoleErr = formData.error.postJob?.jobRole;
  const { contractValidation } = ContractTypeContainer();
  const { handleChange } = FormFieldsContainer({
    formName: "postJob",
    formValidation: selectJobValidation,
  });

  // const handleChange = (e) => {};

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
    handleChange,
    handleNavigation,
  };
};
