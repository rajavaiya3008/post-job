import { TEXT_INPUT } from "../utils/constantVariable";

export const allJobColData = ({ deleteJob }) => {
  return [
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
  id: "searchCity",
  name: "searchCity",
  placeholder: "Search",
};
