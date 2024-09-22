import React from 'react'
import { useSelector } from 'react-redux';
import RadioField from '../shared/RadioField';

const feeTypeRadioFields = [
    {
        type: "radio",
        id: "Fixed",
        name: "recruiterFeeType",
        value: "Fixed",
        label: "Fixed",
        radioStyle: "hidden",
        radioLabel:
          "w-[170px] p-[15px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
      },
      {
        type: "radio",
        id: "Percentage",
        name: "recruiterFeeType",
        value: "Percentage",
        label: "Percentage",
        active: ['Base Salary','Salary Range'],
        activeName: "salaryType",
        radioStyle: "hidden",
        radioLabel:
          "w-[170px] p-[15px] px-[30px] ml-[20px] text-[16px] text-center rounded-[10px] bg-gray-300",
      },
]

const RecruiterFee = ({handleChange,formName}) => {
    const formData = useSelector((state) => state.formData);
  return (
    <div className="mt-[30px]">
        {feeTypeRadioFields.map((field, i) => {
        const value = !field?.value
          ? formData?.[formName]?.[field.name]
          : field?.value ?? "";
        const checked = value === formData?.[formName]?.[field.name];
        const error = formData?.error?.[formName]?.[field.name];
        const isActive = !field?.active
            ? true
            : field.active.includes(formData?.[formName]?.[field.activeName]);
        switch (field.type) {
          case "radio":
            return (
              <RadioField
                key={i}
                {...{ ...field, checked, error, handleChange ,isActive}}
              />
            );
        }
      })}

      
    </div>
  )
}

export default RecruiterFee