import React from "react";
import FormFields from "./FormFields";
// import { contractValidation } from "../description/contractType";
import { ContractTypeContainer } from "../container/ContractTypeContainer";

const ContractType = () => {
  const { contractFields, contractValidation } = ContractTypeContainer();

  return (
    <div className="shadow-2xl border-[1px] rounded-[20px] p-[25px]">
      {contractFields.map((section, i) => (
        <FormFields
          key={i}
          {...{ ...section, formValidation: contractValidation }}
          // formValidation={contractValidation}
        />
      ))}
    </div>
  );
};

export default ContractType;
