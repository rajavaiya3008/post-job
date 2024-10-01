import React from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import DropDown from "./DropDown";
import RadioField from "./RadioField";
import RangeSlider from "./RangeSlider";
import CheckBoxField from "./CheckBoxField";
import { FormContainer } from "../container/formContainer";
import {
  CHECKBOX_INPUT,
  NUM_INPUT,
  RADIO_INPUT,
  RANGE_INPUT,
  SELECT_INPUT,
  TEXT_AREA_INPUT,
  TEXT_INPUT,
} from "../utils/constantVariable";

const Form = ({ formName, formValidation, inputFields }) => {
  const { formData, handleChange } = FormContainer({
    formName,
    formValidation,
  });
  return (
    <>
      {inputFields.map((field, i) => {
        let value =
          field?.value && field.type === RADIO_INPUT
            ? field?.value
            : formData?.[formName]?.[field.name] ?? "";
        const checked =
          field.type === RADIO_INPUT
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
          case TEXT_INPUT:
            return (
              <InputField
                key={i}
                {...{ ...field, value, error, handleChange, isActive }}
              />
            );
          case NUM_INPUT:
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
          case TEXT_AREA_INPUT:
            return (
              <TextArea key={i} {...{ ...field, value, error, handleChange }} />
            );
          case SELECT_INPUT:
            return (
              <DropDown key={i} {...{ ...field, value, error, handleChange }} />
            );
          case RADIO_INPUT:
            return (
              <RadioField
                key={i}
                {...{ ...field, checked, error, handleChange, isActive }}
              />
            );
          case RANGE_INPUT:
            return (
              <RangeSlider key={i} {...{ ...field, value, handleChange }} />
            );
          case CHECKBOX_INPUT:
            return (
              <CheckBoxField key={i} {...{ ...field, checked, handleChange }} />
            );
        }
      })}
    </>
  );
};

export default Form;
