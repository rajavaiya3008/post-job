export const validation = (name,value,formValidation) => {
    const validationField = formValidation[name]

    const error = {}

    validationField.some((field) => {
        if(field.required && !value){
            error[name] = field.message;
            return true;
        }
        if(field.length > value.length){
            error[name] = field.message;
            return true;
        }
        if(field.pattern && !value.match(field.pattern)){
            error[name] = field.message;
            return true;
        }
        return false
    })

    return error;
}

export const validateAllData = (data,validate) => {

    let error = {};

    for(let key in validate){
        validate[key].some((field) => {
            if(field.required && !data?.[key]){
                error[key] = field.message;
                return true;
            }
            if(field.length > data?.[key]?.length){
                error[key] = field.message;
                return true;
            }
            if(field.pattern && !data?.[key].match(field.pattern)){
                error[key] = field.message;
                return true;
            }
            return false
        })
    }
    
    return error;
}

// export const contValidation = {
//     employmentType: [
//       { required: true, message: "Please Select Employment Type" },
//     ],
//     requiredTime: [{ required: true, message: "Please Select Required Time" }],
//     contractLength: [
//       { required: true, message: "Please Select Contract Length" },
//     ],
//     salaryType: [{ required: true, message: "Please Select Salary Type" }],
//     rebateTime: [{ required: true, message: "Please Select Rebate Time" }]
//   };