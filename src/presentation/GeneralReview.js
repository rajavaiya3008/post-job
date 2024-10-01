import React from "react";
import GeneralReviewContainer from "../container/generalReviewContainer";
import DisplayData from "./DisplayData";
import Button from "../shared/Button";

const GeneralReview = () => {
  const { allData, jobId, submitJobData } = GeneralReviewContainer();
  return (
    <div className="shadow-2xl border-[1px] rounded-[20px] p-[25px] flex flex-col gap-[50px]">
      {allData.map((data, i) => (
        <DisplayData key={i} {...{ ...data, activeForm: i + 1 }} />
      ))}
      <Button
        // text={"Post Now"}
        onClick={() => submitJobData()}
        btnStyle={`text-white hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-700`}
      >
        {jobId ? "Update Job" : "Post Now"}
      </Button>
    </div>
  );
};

export default GeneralReview;
