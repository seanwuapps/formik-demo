const WCForm = () => {
  return (
    <form>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div>
            <sc-input
              block
              engraved="2"
              label="Name"
              type="text"
              required
              autocomplete="off"
              class="mb-3"
            ></sc-input>
          </div>
          <div>
            <sc-input
              block
              engraved="2"
              label="Email"
              type="email"
              required
              autocomplete="off"
              class="mb-3"
            ></sc-input>
          </div>
          <div>
            <sc-input
              block
              engraved="2"
              label="Password (min 6 characters)"
              type="password"
              minlength="6"
              required
              autocomplete="off"
              class="mb-3"
            ></sc-input>
          </div>

          <div>
            <sc-button type="submit" block ray-tracing>
              Submit
            </sc-button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default WCForm;
