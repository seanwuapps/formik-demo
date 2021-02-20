import React from 'react'
import {
  Field,
  ErrorMessage,
  // useFormikContext
} from 'formik'

const InputGroup = ({ label, name, ...props }) => {
  // const { values } = useFormikContext()
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <ErrorMessage name={name} />
      <Field name={name} {...props} />
    </div>
  )
}

export default InputGroup
