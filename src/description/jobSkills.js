import Skill from "../presentation/Skill";

export const jobSkillsValidation = {
  seniorityLevel: [
    { required: true, message: "Please Provide Seniority Level" },
  ],
  experience: [
    { required: true, message: "Please Provide Seniority Experience" },
  ],
  management: [{ required: true, message: "Please Provide Management Skills" }],
  skill: [{ required: true, message: "Please Select Skills" }],
  skills: [{ length: 1, message: "Please Select at least one skill" }],
};

export const jobSkillData = [
  {
    formName: "jobSkills",
    sectionTitle: "Required seniority level",
    sectionVisible: 2,
    inputFields: [
      {
        type: "select",
        id: "seniorityLevel",
        name: "seniorityLevel",
        label: "SENIORITY LEVEL",
        defaultVal: "Choose Seniority Level",
        options: ["Entry Level", "Junior", "Mid-Level", "Senior"],
      },
    ],
  },
  {
    formName: "jobSkills",
    sectionTitle: "Required years of experience",
    inputFieldStyle: "mt-[30px]",
    sectionVisible: 2,
    inputFields: [
      {
        type: "radio",
        id: "0-3",
        name: "experience",
        value: "0-3",
        label: "0-3",
        radioStyle: "hidden",
        radioLabel:
          "w-[170px] p-[15px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
      },
      {
        type: "radio",
        id: "4-7",
        name: "experience",
        value: "4-7",
        label: "4-7",
        radioStyle: "hidden",
        radioLabel:
          "w-[170px] p-[15px] px-[30px] ml-[20px] text-[16px] text-center rounded-[10px] bg-gray-300",
      },
      {
        type: "radio",
        id: "7-10",
        name: "experience",
        value: "7-10",
        label: "7-10",
        radioStyle: "hidden",
        radioLabel:
          "w-[170px] p-[15px] px-[30px] ml-[20px] text-[16px] text-center rounded-[10px] bg-gray-300",
      },
      {
        type: "radio",
        id: "10+",
        name: "experience",
        value: "10+",
        label: "10+",
        radioStyle: "hidden",
        radioLabel:
          "w-[170px] p-[15px] px-[30px] ml-[20px] text-[16px] text-center rounded-[10px] bg-gray-300",
      },
      {
        type: "radio",
        id: "15+",
        name: "experience",
        value: "15+",
        label: "15+",
        radioStyle: "hidden",
        radioLabel:
          "w-[170px] p-[15px] px-[30px] ml-[20px] text-[16px] text-center rounded-[10px] bg-gray-300",
      },
      {
        type: "radio",
        id: "20+",
        name: "experience",
        value: "20+",
        label: "20+",
        radioStyle: "hidden",
        radioLabel:
          "w-[170px] p-[15px] px-[30px] ml-[20px] text-[16px] text-center rounded-[10px] bg-gray-300",
      },
    ],
  },
  {
    formName: "jobSkills",
    sectionTitle: "Management experience required",
    inputFieldStyle: "mt-[30px]",
    sectionVisible: 2,
    inputFields: [
      {
        type: "radio",
        id: "true",
        name: "management",
        value: "Required",
        label: "Yes",
        radioStyle: "hidden",
        radioLabel:
          "w-[170px] p-[15px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
      },
      {
        type: "radio",
        id: "false",
        name: "management",
        value: "Not Required",
        label: "No",
        radioStyle: "hidden",
        radioLabel:
          "w-[170px] p-[15px] px-[30px] ml-[50px] text-[16px] text-center rounded-[10px] bg-gray-300",
      },
    ],
  },
  {
    formName: "jobSkills",
    sectionTitle: "Choose skills required for your project",
    sectionVisible: 2,
    inputFields: [
      {
        type: "select",
        id: "skill",
        name: "skill",
        label: "SKILLS",
        defaultVal: "Choose Skill",
        options: ["ARNP", "Florida Medical License", "Engraving"],
      },
    ],
    childComponents: [
      {
        visible: "",
        name: "skill",
        ChildComponent: Skill,
      },
    ],
  },
];
