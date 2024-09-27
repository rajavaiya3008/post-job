import { postJobData, postJobValidation } from "../description/jobForm";
import { validateAllData } from "./validation";

const handleReplacement = (formData) => {
  const formDataEntries = Object.entries(formData);
  const replacement = formDataEntries
    .filter(([key]) => key.includes("Replacement"))
    .map(([key, val]) => {
      return val === true
        ? `Free replacement  - ${key} refund`
        : `${val} %  - ${key} refund`;
    });
  const updatedFormData = Object.fromEntries(
    formDataEntries.filter(([key]) => !key.includes("Replacement"))
  );
  if (replacement.length) {
    updatedFormData.replacement = replacement;
  }
  return updatedFormData;
};

export const filterPostJobData = (data, fields, formName) => {
  let formData = Object?.fromEntries(
    Object?.entries(data)?.filter(([key], i) => fields?.includes(key))
  );
  switch (formName) {
    case "jobDescription": {
      if (formData.engagementPSLAjencies !== "Select all PSL agencies") {
        delete formData.engagementPSLAjencies;
        break;
      }
    }
    case "jobSkills": {
      delete formData.skill;
      break;
    }
    case "contractType": {
      formData = handleReplacement(formData);
      break;
    }
    case "recruitmentInfo": {
      delete formData.termsAndServices;
      if (formData.cvLimit === true) {
        formData.unlimitedCVs = "Yes";
        delete formData.cvLimit;
      } else {
        if (Object.keys(formData).length) {
          formData.unlimitedCVs = "No";
        }
      }
      break;
    }
  }
  return formData;
};

export const isAllDataPresent = (allData) => {
  return allData.every(
    (data) =>
      Object.keys(data).length > 1 &&
      Object.values(data).every((val) => val.length > 0)
  );
};

export const allDataValidation = ({
  activeForm,
  formData,
  contractValidation,
}) => {
  let validationData = formData[postJobData[activeForm]];
  let validationFields = postJobValidation[activeForm];
  switch (activeForm) {
    case 1: {
      if (formData.jobDescription.engagement !== "Just for PSL") {
        const jobDescValidation = { ...validationFields };
        delete jobDescValidation.engagementPSLAjencies;
        validationFields = jobDescValidation;
      }
      if (
        formData.jobDescription.engagementPSLAjencies !== "Select PSL agency" ||
        formData.jobDescription.engagement !== "Just for PSL"
      ) {
        const jobDescValidation = { ...validationFields };
        delete jobDescValidation.PSLAgency;
        validationFields = jobDescValidation;
      }
      return [
        validateAllData(validationData, validationFields),
        validationFields,
      ];
    }
    case 2: {
      return [
        validateAllData(validationData, validationFields),
        validationFields,
      ];
    }
    case 3: {
      validationFields = contractValidation;
      return [
        validateAllData(validationData, validationFields),
        validationFields,
      ];
    }
    case 4: {
      return [
        validateAllData(validationData, validationFields),
        validationFields,
      ];
    }
  }
  // let error = validateAllData(validationData, validationFields);
};

export const handlePagination = ({ allJobData, deleteJob }) => {
  const tableColumn = [
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
  let tableRows = Object.entries(allJobData).map(([key, val]) => ({
    id: key,
    jobName: val.jobDescription.jobTitle,
  }));
  return [tableColumn, tableRows];
};
