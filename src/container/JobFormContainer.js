import { useDispatch, useSelector } from "react-redux";
import { handleNext, handlePrev } from "../redux/slices/stepper";
import { validateAllData } from "../utils/validation";
import { handleFormError } from "../redux/slices/form";
import { postJobData, postJobValidation } from "../description/jobForm";
import { removeProperty } from "../utils/constFunction";
import { ContractTypeContainer } from "./ContractTypeContainer";

export const JobFormContainer = () => {
  console.log("job form rendered");
  const dispatch = useDispatch();
  const { activeForm } = useSelector((state) => state.stepper);
  const formData = useSelector((state) => state.formData);
  const { contractValidation } = ContractTypeContainer();

  const handleChange = (e) => {};

  const handleNavigation = (navigate) => {
    if (navigate === "prev") {
      dispatch(handlePrev(activeForm - 1));
    } else if (navigate === "next") {
      let validationData = formData[postJobData[activeForm]];
      let validationFields = postJobValidation[activeForm];
      if (activeForm === 3) {
        validationFields = contractValidation;
      }
      let error = validateAllData(validationData, validationFields);
      console.log("error", error);
      switch (activeForm) {
        case 1: {
          if (formData.jobDescription.engagement !== "Just for PSL") {
            console.log("RRRRRRR");
            delete error.engagementPSLAjencies;
          }
          console.log(formData.jobDescription.engagementPSLAjencies);
          if (
            formData.jobDescription.engagementPSLAjencies !==
              "Select PSL agency" ||
            formData.jobDescription.engagement !== "Just for PSL"
          ) {
            console.log("RRRR");
            delete error.PSLAgency;
          }
          break;
        }
        case 3: {
          removeProperty(error, formData.contractType);
        }
      }
      console.log("error", error);
      dispatch(handleFormError({ error, formName: postJobData[activeForm] }));
      if (!Object.keys(error).length) {
        dispatch(handleNext(activeForm + 1));
      }
    }
  };

  return {
    activeForm,
    handleChange,
    handleNavigation,
  };
};
