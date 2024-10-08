import Replacement from "../presentation/Replacement";

export const contValidation = {
  employmentType: [
    { required: true, message: "Please Select Employment Type" },
  ],
  requiredTime: [{ required: true, message: "Please Select Required Time" }],
  contractLength: [
    { required: true, message: "Please Select Contract Length" },
  ],
  salaryType: [{ required: true, message: "Please Select Salary Type" }],
  rebateTime: [{ required: true, message: "Please Select Rebate Time" }],
  currency: [{ required: true, message: "Please Select Currency" }],
  baseSalary: [{ required: true, message: "Please Enter Salary" }],
  dailyRate: [{ required: true, message: "Please Enter Salary" }],
  recruiterFee: [{ required: true, message: "Please Select Recruiter Fee" }],
  recruiterFeeType: [
    { required: true, message: "Please Select Recruiter Fee Type" },
  ],
  recruiterFeeAmount: [
    { required: true, message: "Please Enter Recruiter Fee Amount" },
  ],
  recruiterFeePercentage: [
    { required: true, message: "Please Enter Recruiter Fee Percentage" },
  ],
  salaryRange: [{ type: "range", message: "Invalid Range" }],
  rateRange: [{ type: "range", message: "Invalid Range" }],
};

export const recruiterFeeFields = {
  formName: "contractType",
  sectionTitle: "Recruiter fee",
  inputFieldStyle: "mt-[30px] relative",
  sectionVisible: 3,
  inputFields: [
    {
      type: "radio",
      id: "Apply for all agencies recruiterFee",
      name: "recruiterFee",
      value: "Apply for all agencies",
      label: "Apply for all agencies",
    },
    {
      type: "radio",
      id: "Use default for PSL recruiterFee",
      name: "recruiterFee",
      value: "Use default for PSL",
      label: "Use default for PSL",
      radioStyle: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ml-[40px]",
    },
    {
      type: "radio",
      id: "Fixed",
      name: "recruiterFeeType",
      value: "Fixed",
      label: "Fixed",
      radioStyle: "hidden",
      radioLabel:
        "flex w-[140px] p-[15px] px-[30px] mt-[20px] text-[16px] text-center rounded-[10px] bg-gray-300",
    },
    {
      type: "number",
      id: "recruiterFeeAmount",
      name: "recruiterFeeAmount",
      label: "FIXED FEE",
      active: ["Fixed"],
      activeName: "recruiterFeeType",
      inputDivStyle: "w-[73%] absolute top-[30px] left-[27%]",
    },
    {
      type: "radio",
      id: "Percentage",
      name: "recruiterFeeType",
      value: "Percentage",
      label: "Percentage",
      active: ["Base Salary", "Salary Range"],
      activeName: "salaryType",
      radioStyle: "hidden",
      radioLabel:
        "flex w-[140px] p-[15px] px-[30px] mt-[20px] text-[16px] text-center rounded-[10px] bg-gray-300",
    },
    {
      type: "number",
      id: "recruiterFeePercentage",
      name: "recruiterFeePercentage",
      label: "PERCENTAGE FEE",
      active: ["Percentage"],
      activeName: "recruiterFeeType",
      inputDivStyle: "w-[75%] absolute top-[105px] left-[25%]",
      min: 0,
      max: 100,
    },
  ],
  // childComponents: [
  //   {
  //     visible: "",
  //     name: "recruiterFee",
  //     ChildComponent: RecruiterFee,
  //   },
  // ],
};

const currencyField = {
  type: "select",
  id: "currency",
  name: "currency",
  label: "CURRENCY",
  defaultVal: "Select Currency",
  options: ["USD", "EUR", "CHF", "GBP"],
};

export const rateRangeFields = {
  formName: "contractType",
  sectionTitle: "Rate Range",
  sectionVisible: 3,
  inputFields: [
    {
      type: "range",
      id: "rateRange",
      name: "rateRange",
      min: 0,
      max: 1000000,
    },
    currencyField,
    {
      type: "number",
      id: "range",
      name: "rateRange",
      label: "FROM",
      disabled: true,
      from: true,
    },
    {
      type: "number",
      id: "range",
      name: "rateRange",
      label: "TO",
      disabled: true,
      from: false,
    },
  ],
};

