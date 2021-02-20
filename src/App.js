import NormalForm from './forms/NormalForm'
import FormikDemo from './forms/FormikDemo'
import FormikContextDemo from './forms/FormikContextDemo'
import './App.css'
function App() {
  return (
    <div className="App">
      <div className="container">
        <sc-accordion multiple>
          <sc-accordion-item heading="Baseline" active={true}>
            <NormalForm />
          </sc-accordion-item>

          <sc-accordion-item heading="Formik + Yup">
            <FormikDemo />
          </sc-accordion-item>
          <sc-accordion-item heading="Formik Context">
            <FormikContextDemo />
          </sc-accordion-item>
        </sc-accordion>
      </div>
    </div>
  )
}

export default App
