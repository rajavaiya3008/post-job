import { useDispatch, useSelector } from "react-redux";
import { handleNavigate } from "../redux/slices/stepper";
// import { validateAllData } from "../utils/validation";
import { handleFormError, onChange, setFormData } from "../redux/slices/form";
import {
  postJobData,
  // postJobValidation,
  // selectJobValidation,
} from "../description/jobForm";
import { ContractTypeContainer } from "./contractTypeContainer";
import { handleFinalFormFields, setPostJobData } from "../redux/slices/postjob";
// import { FormContainer } from "./FormContainer";
import { allDataValidation } from "../utils/constantFun";
import { objectEntries, objectKeys } from "../utils/commonFunction";
import { NEXT, PREV } from "../utils/constantVariable";
import { JobDescData, jobDescValidation } from "../description/jobDescription";
import { jobSkillData, jobSkillsValidation } from "../description/jobSkills";
import {
  recruitmentInfoData,
  recruitmentInfoValidation,
} from "../description/recruitmentInfo";

export const JobFormContainer = () => {
  // console.log("job form rendered");
  const dispatch = useDispatch();
  const { activeForm } = useSelector((state) => state.stepper);
  const formData = useSelector((state) => state.formData);
  const allJobData = useSelector((state) => state.postjob.allJobData);
  const jobRole = formData.postJob.jobRole;
  const jobRoleErr = formData.error.postJob?.jobRole;
  const { contractFields, contractValidation } = ContractTypeContainer();
  // const { handleChange } = FormContainer({
  //   formName: "postJob",
  //   formValidation: [],
  // });

  const postJobSections = {
    1: JobDescData,
    2: jobSkillData,
    3: contractFields,
    4: recruitmentInfoData,
  };

  const postJobValidations = {
    1: jobDescValidation,
    2: jobSkillsValidation,
    3: contractValidation,
    4: recruitmentInfoValidation,
  };

  const formFields = postJobSections[activeForm];
  const formValidation = postJobValidations[activeForm];

  const jobOptions = objectEntries(allJobData).map(([key, val]) => ({
    id: key,
    value: val.jobDescription.jobTitle,
  }));
  // console.log("jobOptions", jobOptions);

  // const setJobData = () => {};

  const handleChange = (e) => {
    // console.log("on chnage in postjob RRR");
    const { name, value, id } = e.target;
    // console.log("id", id);
    switch (name) {
      case "jobRole": {
        dispatch(onChange({ name, value, formName: "postJob" }));
        const reuseJobData = Object?.entries(allJobData)?.find(
          ([key]) => key === value
        );
        const [id, jobVal] = reuseJobData;
        //   console.log("value", value);
        const {
          contractValidation,
          replacementFields,
          finalFormFields,
          ...formData
        } = jobVal;
        //   console.log("formData", formData);
        dispatch(setFormData(formData));
        dispatch(
          setPostJobData({
            contractValidation,
            replacementFields,
            finalFormFields,
          })
        );
        break;
      }
    }
  };

  const handleNavigation = (navigate) => {
    if (navigate === PREV) {
      dispatch(handleNavigate(activeForm - 1));
    } else if (navigate === NEXT) {
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
      if (!objectKeys(error).length) {
        dispatch(
          handleFinalFormFields({
            formName: postJobData[activeForm],
            keys: objectKeys(validationFields),
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
    formFields,
    formValidation,
    handleChange,
    handleNavigation,
  };
};
