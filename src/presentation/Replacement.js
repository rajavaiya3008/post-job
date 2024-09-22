import React, { Fragment, useEffect, useState } from 'react'
import InputField from '../shared/InputField'
import { useDispatch, useSelector } from 'react-redux';
import { ContractTypeContainer } from '../container/ContractTypeContainer';
import { handleContractValidation, handleReplacementFields } from '../redux/slices/postjob';
import { onChange } from '../redux/slices/form';

// const field = {
//     type:'number',
//     id:`${replacementFields.length+1}stReplacement`,
//     name:`${replacementFields.length+1}stReplacement`,
//     label:`${replacementFields.length+1}ST MONTH`,
//     placeholder:'Free Replacement'
// }


const Replacement = ({handleChange ,formName}) => {

    const dispatch = useDispatch()
    const {replacementFields,contractValidation,formData,addFields} = ContractTypeContainer()
    const contractData = formData[formName]
    // const {replacementFields} = useSelector(state => state.postjob)
    console.log('replacementFields', replacementFields)

    const removeReplacement = (name) => {
        console.log('name', name)
        const newReplacementFields = replacementFields.filter((field) => field.name !== name).map((field,i) => ({
            type:'number',
            id:`${i+1}stReplacement`,
            name:`${i+1}stReplacement`,
            label:`${i+1}ST MONTH`,
            placeholder:'Free Replacement'
        }))
        console.log('newReplacementFields', newReplacementFields)
        console.log('contractValidation', contractValidation)
        const newValidation = Object.fromEntries(Object.entries(contractValidation).filter(([key],i) => !key.includes('Replacement')))
        console.log('newValidation', newValidation)
        newReplacementFields.forEach((field) => {
            newValidation[field.name] = [{ required: true, message: "Please Enter Replacement" }]
        })
        console.log('newValidation', newValidation)
        console.log('contractData', contractData)
        dispatch(onChange({name,value:'',formName}))
        dispatch(handleReplacementFields(newReplacementFields))
        dispatch(handleContractValidation(newValidation))

    }


  return (
    <div className=''>
        {replacementFields?.map((field, i) => {
        const value = formData?.[formName]?.[field.name] ?? '';
        const error = formData?.error?.[formName]?.[field.name];
        const top = 20+(20*i*3)
        switch (field.type) {
          case "number":
            return (
                <Fragment key={i}>
                <button onClick={() => removeReplacement(field.name)} className='translate-x-[-15px] translate-y-[55px]'>X</button>
              <InputField
                {...{ ...field, value, error, handleChange,isActive:true }}
                />
                </Fragment>
            );
        }
      })}

        <button onClick={() => addFields()} className='text-blue-700 mt-[20px]'>+ Add {replacementFields?.length+1}th month</button>
    </div>
  )
}
// absolute top-[${top}%] left-[-3%]

export default Replacement