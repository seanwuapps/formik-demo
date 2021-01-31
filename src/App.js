import BrowserForm from "./BrowserForm";
import WCForm from "./WCForm";
import FormikDemo from "./FormikDemo";
import FormikContextDemo from "./FormikContextDemo";

function App() {
  return (
    <>
      <div className="container">
        <sc-accordion multiple>
          <sc-accordion-item heading="Formik" active={true}>
            <div className="row">
              <div className="col">
                <h2 style={{ margin: 0 }}>Formik</h2>
              </div>
              <sc-button
                href="https://formik.org/docs/overview"
                target="_blank"
              >
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
            <FormikContextDemo />
          </sc-accordion-item>
          <sc-accordion-item heading="Formik Context" active={true}>
            <div className="row">
              <div className="col">
                <h2 style={{ margin: 0 }}>Formik</h2>
              </div>
              <sc-button
                href="https://formik.org/docs/overview"
                target="_blank"
              >
                Docs
              </sc-button>
            </div>
            <FormikDemo />
          </sc-accordion-item>
        </sc-accordion>
      </div>
    </>
  );
}

export default App;
