import React from 'react'
import InputField from './InputField'
import { useSelector } from 'react-redux'

const Section = ({sectionTitle,inputFields,formName}) => {
    
    const formData = useSelector(state => state.formData)

    const handleChange = (e) => {
        console.log('value', e.target.value)
    }

  return (
    <div>
        <h3>{sectionTitle}</h3>
        <div>
            {
                inputFields.map((field,i) => {
                    const value = formData[formName][field.name] ?? ''
                    const error = formData[field.name]
                    if(field.type === 'text'){
                        return <InputField key={i} {...{...field,value,handleChange}}/>
                    }
                })
            }
        </div>
    </div>
  )
}

export default Section