import React from "react";
import InputField from "../shared/InputField";
import TextArea from "../shared/TextArea";
import DropDown from "../shared/DropDown";
import RadioField from "../shared/RadioField";
import { SectionContainer } from "../container/SectionContainer";
import { sectionErrorConditions } from "../description/section";

const Section = ({
  sectionTitle,
  inputFields,
  formName,
  formValidation,
  childComponents,
  style,
  inputFieldStyle,
}) => {
  const { formData, formError, handleChange } = SectionContainer({
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
          let value = !field?.value
            ? formData?.[formName]?.[field.name]
            : field?.value ?? "";
          const checked = value === formData?.[formName]?.[field.name];
          const error = formData?.error?.[formName]?.[field.name];
          const isActive = !field?.active
            ? true
            : field.active.includes(formData?.[formName]?.[field.activeName]);
          switch (field.type) {
            case "text":
              return (
                <InputField
                  key={i}
                  {...{ ...field, value, error, handleChange }}
                />
              );
              case "number":
                return (
                  <InputField
                    key={i}
                    {...{ ...field, value, error, handleChange }}
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

export default Section;
