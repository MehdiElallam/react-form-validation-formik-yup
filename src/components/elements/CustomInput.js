import React from 'react'
import { ErrorMessage, useField } from 'formik'

export const CustomInput = ({label,...props}) => {

    const [field, meta] = useField(props)
    console.log(field)
    return (
        <>
            <label style={{paddingLeft:0}} className="mb-2" htmlFor={field.name}>{label}</label>
            <input 
                className={`form-control ${meta.touched && meta.error && 'is-invalid'}`} 
                autoComplete="off" 
                {...field}
                {...props}    
            />

            <ErrorMessage component='small' className="mt-1" style={{color:'red', paddingLeft : 0}}  name={field.name} />
        </>
    )
}
