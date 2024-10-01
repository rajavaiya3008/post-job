import { useDispatch, useSelector } from "react-redux";
import { handleFormError, onChange } from "../redux/slices/form";
import { validation } from "../utils/validation";
import { resetFinalFormFields } from "../redux/slices/postjob";
import { objectKeys } from "../utils/commonFunction";
import {
  BASE_SALARY,
  CHECKBOX_INPUT,
  CITY,
  COUNTRY,
  CURRENCY,
  DAILY_RANGE,
  EMPLOYMENTTYPE,
  NUM_INPUT,
  RATE_RANGE,
  RECRUITMENTFEEAMOUNT,
  RECRUITMENTFEEPERCENTAGE,
  RECRUITMENTFEETYPE,
  SALARYTYPE,
  SALARY_RANGE,
  SKILL,
  SKILLS,
} from "../utils/constantVariable";

export const FormContainer = ({ formName, formValidation }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);
  const formError = { ...formData.error[formName] };

  const handleChange = (e) => {
    const { name, value, type, checked, max } = e.target;
    switch (name) {
      case CITY:
        {
          const payload = {
            name: COUNTRY,
            value: value?.split("(")?.[1]?.trim()?.replace(")", "") ?? "",
            formName,
          };
          dispatch(onChange(payload));
        }
        break;
      case SKILL: {
        // console.log("skills arr", formData?.[formName]?.skills);
        const payload = {
          name: SKILLS,
          value:
            !formData?.[formName]?.skills.includes(value) && value
              ? [...formData?.[formName]?.skills, value]
              : [...formData?.[formName]?.skills],
          formName,
        };
        dispatch(onChange(payload));
        break;
      }
      case EMPLOYMENTTYPE: {
        dispatch(onChange({ name: SALARYTYPE, value: "", formName }));
        dispatch(resetFinalFormFields({ formName }));
        break;
      }
      case SALARYTYPE: {
        dispatch(onChange({ name: RECRUITMENTFEETYPE, value: "", formName }));
        dispatch(onChange({ name: RECRUITMENTFEEAMOUNT, value: "", formName }));
        dispatch(
          onChange({ name: RECRUITMENTFEEPERCENTAGE, value: "", formName })
        );
        dispatch(onChange({ name: CURRENCY, value: "", formName }));
        switch (value) {
          case "Base Salary": {
            dispatch(onChange({ name: BASE_SALARY, value: "", formName }));
            break;
          }
          case "Salary Range": {
            dispatch(onChange({ name: SALARY_RANGE, value: [0, 0], formName }));
            break;
          }
          case "Daily Rate": {
            dispatch(onChange({ name: DAILY_RANGE, value: "", formName }));
            break;
          }
          case "Rate Range": {
            dispatch(onChange({ name: RATE_RANGE, value: [0, 0], formName }));
            break;
          }
        }
        break;
      }
    }
    switch (type) {
      case CHECKBOX_INPUT: {
        dispatch(onChange({ name, value: checked, formName }));
        break;
      }
      case NUM_INPUT: {
        max && Number(value) > Number(max)
          ? dispatch(onChange({ name, value: max, formName }))
          : dispatch(onChange({ name, value, formName }));
        break;
      }
      default: {
        dispatch(onChange({ name, value, formName }));
        break;
      }
    }
    // type === "checkbox"
    //   ? dispatch(onChange({ name, value: checked, formName }))
    //   : dispatch(onChange({ name, value, formName }));
    // dispatch(onChange({ name, value, formName }));
    let error = validation(name, value, formValidation);
    if (!objectKeys(error).length) {
      delete formError[name];
      error = formError;
    }
    error = { ...formError, ...error };
    dispatch(handleFormError({ error, formName }));
  };

  return { formData, formError, handleChange };
};
