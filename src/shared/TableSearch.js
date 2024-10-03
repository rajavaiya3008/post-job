import React from "react";
import { CITY, SELECT_INPUT, TEXT_INPUT } from "../utils/constantVariable";
import InputField from "./InputField";
import DropDown from "./DropDown";

const TableSearch = ({
  searchFields,
  input,
  handleChange,
  cityOptions,
  countryOptions,
}) => {
  return (
    <>
      {searchFields.map((field, i) => {
        const value = input[field.name] ?? "";
        switch (field.type) {
          case TEXT_INPUT: {
            return (
              <InputField
                key={i}
                {...{
                  ...field,
                  value,
                  handleChange,
                  isActive: true,
                }}
              />
            );
          }
          case SELECT_INPUT: {
            const options = field.name === CITY ? cityOptions : countryOptions;
            return (
              <DropDown
                key={i}
                {...{ ...field, value, handleChange, options }}
              />
            );
          }
        }
      })}
    </>
  );
};

export default TableSearch;
