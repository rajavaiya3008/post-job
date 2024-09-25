import { useDispatch, useSelector } from "react-redux";
import {
  baseSalaryFields,
  contractSections,
  dailyRateFields,
  negotiableField,
  rateRangeFields,
  recruiterFeeFields,
  salaryRangeFields,
  activeFieldsObj,
} from "../description/contract.description";
import {
  handleContractValidation,
  handleReplacementFields,
} from "../redux/slices/postjob";
import { onChange } from "../redux/slices/form";

export const ContractTypeContainer = (props) => {
  const { formName } = props ?? {};
  // console.log("Contract Rendered");
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);
  const replacementFields = useSelector(
    (state) => state.postjob.replacementFields
  );
  const validationFields = useSelector(
    (state) => state.postjob.contractValidation
  );
  // console.log("contractValidation", validationFields);

  const empType = formData?.contractType?.employmentType;

  const contractValidation = empType
    ? Object.fromEntries(
        Object.entries(validationFields).filter(
          ([key]) =>
            activeFieldsObj[empType]?.includes(key) ||
            (key.includes("Replacement") && empType !== "Freelance")
        )
      )
    : { ...validationFields };
  // console.log("contractValidation", contractValidation);

  if (formData.contractType.recruiterFeeType === "Fixed") {
    delete contractValidation.recruiterFeePercentage;
  } else if (formData.contractType.recruiterFeeType === "Percentage") {
    delete contractValidation.recruiterFeeAmount;
  }

  let contractFields = formData?.contractType?.employmentType
    ? contractSections?.[formData?.contractType?.employmentType]
    : contractSections?.Default;

  const salaryFieldIndex = contractFields.findIndex(
    (sec) => sec.name === "salaryType"
  );

  switch (formData?.contractType?.salaryType) {
    case "Base Salary": {
      contractFields = contractFields.toSpliced(
        salaryFieldIndex + 1,
        0,
        baseSalaryFields,
        recruiterFeeFields
      );
      contractValidation.baseSalary = [
        { required: true, message: "Please Enter Salary" },
      ];
      break;
    }
    case "Salary Range": {
      contractFields = contractFields.toSpliced(
        salaryFieldIndex + 1,
        0,
        salaryRangeFields,
        recruiterFeeFields
      );
      contractValidation.salaryRange = [
        { type: "range", message: "Invalid Range" },
      ];
      break;
    }
    case "Negotiable": {
      contractFields = contractFields.toSpliced(
        salaryFieldIndex + 1,
        0,
        negotiableField,
        recruiterFeeFields
      );
      break;
    }
    case "Daily Rate": {
      contractFields = contractFields.toSpliced(
        salaryFieldIndex + 1,
        0,
        dailyRateFields,
        recruiterFeeFields
      );
      contractValidation.dailyRate = [
        { required: true, message: "Please Enter Salary" },
      ];
      break;
    }
    case "Rate Range": {
      contractFields = contractFields.toSpliced(
        salaryFieldIndex + 1,
        0,
        rateRangeFields,
        recruiterFeeFields
      );
      contractValidation.rateRange = [
        { type: "range", message: "Invalid Range" },
      ];
      break;
    }
  }

  // const [replacementFields, setReplacementFields] = useState([])
  // const [validation,setValidation] = useState(contractValidation)

  // useEffect(() => {
  //   console.log('Contract Rendered useEffect')
  //     addFields()
  // },[])

  const addFields = () => {
    // console.log("Add field Called");
    const field = {
      type: "number",
      id: `${replacementFields.length + 1}thReplacement`,
      name: `${replacementFields.length + 1}thReplacement`,
      label: `${replacementFields.length + 1}TH MONTH`,
      placeholder: "Free Replacement",
      disabledByCheckbox: `${replacementFields.length + 1}thReplacement`,
      min: 0,
      max: 100,
    };
    dispatch(handleReplacementFields([...replacementFields, field]));
    dispatch(
      handleContractValidation({
        ...contractValidation,
        [field.name]: [{ required: true, message: "Please Enter Replacement" }],
      })
    );
    // setReplacementFields([...replacementFields,field])
    // setValidation(prev => ({...validation,[field.name]: [{ required: true, message: "Please Enter Replacement" }]}))
    // console.log('validationFields',{...contractValidation,[field.name]: [{ required: true, message: "Please Enter Replacement" }]})s
  };

  const removeReplacement = (name) => {
    console.log("name", name);
    const newReplacementFields = replacementFields
      .filter((field) => field.name !== name)
      .map((field, i) => ({
        type: "number",
        id: `${i + 1}thReplacement`,
        name: `${i + 1}thReplacement`,
        label: `${i + 1}TH MONTH`,
        placeholder: "Free Replacement",
        disabledByCheckbox: `${i + 1}thReplacement`,
        min: 0,
        max: 100,
      }));
    // console.log("newReplacementFields", newReplacementFields);
    // console.log("contractValidation", contractValidation);
    const newValidation = Object.fromEntries(
      Object.entries(contractValidation).filter(
        ([key], i) => !key.includes("Replacement")
      )
    );
    // console.log("newValidation", newValidation);
    newReplacementFields.forEach((field) => {
      newValidation[field.name] = [
        { required: true, message: "Please Enter Replacement" },
      ];
    });
    // console.log("newValidation", newValidation);
    // console.log("contractData", contractData);
    dispatch(onChange({ name, value: "", formName }));
    dispatch(handleReplacementFields(newReplacementFields));
    dispatch(handleContractValidation(newValidation));
  };

  return {
    contractFields,
    replacementFields,
    contractValidation,
    formData,
    addFields,
    removeReplacement,
  };
};
