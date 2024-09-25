import { useDispatch, useSelector } from "react-redux";
import { handleFormError, onChange } from "../redux/slices/form";
import { validation } from "../utils/validation";
import { resetFinalFormFields } from "../redux/slices/postjob";

export const FormFieldsContainer = ({ formName, formValidation }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);
  const formError = { ...formData.error[formName] };

  const handleChange = (e) => {
    const { name, value, type, checked, max } = e.target;
    switch (name) {
      case "city":
        {
          const payload = {
            name: "country",
            value: value?.split("(")?.[1]?.trim()?.replace(")", "") ?? "",
            formName,
          };
          dispatch(onChange(payload));
        }
        break;
      case "skill": {
        const payload = {
          name: "skills",
          value:
            !formData?.[formName]?.skills.includes(value) && value
              ? [...formData?.[formName]?.skills, value]
              : [...formData?.[formName]?.skills],
          formName,
        };
        dispatch(onChange(payload));
        break;
      }
      case "employmentType": {
        dispatch(onChange({ name: "salaryType", value: "", formName }));
        dispatch(resetFinalFormFields({ formName }));
        break;
      }
      case "salaryType": {
        dispatch(onChange({ name: "recruiterFeeType", value: "", formName }));
        dispatch(onChange({ name: "recruiterFeeAmount", value: "", formName }));
        dispatch(
          onChange({ name: "recruiterFeePercentage", value: "", formName })
        );
        dispatch(onChange({ name: "currency", value: "", formName }));
        switch (value) {
          case "Base Salary": {
            dispatch(onChange({ name: "baseSalary", value: "", formName }));
            break;
          }
          case "Salary Range": {
            dispatch(
              onChange({ name: "salaryRange", value: [0, 0], formName })
            );
            break;
          }
          case "Daily Rate": {
            dispatch(onChange({ name: "dailyRate", value: "", formName }));
            break;
          }
          case "Rate Range": {
            dispatch(onChange({ name: "rateRange", value: [0, 0], formName }));
            break;
          }
        }
        break;
      }
    }
    switch (type) {
      case "checkbox": {
        dispatch(onChange({ name, value: checked, formName }));
        break;
      }
      case "number": {
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
    if (!Object.keys(error).length) {
      delete formError[name];
      error = formError;
    }
    error = { ...formError, ...error };
    dispatch(handleFormError({ error, formName }));
  };

  return { formData, formError, handleChange };
};
