import { useDispatch, useSelector } from "react-redux";
import { handleFormError, onChange } from "../redux/slices/form";
import { validation } from "../utils/validation";

export const SectionContainer = ({ formName, formValidation }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);
  const formError = { ...formData.error[formName] };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log("checked", checked);
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
          value: !formData?.[formName]?.skills.includes(value)
            ? [...formData?.[formName]?.skills, value]
            : [...formData?.[formName]?.skills],
          formName,
        };
        dispatch(onChange(payload));
        break;
      }
      case "employmentType": {
        const payload = {
          name: "salaryType",
          value: "",
          formName,
        };
        dispatch(onChange(payload));
      }
    }
    type === "checkbox"
      ? dispatch(onChange({ name, value: checked, formName }))
      : dispatch(onChange({ name, value, formName }));
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
