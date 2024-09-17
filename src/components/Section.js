import React from "react";
import InputField from "./InputField";
import { useDispatch, useSelector } from "react-redux";
import { handleFormError, onChange } from "../redux/slices/form";
import { validation } from "../utils/validation";
import TextArea from "./TextArea";
import DropDown from "./DropDown";
import RadioField from "./RadioField";

const Section = ({
  sectionTitle,
  inputFields,
  formName,
  formValidation,
  childComponents,
}) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(onChange({ name, value, formName }));
    const error = validation(name, value, formValidation);
    dispatch(handleFormError({ error, formName }));
  };

  return (
    <div>
      <h3>{sectionTitle}</h3>
      <div>
        {inputFields.map((field, i) => {
          const value = !field?.value
            ? formData?.[formName]?.[field.name]
            : field?.value ?? "";
          const checked = value === formData?.[formName]?.[field.name];
          const error = formData?.error?.[formName]?.[field.name];
          switch (field.type) {
            case "text":
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
                  {...{ ...field, checked, error, handleChange }}
                />
              );
          }
        })}
      </div>
      {childComponents?.map(({ name, visible, ChildComponent }, i) =>
        visible === formData?.[formName]?.[name] ? (
          <ChildComponent key={i} {...{handleChange,formName}}/>
        ) : null
      )}
    </div>
  );
};

export default Section;
