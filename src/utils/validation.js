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