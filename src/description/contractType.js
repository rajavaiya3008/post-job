// import Replacement from "../presentation/Replacement";


//export const contValidation = {
//   employmentType: [
//     { required: true, message: "Please Select Employment Type" },
//   ],
//   requiredTime: [{ required: true, message: "Please Select Required Time" }],
//   contractLength: [
//     { required: true, message: "Please Select Contract Length" },
//   ],
//   salaryType: [{ required: true, message: "Please Select Salary Type" }],
//   rebateTime: [{ required: true, message: "Please Select Rebate Time" }]
// };

// export const rebateTimeFields = {
//   formName: "contractType",
//   sectionTitle: "Rebate time",
//   inputFieldStyle: "mt-[30px]",
//   inputFields: [
//     {
//       type: "radio",
//       id: "Apply for all agencies",
//       name: "rebateTime",
//       value: "Apply for all agencies",
//       label: "Apply for all agencies",
//     },
//     {
//       type: "radio",
//       id: "Use default for PSL",
//       name: "rebateTime",
//       value: "Use default for PSL",
//       label: "Use default for PSL",
//       radioStyle:'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ml-[40px]'
//     },
//   ],
//   childComponents: [
//     {
//       visible: "",
//       name: "rebateTime",
//       ChildComponent: Replacement,
//     },
//   ],
// };

// export const salaryTypeFields = {
//   formName: "contractType",
//   sectionTitle: "Salary Type",
//   name: "salaryType",
//   inputFieldStyle: "mt-[30px] flex flex-wrap",
//   inputFields: [
//     {
//       type: "radio",
//       id: "Base Salary",
//       name: "salaryType",
//       value: "Base Salary",
//       label: "Base Salary",
//       active: ["", "Permanent", "Temporary", "Interim"],
//       activeName: "employmentType",
//       radioStyle: "hidden",
//       radioLabel:
//         "w-[170px] p-[15px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
//     },
//     {
//       type: "radio",
//       id: "Salary Range",
//       name: "salaryType",
//       value: "Salary Range",
//       label: "Salary Range",
//       active: ["", "Permanent", "Temporary", "Interim"],
//       activeName: "employmentType",
//       radioStyle: "hidden",
//       radioLabel:
//         "w-[170px] p-[15px] ml-[20px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
//     },
//     {
//       type: "radio",
//       id: "Negotiable",
//       name: "salaryType",
//       value: "Negotiable",
//       label: "Negotiable",
//       active: ["", "Permanent", "Temporary", "Interim"],
//       activeName: "employmentType",
//       radioStyle: "hidden",
//       radioLabel:
//         "w-[170px] p-[15px] ml-[20px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
//     },
//     {
//       type: "radio",
//       id: "Daily Rate",
//       name: "salaryType",
//       value: "Daily Rate",
//       label: "Daily Rate",
//       active: ["", "Freelance"],
//       activeName: "employmentType",
//       radioStyle: "hidden",
//       radioLabel:
//         "w-[170px] p-[15px] mt-[10px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
//     },
//     {
//       type: "radio",
//       id: "Rate Range",
//       name: "salaryType",
//       value: "Rate Range",
//       label: "Rate Range",
//       active: ["", "Freelance"],
//       activeName: "employmentType",
//       radioStyle: "hidden",
//       radioLabel:
//         "w-[170px] p-[15px] mt-[10px] ml-[20px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
//     },
//   ],
// };

// export const contractLength = {
//   formName: "contractType",
//   sectionTitle: "Specify contract length",
//   inputFields: [
//     {
//       type: "select",
//       id: "contractLength",
//       name: "contractLength",
//       label: "CONTRACT LENGTH",
//       defaultVal: "Length in months",
//       options: ["1 Month", "3 Months", "6 Months", "Others"],
//     },
//   ],
// };

// export const contractData = [
//   {
//     formName: "contractType",
//     sectionTitle: "Choose employment type",
//     name: "employmentType",
//     inputFieldStyle: "mt-[30px]",
//     inputFields: [
//       {
//         type: "radio",
//         id: "Permanent",
//         name: "employmentType",
//         value: "Permanent",
//         label: "Permanent",
//         radioStyle: "hidden",
//         radioLabel:
//           "w-[170px] p-[15px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
//       },
//       {
//         type: "radio",
//         id: "Freelance",
//         name: "employmentType",
//         value: "Freelance",
//         label: "Freelance",
//         radioStyle: "hidden",
//         radioLabel:
//           "w-[170px] p-[15px] ml-[40px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
//       },
//       {
//         type: "radio",
//         id: "Temporary",
//         name: "employmentType",
//         value: "Temporary",
//         label: "Temporary",
//         radioStyle: "hidden",
//         radioLabel:
//           "w-[170px] p-[15px] ml-[40px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
//       },
//       {
//         type: "radio",
//         id: "Interim",
//         name: "employmentType",
//         value: "Interim",
//         label: "Interim",
//         radioStyle: "hidden",
//         radioLabel:
//           "w-[170px] p-[15px] ml-[40px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
//       },
//     ],
//   },
//   {
//     formName: "contractType",
//     sectionTitle: "What is a required time load",
//     name: "requiredTime",
//     inputFieldStyle: "mt-[30px]",
//     inputFields: [
//       {
//         type: "radio",
//         id: "Full Time",
//         name: "requiredTime",
//         value: "Full Time",
//         label: "Full Time",
//         radioStyle: "hidden",
//         radioLabel:
//           "w-[170px] p-[15px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
//       },
//       {
//         type: "radio",
//         id: "Part Time",
//         name: "requiredTime",
//         value: "Part Time",
//         label: "Part Time",
//         radioStyle: "hidden",
//         radioLabel:
//           "w-[170px] p-[15px] ml-[50px] px-[30px] text-[16px] text-center rounded-[10px] bg-gray-300",
//       },
//     ],
//   },
// ];

// export const contractSections = {
//   Permanent: [...contractData, salaryTypeFields,rebateTimeFields],
//   Freelance: [...contractData, contractLength, salaryTypeFields],
//   Temporary: [...contractData, contractLength, salaryTypeFields,rebateTimeFields],
//   Interim: [...contractData, contractLength, salaryTypeFields,rebateTimeFields],
//   Default: [...contractData, contractLength, salaryTypeFields,rebateTimeFields],
// };
