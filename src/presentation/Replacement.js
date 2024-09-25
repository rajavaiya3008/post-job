import React from "react";
import InputField from "../shared/InputField";
// import { useDispatch, useSelector } from "react-redux";
import { ContractTypeContainer } from "../container/ContractTypeContainer";
// import {
//   handleContractValidation,
//   handleReplacementFields,
// } from "../redux/slices/postjob";
// import { onChange } from "../redux/slices/form";
import CheckBoxField from "../shared/CheckBoxField";
import Button from "../shared/Button";

// const field = {
//     type:'number',
//     id:`${replacementFields.length+1}stReplacement`,
//     name:`${replacementFields.length+1}stReplacement`,
//     label:`${replacementFields.length+1}ST MONTH`,
//     placeholder:'Free Replacement'
// }

const Replacement = ({ handleChange, formName }) => {
  // const dispatch = useDispatch();
  const { replacementFields, formData, addFields, removeReplacement } =
    ContractTypeContainer({ formName });
  // const contractData = formData[formName];
  // const {replacementFields} = useSelector(state => state.postjob)
  // console.log("replacementFields", replacementFields);

  // const removeReplacement = (name) => {
  //   console.log("name", name);
  //   const newReplacementFields = replacementFields
  //     .filter((field) => field.name !== name)
  //     .map((field, i) => ({
  //       type: "number",
  //       id: `${i + 1}thReplacement`,
  //       name: `${i + 1}thReplacement`,
  //       label: `${i + 1}TH MONTH`,
  //       placeholder: "Free Replacement",
  //       disabledByCheckbox: `${i + 1}thReplacement`,
  //     }));
  //   // console.log("newReplacementFields", newReplacementFields);
  //   // console.log("contractValidation", contractValidation);
  //   const newValidation = Object.fromEntries(
  //     Object.entries(contractValidation).filter(
  //       ([key], i) => !key.includes("Replacement")
  //     )
  //   );
  //   // console.log("newValidation", newValidation);
  //   newReplacementFields.forEach((field) => {
  //     newValidation[field.name] = [
  //       { required: true, message: "Please Enter Replacement" },
  //     ];
  //   });
  //   // console.log("newValidation", newValidation);
  //   // console.log("contractData", contractData);
  //   dispatch(onChange({ name, value: "", formName }));
  //   dispatch(handleReplacementFields(newReplacementFields));
  //   dispatch(handleContractValidation(newValidation));
  // };

  return (
    <div className="mt-[20px]">
      {replacementFields?.map((field, i) => {
        const value = formData?.[formName]?.[field.name] ?? "";
        const error = formData?.error?.[formName]?.[field.name];
        const checked = value === true;
        const disabled = field?.disabledByCheckbox ? value === true : false;
        const inputDivStyle = `w-[400px] ${
          replacementFields.length !== 1 ? "ml-[20px]" : ""
        }`;
        switch (field.type) {
          case "number":
            return (
              <div key={i} className="relative">
                <Button
                  text={`X`}
                  onClick={() => removeReplacement(field.name)}
                  btnStyle={`absolute top-[30px] ${
                    replacementFields.length === 1 ? "hidden" : ""
                  }`}
                />
                {/* <button
                  onClick={() => removeReplacement(field.name)}
                  className={`absolute top-[30px] ${
                    replacementFields.length === 1 ? "hidden" : ""
                  }`}
                >
                  X
                </button> */}
                <InputField
                  {...{
                    ...field,
                    value,
                    error,
                    handleChange,
                    disabled,
                    isActive: true,
                    inputDivStyle,
                  }}
                />
                <CheckBoxField
                  key={i}
                  {...{
                    type: "checkbox",
                    id: field.id,
                    name: field.name,
                    value: field.name,
                    label: "Free replacement",
                    checked,
                    handleChange,
                    checkDivStyle: "absolute w-[200px] left-[70%] top-[35px]",
                  }}
                />
              </div>
            );
        }
      })}

      <Button
        text={`+ Add ${replacementFields?.length + 1} th month`}
        onClick={() => addFields()}
        btnStyle={`text-blue-700 mt-[20px]`}
      />
      {/* <button onClick={() => addFields()} className="text-blue-700 mt-[20px]">
        + Add {replacementFields?.length + 1} th month
      </button> */}
    </div>
  );
};
// absolute top-[${top}%] left-[-3%]

export default Replacement;

// {
//   type: "number",
//   id: "cvLimit",
//   name: "cvLimit",
//   label: "TOTAL CVS LIMIT",
//   placeholder: "Maximum Total CVs",
//   disabledByCheckbox: "cvLimit",
//   inputDivStyle: "w-[400px]",
// },
// {
//   type: "checkbox",
//   id: "cvLimitCheckBox",
//   name: "cvLimit",
//   value: "Unlimited CVs",
//   label: "Unlimited CVs?",
//   checkDivStyle: "absolute w-[200px] left-[70%] top-[55%]",
// },
