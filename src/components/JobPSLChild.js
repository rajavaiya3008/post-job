import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPslAgency } from "../redux/slices/form";
import RadioField from "./RadioField";
import DropDown from "./DropDown";

const radioFields = [
  {
    type: "radio",
    id: "engagementPSLAjencies",
    name: "engagementPSLAjencies",
    value: "Select all PSL agencies",
    label: "Select all PSL agencies",
  },
  {
    type: "radio",
    id: "engagementPSLAjencies",
    name: "engagementPSLAjencies",
    value: "Select PSL agency",
    label: "Select PSL agency",
  },
];

const pslAgency = {
  type: "select",
  id: "PSLAgency",
  name: "PSLAgency",
  label: "PSL AGENCY",
  defaultVal: "No Options",
  visible: "Select PSL agency",
  options: ['hello','hii'],
};

const JustPSLChild = ({ handleChange, formName }) => {
  const dispatch = useDispatch()
  const formData = useSelector((state) => state.formData);

  useEffect(() => {
    return () => {
      dispatch(clearPslAgency())
    }
  },[])

  return (
    <div>
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
                {...{ ...field, checked, error, handleChange }}
              />
            );
        }
      })}

      {pslAgency.visible === formData?.[formName]?.engagementPSLAjencies && (
        <DropDown
          {...{ ...pslAgency, handleChange }}
          value={formData?.[formName]?.[pslAgency.name]}
          error={formData?.error?.[formName]?.[pslAgency.name]}
        />
      )}
    </div>
  );
};

export default JustPSLChild;
