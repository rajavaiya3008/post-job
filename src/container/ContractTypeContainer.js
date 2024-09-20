import { useDispatch, useSelector } from "react-redux";
import { contractSections } from "../description/contract.description";
import { handleContractValidation, handleReplacementFields } from "../redux/slices/postjob";


export const ContractTypeContainer = () => {
  console.log('Contract Rendered')
  const dispatch = useDispatch()
    const formData = useSelector((state) => state.formData);
    const replacementFields = useSelector(state => state.postjob.replacementFields)
    const contractValidation = useSelector(state => state.postjob.contractValidation)
    const contractFields = formData?.contractType?.employmentType
      ? contractSections?.[formData?.contractType?.employmentType]
      : contractSections?.Default;
    

    // const [replacementFields, setReplacementFields] = useState([])
    // const [validation,setValidation] = useState(contractValidation)

    // useEffect(() => {
    //   console.log('Contract Rendered useEffect')
    //     addFields()
    // },[])

    const addFields = () => {
      console.log('Add field Called')
        const field = {
            type:'number',
            id:`${replacementFields.length+1}stReplacement`,
            name:`${replacementFields.length+1}stReplacement`,
            label:`${replacementFields.length+1}ST MONTH`,
            placeholder:'Free Replacement'
        }
        dispatch(handleReplacementFields([...replacementFields,field]))
        dispatch(handleContractValidation({...contractValidation,[field.name]: [{ required: true, message: "Please Enter Replacement" }]}))
        // setReplacementFields([...replacementFields,field])
        // setValidation(prev => ({...validation,[field.name]: [{ required: true, message: "Please Enter Replacement" }]}))
        // console.log('validationFields',{...contractValidation,[field.name]: [{ required: true, message: "Please Enter Replacement" }]})s
    }

      return {contractFields,replacementFields,contractValidation,formData,addFields}
}

