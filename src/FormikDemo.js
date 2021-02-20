import React, { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const FormDemo = () => {
  const initialValues = {
    email: 'test@test.com',
    password: 'Test123',
  }

  const validate = (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
      errors.password = 'Password is required'
    }
    return errors
  }

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 400)
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
          /* and other goodies */
        }) => (
          <Form className="form">
            {/* <form onSubmit={handleSubmit}> */}

            <pre>{JSON.stringify(values)}</pre>
            <pre>{JSON.stringify(errors)}</pre>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" className="mt-2" />
              {/* {errors.email && touched.email && errors.email} */}
              <div className="error">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" className="mt-2"></Field>
              {/* {errors.password && touched.password && errors.password} */}
              <div className="error">
                <ErrorMessage name="password" />
              </div>
            </div>
            <button
              class="mt-2"
              type="submit"
              disabled={isSubmitting && !isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormDemo
