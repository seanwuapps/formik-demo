import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import Json from 'react-json-view'

const FormDemo = () => {
  const initialValues = {
    email: '',
    password: '',
  }

  const schema = yup.object().shape({
    email: yup.string().required('Email is required').email('Email is invalid'),
    password: yup
      .string()
      .required('Password is required.')
      .min(6, 'Password must be at least 6 characters long.')
      .matches('.*\\d.*', 'Password must contain numbers')
      .matches('.*[a-z].*', 'Password must contain lowercase letters')
      .matches('.*[A-Z].*', 'Password must contain uppercase letters')
      .matches('.*[@$!%*#?&].*', 'Password must contain special characters.'),
  })

  const onSubmit = (values) => {
    alert(JSON.stringify(values))
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}>
        {({
          values,
          errors,
          isSubmitting,
          isValid,
          /*
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          // and other goodies
          */
        }) => (
          <Form className="form">
            {/* <form onSubmit={handleSubmit}> */}

            <sc-accordion>
              <sc-accordion-item heading="Form state">
                <Json src={values} theme="ocean" />
                <Json src={errors} theme="ocean" />
              </sc-accordion-item>
            </sc-accordion>
            <div>
              <label htmlFor="email">Email</label>
              <ErrorMessage name="email" />
              <Field name="email" type="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <ErrorMessage name="password" />
              <Field type="password" name="password"></Field>
            </div>
            <sc-button type="submit" block disabled={!isValid}>
              Submit
            </sc-button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormDemo
