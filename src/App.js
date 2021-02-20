import NormalForm from './forms/NormalForm'
import FormikDemo from './FormikDemo'
import FormikContextDemo from './FormikContextDemo'
import './App.css'
function App() {
  return (
    <div className="App">
      <div className="container">
        <sc-accordion multiple>
          <sc-accordion-item heading="No lib" active={true}>
            <NormalForm />
          </sc-accordion-item>
          <sc-accordion-item heading="Formik" active={true}>
            <div className="row">
              <div className="col">
                <h2 style={{ margin: 0 }}>Formik</h2>
              </div>
              <sc-button
                href="https://formik.org/docs/overview"
                target="_blank">
                Docs
              </sc-button>
            </div>
            <FormikDemo />
          </sc-accordion-item>

          <sc-accordion-item heading="Formik + Yup" active={true}>
            <div className="row">
              <div className="col"></div>
              <sc-button href="https://github.com/jquense/yup" target="_blank">
                Yup Docs
              </sc-button>
            </div>
          </sc-accordion-item>
          <sc-accordion-item heading="Formik Context" active={true}>
            <FormikContextDemo />
          </sc-accordion-item>
        </sc-accordion>
      </div>
    </div>
  )
}

export default App
