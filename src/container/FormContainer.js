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
  EMPLOYMENT_TYPE,
  NUM_INPUT,
  RATE_RANGE,
  RECRUITMENT_FEE_AMOUNT,
  RECRUITMENT_FEE_PERCENTAGE,
  RECRUITMENT_FEE_TYPE,
  SALARY_TYPE,
  SALARY_RANGE,
  SKILL,
  SKILLS,
  SAL_BASE,
  SAL_RANGE,
  SAL_DAILY,
  SAL_RATE_RANGE,
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
      case EMPLOYMENT_TYPE: {
        dispatch(onChange({ name: SALARY_TYPE, value: "", formName }));
        dispatch(resetFinalFormFields({ formName }));
        break;
      }
      case SALARY_TYPE: {
        dispatch(onChange({ name: RECRUITMENT_FEE_TYPE, value: "", formName }));
        dispatch(
          onChange({ name: RECRUITMENT_FEE_AMOUNT, value: "", formName })
        );
        dispatch(
          onChange({ name: RECRUITMENT_FEE_PERCENTAGE, value: "", formName })
        );
        dispatch(onChange({ name: CURRENCY, value: "", formName }));
        switch (value) {
          case SAL_BASE: {
            dispatch(onChange({ name: BASE_SALARY, value: "", formName }));
            break;
          }
          case SAL_RANGE: {
            dispatch(onChange({ name: SALARY_RANGE, value: [0, 0], formName }));
            break;
          }
          case SAL_DAILY: {
            dispatch(onChange({ name: DAILY_RANGE, value: "", formName }));
            break;
          }
          case SAL_RATE_RANGE: {
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
