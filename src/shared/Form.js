import React from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import DropDown from "./DropDown";
import RadioField from "./RadioField";
import RangeSlider from "./RangeSlider";
import CheckBoxField from "./CheckBoxField";
import { FormContainer } from "../container/FormContainer";

const Form = ({ formName, formValidation, inputFields }) => {
  const { formData, handleChange } = FormContainer({
    formName,
    formValidation,
  });
  return (
    <>
      {inputFields.map((field, i) => {
        let value =
          field?.value && field.type === "radio"
            ? field?.value
            : formData?.[formName]?.[field.name] ?? "";
        const checked =
          field.type === "radio"
            ? value === formData?.[formName]?.[field.name]
            : value === true;
        const error = formData?.error?.[formName]?.[field.name];
        const isActive = !field?.active
          ? true
          : field.active.includes(formData?.[formName]?.[field.activeName]);
        let rangeVal = field?.from ? value[0] : value[1] ?? 0;
        value = field.hasOwnProperty("from") ? rangeVal : value;
        const disabled = field?.disabled
          ? field?.disabled
          : field?.disabledByCheckbox
          ? value === true
          : false;
        switch (field.type) {
          case "text":
            return (
              <InputField
                key={i}
                {...{ ...field, value, error, handleChange, isActive }}
              />
            );
          case "number":
            return (
              <InputField
                key={i}
                {...{
                  ...field,
                  value,
                  error,
                  handleChange,
                  disabled,
                  isActive,
                }}
              />
            );
          case "text-area":
            return (
              <TextArea key={i} {...{ ...field, value, error, handleChange }} />
            );
          case "select":
            return (
              <DropDown key={i} {...{ ...field, value, error, handleChange }} />
            );
          case "radio":
            return (
              <RadioField
                key={i}
                {...{ ...field, checked, error, handleChange, isActive }}
              />
            );
          case "range":
            return (
              <RangeSlider key={i} {...{ ...field, value, handleChange }} />
            );
          case "checkbox":
            return (
              <CheckBoxField key={i} {...{ ...field, checked, handleChange }} />
            );
        }
      })}
    </>
  );
};

export default Form;