export const salaryRangeFields = {
  formName: "contractType",
  sectionTitle: "Salary Range",
  sectionVisible: 3,
  inputFields: [
    {
      type: "range",
      id: "salaryRange",
      name: "salaryRange",
      min: 0,
      max: 1000000,
    },
    currencyField,
    {
      type: "number",
      id: "range",
      name: "salaryRange",
      label: "FROM",
      disabled: true,
      from: true,
    },
    {
      type: "number",
      id: "range",
      name: "salaryRange",
      label: "TO",
      disabled: true,
      from: false,
    },
  ],
};

export const dailyRateFields = {
  formName: "contractType",
  sectionTitle: "Daily Rate",
  sectionVisible: 3,
  inputFields: [
    currencyField,
    {
      type: "number",
      id: "dailyRate",
      name: "dailyRate",
      label: "DAILY RATE",
      placeholder: "Salary",
    },
  ],
};

export const negotiableField = {
  formName: "contractType",
  sectionTitle: "Negotiable salary",
  inputFields: [currencyField],
};

export const baseSalaryFields = {
  formName: "contractType",
  sectionTitle: "Base salary",
  sectionVisible: 3,
  inputFields: [
    currencyField,
    {
      type: "number",
      id: "baseSalary",
      name: "baseSalary",
      label: "SALARY",
      placeholder: "Salary",
    },
  ],
};

export const rebateTimeFields = {
  formName: "contractType",
  sectionTitle: "Rebate time",
  inputFieldStyle: "mt-[30px]",
  sectionVisible: 3,
  inputFields: [
    {
      type: "radio",
      id: "Apply for all agencies",
      name: "rebateTime",
      value: "Apply for all agencies",
      label: "Apply for all agencies",
    },
    {
      type: "radio",
      id: "Use default for PSL",
      name: "rebateTime",
      value: "Use default for PSL",
      label: "Use default for PSL",
      radioStyle: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ml-[40px]",
    },
  ],
  childComponents: [
    {
      visible: "",
      name: "rebateTime",
      ChildComponent: Replacement,
    },
  ],
};

export const salaryTypeFields = {
  formName: "contractType",
  sectionTitle: "Salary Type",
  name: "salaryType",
  inputFieldStyle: "mt-[30px] flex flex-wrap",
  sectionVisible: 3,
  inputFields: [
    {
      type: "radio",
      id: "Base Salary",
      name: "salaryType",
      value: "Base Salary",
      label: "Base Salary",
      active: ["", "Permanent", "Temporary", "Interim"],
      activeName: "employmentType",
      radioStyle: "hidden",
      radioLabel:
        "w-[170px] p-[15px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
    },
    {
      type: "radio",
      id: "Salary Range",
      name: "salaryType",
      value: "Salary Range",
      label: "Salary Range",
      active: ["", "Permanent", "Temporary", "Interim"],
      activeName: "employmentType",
      radioStyle: "hidden",
      radioLabel:
        "w-[170px] p-[15px] ml-[20px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
    },
    {
      type: "radio",
      id: "Negotiable",
      name: "salaryType",
      value: "Negotiable",
      label: "Negotiable",
      active: ["", "Permanent", "Temporary", "Interim"],
      activeName: "employmentType",
      radioStyle: "hidden",
      radioLabel:
        "w-[170px] p-[15px] ml-[20px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
    },
    {
      type: "radio",
      id: "Daily Rate",
      name: "salaryType",
      value: "Daily Rate",
      label: "Daily Rate",
      active: ["", "Freelance"],
      activeName: "employmentType",
      radioStyle: "hidden",
      radioLabel:
        "w-[170px] p-[15px] mt-[10px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
    },
    {
      type: "radio",
      id: "Rate Range",
      name: "salaryType",
      value: "Rate Range",
      label: "Rate Range",
      active: ["", "Freelance"],
      activeName: "employmentType",
      radioStyle: "hidden",
      radioLabel:
        "w-[170px] p-[15px] mt-[10px] ml-[20px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
    },
  ],
};

