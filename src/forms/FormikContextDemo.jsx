import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import FormInner from '../components/FormInner'

const FormikContextDemo = () => {
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
        <Form className="form">
          <FormInner />
        </Form>
      </Formik>
    </div>
  )
}

export default FormikContextDemo
