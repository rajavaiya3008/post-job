import React from "react";
import Section from "./Section";
// import { contractValidation } from "../description/contractType";
import { ContractTypeContainer } from "../container/ContractTypeContainer";

const ContractType = () => {
  const {contractFields,contractValidation} = ContractTypeContainer()

  return (
    <div className="border-black border-[1px] rounded-[20px] p-[25px]">
      {contractFields.map((section, i) => (
        <Section
          key={i}
          {...{ ...section }}
          formValidation={contractValidation}
        />
      ))}
    </div>
  );
};

export default ContractType;
