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
  // replacementName,
} from "../description/contract.description";
import {
  handleContractValidation,
  handleReplacementFields,
} from "../redux/slices/postjob";
import { onChange } from "../redux/slices/form";
import { objectEntries, objectFromEntries } from "../utils/commonFunction";
import {
  FIXED,
  FREELANCE,
  NEGOTIABLE,
  NUM_INPUT,
  PERCENTAGE,
  RANGE_INPUT,
  REPLACEMENT,
  SALARY_RANGE,
  SALARY_TYPE,
  SAL_BASE,
  SAL_DAILY,
  SAL_RANGE,
  SAL_RATE_RANGE,
} from "../utils/constantVariable";
import { getOrdinalSuffix } from "../utils/constantFun";

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
    ? objectFromEntries(
        objectEntries(validationFields).filter(
          ([key]) =>
            activeFieldsObj[empType]?.includes(key) ||
            (key.includes(REPLACEMENT) && empType !== FREELANCE)
        )
      )
    : { ...validationFields };
  // console.log("contractValidation", contractValidation);

  if (formData.contractType.recruiterFeeType === FIXED) {
    delete contractValidation.recruiterFeePercentage;
  } else if (formData.contractType.recruiterFeeType === PERCENTAGE) {
    delete contractValidation.recruiterFeeAmount;
  }

  let contractFields = formData?.contractType?.employmentType
    ? contractSections?.[formData?.contractType?.employmentType]
    : contractSections?.Default;

  const salaryFieldIndex = contractFields.findIndex(
    (sec) => sec.name === SALARY_TYPE
  );

  switch (formData?.contractType?.salaryType) {
    case SAL_BASE: {
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
    case SAL_RANGE: {
      contractFields = contractFields.toSpliced(
        salaryFieldIndex + 1,
        0,
        salaryRangeFields,
        recruiterFeeFields
      );
      contractValidation.salaryRange = [
        { type: RANGE_INPUT, message: "Invalid Range" },
      ];
      break;
    }
    case NEGOTIABLE: {
      contractFields = contractFields.toSpliced(
        salaryFieldIndex + 1,
        0,
        negotiableField,
        recruiterFeeFields
      );
      break;
    }
    case SAL_DAILY: {
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
    case SAL_RATE_RANGE: {
      contractFields = contractFields.toSpliced(
        salaryFieldIndex + 1,
        0,
        rateRangeFields,
        recruiterFeeFields
      );
      contractValidation.rateRange = [
        { type: RANGE_INPUT, message: "Invalid Range" },
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
      type: NUM_INPUT,
      id: `${replacementFields.length + 1}thReplacement`,
      name: `${replacementFields.length + 1}thReplacement`,
      label: `${replacementFields.length + 1}${getOrdinalSuffix(
        replacementFields.length + 1
      )} MONTH`,
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
    // console.log("name", name);
    // console.log(Number(name[0]));
    const deleteFieldNum = Number(name[0]);

    const newReplacementFields = replacementFields
      .filter((field) => field.name !== name)
      .map((field, i) => ({
        type: NUM_INPUT,
        id: `${i + 1}thReplacement`,
        name: `${i + 1}thReplacement`,
        label: `${i + 1}${getOrdinalSuffix(i + 1)} MONTH`,
        placeholder: "Free Replacement",
        disabledByCheckbox: `${i + 1}thReplacement`,
        min: 0,
        max: 100,
      }));
    newReplacementFields.forEach((field, i) => {
      dispatch(
        onChange({
          name: field.name,
          value:
            i + 1 >= deleteFieldNum
              ? formData[formName][`${i + 2}thReplacement`]
              : formData[formName][`${i + 1}thReplacement`],
          formName,
        })
      );
    });
    // console.log("newReplacementFields", newReplacementFields);
    // console.log("contractValidation", contractValidation);
    const newValidation = objectFromEntries(
      objectEntries(contractValidation).filter(
        ([key], i) => !key.includes(REPLACEMENT)
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
    dispatch(
      onChange({
        name: `${newReplacementFields.length + 1}thReplacement`,
        value: "",
        formName,
      })
    );
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
