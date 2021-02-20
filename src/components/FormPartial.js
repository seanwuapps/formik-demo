import { useFormikContext, ErrorMessage, Field } from 'formik'

const FormPartial = () => {
  const {
    values,
    errors,
    handleChange,
    isSubmitting,
    isValid,
  } = useFormikContext()

  return (
    <>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" value={values.email} />
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
      <button class="mt-2" type="submit" disabled={isSubmitting && !isValid}>
        Submit
      </button>
    </>
  )
}
export default FormPartial
