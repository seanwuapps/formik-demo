import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormPartial from "./components/FormPartial";

const FormDemo = () => {
  const initialValues = {
    email: "test@test.com",
    password: "Test123",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        <Form className="form">
          <FormPartial></FormPartial>
        </Form>
      </Formik>
    </div>
  );
};

export default FormDemo;
