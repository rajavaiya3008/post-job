import { SELECT_INPUT, TEXT_INPUT } from "../utils/constantVariable";

export const allJobColData = ({ deleteJob }) => {
  return [
    {
      type: "checkbox",
      label: "",
    },
    {
      type: "text",
      name: "id",
      label: "ID",
    },
    {
      type: "text",
      name: "jobName",
      label: "Job Name",
    },
    {
      type: "text",
      name: "employmentType",
      label: "Employment Type",
    },
    {
      type: "text",
      name: "workType",
      label: "Work Type",
    },
    {
      type: "text",
      name: "city",
      label: "City",
    },
    {
      type: "text",
      name: "country",
      label: "Country",
    },
    {
      type: "link",
      label: "Edit",
      linkArr: [
        {
          name: "Edit",
        },
      ],
    },
    {
      type: "button",
      label: "Delete",
      btnArr: [
        {
          name: "Delete",
          onClick: deleteJob,
        },
      ],
    },
  ];
};

export const inputData = {
  type: TEXT_INPUT,
  id: "search",
  name: "search",
  placeholder: "Search",
};

export const searchKey = ["jobName", "employmentType", "workType"];

export const searchFields = [
  {
    type: TEXT_INPUT,
    id: "search",
    name: "search",
    placeholder: "Search",
    inputDivStyle: "w-[250px] mx-auto mt-[20px] mb-[20px]",
  },
  {
    type: SELECT_INPUT,
    id: "city",
    name: "city",
    // label: "City",
    defaultVal: "Select City",
    selectLabel: "absolute top-[-25px] text-[15px] text-gray-900",
    selectDiv: "relative w-[200px] top-[-65px]",
    style:
      "w-[150px] bg-blue-50 border border-gray-300 text-gray-400 text-lg rounded-lg p-2.5",
  },
  {
    type: SELECT_INPUT,
    id: "country",
    name: "country",
    defaultVal: "Select Country",
    selectDiv: "relative w-[200px] top-[-107px] left-[830px]",
    style:
      "w-[170px] bg-blue-50 border border-gray-300 text-gray-400 text-lg rounded-lg p-2.5",
    // options: ["ReactJs", "Api Testing"],
  },
];
