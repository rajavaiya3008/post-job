import React from "react";
import Stepper from "./Stepper";
import JobForm from "./JobForm";
import PostJobContainer from "../container/PostJobContainer";

const PostJob = () => {
  PostJobContainer();
  return (
    <div className="flex">
      <Stepper />
      <JobForm />
    </div>
  );
};

export default PostJob;
