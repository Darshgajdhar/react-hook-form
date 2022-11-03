import React from 'react'
import FormInputFieldText from './style'

const FormInputs = ({ register, fieldData, errors }) => {
    return (
        <>
            <FormInputFieldText
                name={fieldData.name}
                placeholder={fieldData.name}
                type={fieldData.type}
                {...register}
            />
            <span>{errors}</span>
        </>
    )
}

export default FormInputs