export const contractLength = {
  formName: "contractType",
  sectionTitle: "Specify contract length",
  sectionVisible: 3,
  inputFields: [
    {
      type: "select",
      id: "contractLength",
      name: "contractLength",
      label: "CONTRACT LENGTH",
      defaultVal: "Length in months",
      options: ["1 Month", "3 Months", "6 Months", "Others"],
    },
  ],
};

export const contractData = [
  {
    formName: "contractType",
    sectionTitle: "Choose employment type",
    name: "employmentType",
    inputFieldStyle: "mt-[30px]",
    sectionVisible: 3,
    inputFields: [
      {
        type: "radio",
        id: "Permanent",
        name: "employmentType",
        value: "Permanent",
        label: "Permanent",
        radioStyle: "hidden",
        radioLabel:
          "w-[170px] p-[15px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
      },
      {
        type: "radio",
        id: "Freelance",
        name: "employmentType",
        value: "Freelance",
        label: "Freelance",
        radioStyle: "hidden",
        radioLabel:
          "w-[170px] p-[15px] ml-[40px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
      },
      {
        type: "radio",
        id: "Temporary",
        name: "employmentType",
        value: "Temporary",
        label: "Temporary",
        radioStyle: "hidden",
        radioLabel:
          "w-[170px] p-[15px] ml-[40px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
      },
      {
        type: "radio",
        id: "Interim",
        name: "employmentType",
        value: "Interim",
        label: "Interim",
        radioStyle: "hidden",
        radioLabel:
          "w-[170px] p-[15px] ml-[40px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
      },
    ],
  },
  {
    formName: "contractType",
    sectionTitle: "What is a required time load",
    name: "requiredTime",
    inputFieldStyle: "mt-[30px]",
    sectionVisible: 3,
    inputFields: [
      {
        type: "radio",
        id: "Full Time",
        name: "requiredTime",
        value: "Full Time",
        label: "Full Time",
        radioStyle: "hidden",
        radioLabel:
          "w-[170px] p-[15px] px-[30px] text-[15px] text-center rounded-[10px] bg-gray-300",
      },
      {
        type: "radio",
        id: "Part Time",
        name: "requiredTime",
        value: "Part Time",
        label: "Part Time",
        radioStyle: "hidden",
        radioLabel:
          "w-[170px] p-[15px] ml-[50px] px-[30px] text-[15px] text-center rounded-[10px] bg-gray-300",
      },
    ],
  },
];

export const contractSections = {
  Permanent: [...contractData, salaryTypeFields, rebateTimeFields],
  Freelance: [...contractData, contractLength, salaryTypeFields],
  Temporary: [
    ...contractData,
    contractLength,
    salaryTypeFields,
    rebateTimeFields,
  ],
  Interim: [
    ...contractData,
    contractLength,
    salaryTypeFields,
    rebateTimeFields,
  ],
  Default: [
    ...contractData,
    contractLength,
    salaryTypeFields,
    rebateTimeFields,
  ],
};

const commonFields = [
  "employmentType",
  "requiredTime",
  "contractLength",
  "salaryType",
  "currency",
  "recruiterFee",
  "recruiterFeeType",
  "recruiterFeeAmount",
  "recruiterFeePercentage",
];

const temporaryInternFields = [...commonFields, "rebateTime", "1stReplacement"];

export const activeFieldsObj = {
  Permanent: [
    "employmentType",
    "requiredTime",
    "salaryType",
    "currency",
    // "baseSalary",
    // "salaryRange",
    "recruiterFee",
    "recruiterFeeType",
    "recruiterFeeAmount",
    "recruiterFeePercentage",
    "rebateTime",
    "1stReplacement",
  ],
  Freelance: commonFields,
  Temporary: temporaryInternFields,
  Interim: temporaryInternFields,
};

// export const replacementName = {
//   1: "ST",
//   2: "ND",
//   3: "RD",
// };
