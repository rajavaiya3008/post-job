export const recruitmentInfoValidation = {
  cvLimit: [{ required: true, message: "Please Enter CV" }],
  urgency: [{ required: true, message: "Please Select Urgency" }],
  recruiterMessage: [
    { required: true, message: "Please Enter Recruiters Message" },
    { length: 20, message: "Message Must be 150 char" },
  ],
  termsAndServices: [
    { required: true, message: "Please Check Terms and Conditions" },
  ],
};

export const recruitmentInfoData = [
  {
    formName: "recruitmentInfo",
    sectionTitle: "Specify the number of CVs",
    inputFieldStyle: "relative",
    inputFields: [
      {
        type: "number",
        id: "cvLimit",
        name: "cvLimit",
        label: "TOTAL CVS LIMIT",
        placeholder: "Maximum Total CVs",
        disabledByCheckbox: "cvLimit",
        inputDivStyle: "w-[400px]",
      },
      {
        type: "checkbox",
        id: "cvLimitCheckBox",
        name: "cvLimit",
        value: "Unlimited CVs",
        label: "Unlimited CVs?",
        checkDivStyle: "absolute w-[200px] left-[70%] top-[55%]",
      },
    ],
  },
  {
    formName: "recruitmentInfo",
    sectionTitle: "Urgency",
    inputFieldStyle: "mt-[30px]",
    inputFields: [
      {
        type: "radio",
        id: "Not Urgent",
        name: "urgency",
        value: "Not Urgent",
        label: "Not Urgent",
        radioStyle: "hidden",
        radioLabel:
          "w-[170px] p-[15px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
      },
      {
        type: "radio",
        id: "Medium",
        name: "urgency",
        value: "Medium",
        label: "Medium",
        radioStyle: "hidden",
        radioLabel:
          "w-[170px] p-[15px] px-[30px] ml-[50px] text-[16px] text-center rounded-[10px] bg-gray-300",
      },
      {
        type: "radio",
        id: "High Urgency",
        name: "urgency",
        value: "High Urgency",
        label: "High Urgency",
        radioStyle: "hidden",
        radioLabel:
          "w-[170px] p-[15px] px-[30px] ml-[50px] text-[16px] text-center rounded-[10px] bg-gray-300",
      },
    ],
  },
  {
    formName: "recruitmentInfo",
    sectionTitle: "Message to Recruiters",
    inputFields: [
      {
        type: "text-area",
        id: "recruiterMessage",
        name: "recruiterMessage",
        placeholder: "Message to Recruiters",
      },
    ],
  },
  {
    formName: "recruitmentInfo",
    sectionTitle: "Terms and Service",
    inputFields: [
      {
        type: "checkbox",
        id: "termsAndServices",
        name: "termsAndServices",
        value: "termsAndServices",
        label:
          "Accept and agree with the DDatori Terms of Serviceand Privacy Policy",
      },
    ],
  },
];
