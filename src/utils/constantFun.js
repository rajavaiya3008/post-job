import { allJobColData } from "../description/allJob.description";
import { postJobData, postJobValidation } from "../description/jobForm";
import {
  getNumber,
  objectEntries,
  objectFromEntries,
  objectKeys,
} from "./commonFunction";
import {
  CONT_TYPE,
  FIXED,
  JOB_DESC,
  JOB_SKILLS,
  NEGOTIABLE,
  RECRUITMENT_INFO,
} from "./constantVariable";
import { validateAllData } from "./validation";

const handleReplacement = (formData) => {
  const formDataEntries = objectEntries(formData);
  const replacement = formDataEntries
    .filter(([key]) => key.includes("Replacement"))
    .map(([key, val]) => {
      const replaceNumMatch = getNumber(key);
      const replaceNum = replaceNumMatch ? Number(replaceNumMatch[1]) : 0;

      const ordinalSuffix = getOrdinalSuffix(replaceNum).toLowerCase();

      const title = `${replaceNum}${ordinalSuffix} Replacement`;

      return val === true
        ? `Free replacement - ${title} refund`
        : `${val} % - ${title} refund`;
    });
  const updatedFormData = objectFromEntries(
    formDataEntries.filter(([key]) => !key.includes("Replacement"))
  );
  if (replacement.length) {
    updatedFormData.replacement = replacement;
  }
  return updatedFormData;
};

export const filterPostJobData = (data, fields, formName) => {
  let formData = objectFromEntries(
    objectEntries(data)?.filter(([key], i) => fields?.includes(key))
  );
  switch (formName) {
    case JOB_DESC: {
      if (formData.engagementPSLAjencies !== "Select all PSL agencies") {
        delete formData.engagementPSLAjencies;
        break;
      }
    }
    case JOB_SKILLS: {
      delete formData.skill;
      break;
    }
    case CONT_TYPE: {
      formData = handleReplacement(formData);
      break;
    }
    case RECRUITMENT_INFO: {
      delete formData.termsAndServices;
      if (formData.cvLimit === true) {
        formData.unlimitedCVs = "Yes";
        delete formData.cvLimit;
      } else {
        if (objectKeys(formData).length) {
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
      objectKeys(data).length > 1 &&
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
      let err = validateAllData(validationData, validationFields);
      if (formData.jobDescription.engagement !== "Just for PSL") {
        delete err.engagementPSLAjencies;
        // const jobDescValidation = { ...validationFields };
        // delete jobDescValidation.engagementPSLAjencies;
        // validationFields = jobDescValidation;
      }
      if (
        formData.jobDescription.engagementPSLAjencies !== "Select PSL agency" ||
        formData.jobDescription.engagement !== "Just for PSL"
      ) {
        delete err.PSLAgency;
        // const jobDescValidation = { ...validationFields };
        // delete jobDescValidation.PSLAgency;
        // validationFields = jobDescValidation;
      }
      return [err, validationFields];
    }
    case 2: {
      return [
        validateAllData(validationData, validationFields),
        validationFields,
      ];
    }
    case 3: {
      validationFields = contractValidation;
      let err = validateAllData(validationData, validationFields);
      if (formData?.contractType?.salaryType === NEGOTIABLE) {
        delete err.currency;
      }
      if (formData.contractType.recruiterFeeType === FIXED) {
        delete err.recruiterFeePercentage;
      } else {
        delete err.recruiterFeeAmount;
      }
      return [err, validationFields];
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
  const tableColumn = allJobColData({ deleteJob });
  let tableRows = objectEntries(allJobData).map(([key, val]) => ({
    id: key,
    jobName: val.jobDescription.jobTitle,
    employmentType: val.contractType.employmentType,
    workType: val.jobDescription.workType,
    city: val.jobDescription.city.split("(")[0],
    country: val.jobDescription.country,
  }));
  return [tableColumn, tableRows];
};

export const getOrdinalSuffix = (number) => {
  const modulo10 = number % 10;
  const modulo100 = number % 100;

  if (modulo10 === 1 && modulo100 !== 11) {
    return "ST";
  } else if (modulo10 === 2 && modulo100 !== 12) {
    return "ND";
  } else if (modulo10 === 3 && modulo100 !== 13) {
    return "RD";
  } else {
    return "TH";
  }
};

export const filterTableData = (tableRows, searchVal, searchKeys) => {
  const lowerSearchVal = searchVal.toLowerCase().trim();

  return tableRows.filter((row) =>
    searchKeys.some((key) => row[key].toLowerCase().includes(lowerSearchVal))
  );
};
