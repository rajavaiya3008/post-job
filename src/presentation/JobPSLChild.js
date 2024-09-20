import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPslAgency } from "../redux/slices/form";
import RadioField from "../shared/RadioField";
import DropDown from "../shared/DropDown";
import { pslAgency, radioFields } from "../description/jobPSLChild";

const JobPSLChild = ({ handleChange, formName }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);
  const { activeForm } = useSelector((state) => state.stepper)
  const formError = formData.error[formName]

  // useEffect(() => {
  //   return () => {
  //     if(activeForm === 1){
  //       dispatch(clearPslAgency())
  //     }
  //   }
  // },[])

  return (
    <div className="mt-[30px]">
      {radioFields.map((field, i) => {
        const value = !field?.value
          ? formData?.[formName]?.[field.name]
          : field?.value ?? "";
        const checked = value === formData?.[formName]?.[field.name];
        const error = formData?.error?.[formName]?.[field.name];
        switch (field.type) {
          case "radio":
            return (
              <RadioField
                key={i}
                {...{ ...field, checked, error, handleChange ,isActive:true}}
              />
            );
        }
      })}
      <br />

      {formError.engagementPSLAjencies && <span className="text-[12px] text-red-500">{formError.engagementPSLAjencies}</span>}

      {pslAgency.visible === formData?.[formName]?.engagementPSLAjencies && (
        <div className="mt-[15px]">
          <DropDown
            {...{ ...pslAgency, handleChange }}
            value={formData?.[formName]?.[pslAgency.name]}
            error={formData?.error?.[formName]?.[pslAgency.name]}
          />
        </div>
      )}
    </div>
  );
};

export default JobPSLChild;
