import React from 'react'
import { useFormikContext } from 'formik'
import InputGroup from './InputGroup'
import Json from 'react-json-view'

const FormInner = () => {
  const { isValid, values, errors } = useFormikContext()
  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
      <sc-accordion>
        <sc-accordion-item heading="Form state">
          <Json src={values} theme="ocean" />
          <Json src={errors} theme="ocean" />
        </sc-accordion-item>
      </sc-accordion>
      <InputGroup name="email" label="Email" type="email" />
      <InputGroup name="password" label="Password" type="password" />

      <sc-button type="submit" block disabled={!isValid}>
        Submit
      </sc-button>
    </div>
  )
}

export default FormInner
