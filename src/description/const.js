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
};
