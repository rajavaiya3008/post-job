import React from "react";
import InputField from "../shared/InputField";
import TextArea from "../shared/TextArea";
import DropDown from "../shared/DropDown";
import RadioField from "../shared/RadioField";
import { FormFieldsContainer } from "../container/FormFieldsContainer";
import { sectionErrorConditions } from "../description/section";
import RangeSlider from "../shared/RangeSlider";
import CheckBoxField from "../shared/CheckBoxField";

const FormFields = ({
  sectionTitle,
  inputFields,
  formName,
  formValidation,
  childComponents,
  style,
  inputFieldStyle,
}) => {
  const { formData, formError, handleChange } = FormFieldsContainer({
    formName,
    formValidation,
  });

  return (
    <div
      className={
        style ? style : "pt-[10px] pb-[25px] border-b-[1px] border-gray-300"
      }
    >
      <h3 className="text-[17px]">{sectionTitle}</h3>
      <div className={inputFieldStyle ? inputFieldStyle : ""}>
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
                <TextArea
                  key={i}
                  {...{ ...field, value, error, handleChange }}
                />
              );
            case "select":
              return (
                <DropDown
                  key={i}
                  {...{ ...field, value, error, handleChange }}
                />
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
                <CheckBoxField
                  key={i}
                  {...{ ...field, checked, handleChange }}
                />
              );
          }
        })}
      </div>

      {sectionErrorConditions.map(
        ({ key, title }) =>
          formError[key] &&
          sectionTitle === title && (
            <span key={key} className="flex text-[12px] text-red-500 mt-[20px]">
              {formError[key]}
            </span>
          )
      )}

      {childComponents?.map(
        ({ name, visible, ChildComponent }, i) => {
          switch (name) {
            case "engagement": {
              return visible === formData?.[formName]?.[name] ? (
                <ChildComponent key={i} {...{ handleChange, formName }} />
              ) : null;
            }
            case "skill": {
              return <ChildComponent key={i} {...{ formName }} />;
            }
            case "rebateTime": {
              return <ChildComponent key={i} {...{ handleChange, formName }} />;
            }
            case "recruiterFee": {
              return <ChildComponent key={i} {...{ handleChange, formName }} />;
            }
          }
        }
        // visible === formData?.[formName]?.[name] ? (
        //   <ChildComponent key={i} {...{handleChange,formName}}/>
        // ) : null
      )}

      {/* {sectionErrorConditions.map(
        ({ key, title }) =>
          formError[key] &&
          sectionTitle === title && (
            <span key={key} className="flex text-[12px] text-red-500 mt-[20px]">
              {formError[key]}
            </span>
          )
      )} */}

      {/* {
        formError.engagement && sectionTitle === 'Engagement' && <span className="flex text-[12px] text-red-500 mt-[20px]">{formError.engagement}</span>
      }

       {
        formError.workType && sectionTitle === 'Workplace Type' && <span className="flex text-[12px] text-red-500 mt-[20px]">{formError.workType}</span>
      } */}
    </div>
  );
};

export default FormFields;
