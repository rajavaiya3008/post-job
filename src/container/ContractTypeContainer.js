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

export const ContractTypeContainer = () => {
  console.log("Contract Rendered");
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);
  const replacementFields = useSelector(
    (state) => state.postjob.replacementFields
  );
  const validationFields = useSelector(
    (state) => state.postjob.contractValidation
  );
  console.log("contractValidation", validationFields);

  const empType = formData?.contractType?.employmentType;

  const contractValidation = Object.fromEntries(
    Object.entries(validationFields).filter(
      ([key]) =>
        activeFieldsObj[empType]?.includes(key) || key.includes("Replacement")
    )
  );
  console.log("contractValidation", contractValidation);

  if (formData.contractType.recruiterFeeType === "Fixed") {
    delete contractValidation.recruiterFeePercentage;
  } else {
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
    console.log("Add field Called");
    const field = {
      type: "number",
      id: `${replacementFields.length + 1}thReplacement`,
      name: `${replacementFields.length + 1}thReplacement`,
      label: `${replacementFields.length + 1}TH MONTH`,
      placeholder: "Free Replacement",
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

  return {
    contractFields,
    replacementFields,
    contractValidation,
    formData,
    addFields,
  };
};
