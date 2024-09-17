import React from "react";
import Section from "./Section";
import JobPSLChild from "./JobPSLChild";

const formValidation = {
  jobTitle: [{ required: true, message: "Please Enter Job Title" }],
  jobDesc: [
    { required: true, message: "Please Enter Job Description" },
    { length: 20, message: "Password Must be 350 char" },
  ],
  industry: [{ required: true, message: "Please Choose Industry" }],
  engagement: [{ required: true, message: "Please Select Engagement" }],
  engagementPSLAjencies: [{ required: true, message: "Please Select Ajency" }],
  PSLAgency: [{ required: true, message: "Please Select Ajency" }]
};

const JobDescData = [
  {
    formName: "jobDescription",
    sectionTitle: "Write a headline for your job post",
    inputFields: [
      {
        type: "text",
        id: "jobTitle",
        name: "jobTitle",
        label: "JOB TITLE",
        placeholder: "Job Title",
      },
    ],
  },
  {
    formName: "jobDescription",
    sectionTitle: "Describe the job in more details",
    inputFields: [
      {
        type: "text-area",
        id: "jobDesc",
        name: "jobDesc",
        placeholder: "Job Description...",
      },
    ],
  },
  {
    formName: "jobDescription",
    sectionTitle: "Choose Industry",
    inputFields: [
      {
        type: "select",
        id: "industry",
        name: "industry",
        label: "IDUSTRY",
        defaultVal: "Choose Industry",
        options: ["Mobile Games", "Tobacco", "Fund Raising"],
      },
    ],
  },
  {
    formName: "jobDescription",
    sectionTitle: "Engagement",
    inputFields: [
      {
        type: "radio",
        id: "engagement",
        name: "engagement",
        value: "Just for PSL",
        label: "Just for PSL",
      },
      {
        type: "radio",
        id: "engagement",
        name: "engagement",
        value: "All agencies",
        label: "All agencies",
      },
      {
        type: "radio",
        id: "engagement",
        name: "engagement",
        value: "All agencies except PSL",
        label: "All agencies except PSL",
      },
    ],
    childComponents: [
      {
        visible: "Just for PSL",
        name: "engagement",
        ChildComponent: JobPSLChild,
      },
    ],
  },
];

const JobDescription = () => {
  return (
    <div>
      {JobDescData.map((section, i) => (
        <Section key={i} {...{ ...section, formValidation }} />
      ))}
    </div>
  );
};

export default JobDescription;
