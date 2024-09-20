import React from "react";
import { useSelector } from "react-redux";
import { stepperDetail } from "../description/stepper";

const Stepper = () => {
    const {activeForm} = useSelector(state => state.stepper)
    console.log('activeForm', activeForm)
  return (
    <div className="ml-[30px] mt-[30px] w-[400px]">
      <ol className="relative text-gray-500 border-s border-gray-200 w-[200px] translate-x-[50px]">
        {
            stepperDetail.map((stepper,i) => {
                return <li className="mb-10 ms-6" key={i}>
                <span className={`absolute flex items-center justify-center w-8 h-8 ${activeForm > i ? 'bg-blue-500' : 'bg-green-950'} rounded-full -start-4 ring-4 text-white ring-white`}>
                  {activeForm > i+1 ? '✓' : i+1}
                </span>
                <h3 className="font-medium text-gray-900 pt-[4px]">{stepper?.name}</h3>
              </li>
            })
        }
      </ol>
    </div>
  );
};

export default Stepper;
