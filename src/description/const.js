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
  recruiterFeeType: [{ required: true, message: "Please Select Recruiter Fee Type" }],
  recruiterFeeAmount: [{ required: true, message: "Please Enter Recruiter Fee Amount" }],
  recruiterFeePercentage: [{ required: true, message: "Please Enter Recruiter Fee Percentage" }]
};
